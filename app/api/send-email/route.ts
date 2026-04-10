import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000
  const maxRequests = 5

  const entry = rateLimitMap.get(ip)
  if (!entry || entry.resetAt < now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (entry.count >= maxRequests) {
    return false
  }

  entry.count++
  return true
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown"

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin." },
        { status: 429 }
      )
    }

    const body = await req.json()

    if (body.website) {
      return NextResponse.json({ success: true })
    }

    const { type, name, email, phone, message, configuratorData } = body

    if (!name || !email) {
      return NextResponse.json({ error: "Ad ve e-posta gereklidir." }, { status: 400 })
    }

    // Simple, ReDoS-safe email validation
    const emailStr = String(email)
    const atIndex = emailStr.indexOf("@")
    if (atIndex < 1 || atIndex !== emailStr.lastIndexOf("@") || emailStr.length > 254) {
      return NextResponse.json({ error: "Geçersiz e-posta adresi." }, { status: 400 })
    }
    const domain = emailStr.slice(atIndex + 1)
    if (!domain || !domain.includes(".") || domain.length < 3) {
      return NextResponse.json({ error: "Geçersiz e-posta adresi." }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    let subject = ""
    let htmlContent = ""

    if (type === "configurator") {
      subject = `Özel Tasarım Talebi - ${escapeHtml(String(name))}`
      htmlContent = `
        <h2>Yeni Özel Tasarım Talebi</h2>
        <h3>İletişim Bilgileri</h3>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(String(phone || "-"))}</p>
        <h3>Konfigürasyon</h3>
        <ul>
          <li><strong>Ürün Tipi:</strong> ${escapeHtml(String(configuratorData?.productType || "-"))}</li>
          <li><strong>Ölçüler:</strong> ${escapeHtml(String(configuratorData?.width || "-"))}cm x ${escapeHtml(String(configuratorData?.depth || "-"))}cm x ${escapeHtml(String(configuratorData?.height || "-"))}cm</li>
          <li><strong>Malzeme:</strong> ${escapeHtml(String(configuratorData?.material || "-"))}</li>
          <li><strong>Renk:</strong> ${escapeHtml(String(configuratorData?.color || "-"))}</li>
          <li><strong>Minder Kumaşı:</strong> ${escapeHtml(String(configuratorData?.fabric || "-"))}</li>
        </ul>
        ${message ? `<h3>Ek Notlar</h3><p>${escapeHtml(String(message))}</p>` : ""}
      `
    } else {
      subject = `İletişim Formu - ${escapeHtml(String(name))}`
      htmlContent = `
        <h2>Yeni İletişim Mesajı</h2>
        <p><strong>Ad Soyad:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>E-posta:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(String(phone || "-"))}</p>
        <h3>Mesaj</h3>
        <p>${escapeHtml(String(message || ""))}</p>
      `
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Örnek İş Dekor Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || "info@ornekisdekor.com",
      replyTo: email,
      subject,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("E-posta gönderme hatası:", error)
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    )
  }
}
