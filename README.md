# Örnek İş Dekor – Ankara Bahçe Mobilyaları

Örnek İş Dekor, Ankara Ostim OSB merkezli bir bahçe mobilyası üreticisi ve satıcısının Next.js 15 ile geliştirilmiş kurumsal web sitesidir.

## Teknolojiler

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (ikonlar)
- **Nodemailer** (e-posta gönderimi)
- **Leaflet** (harita)

## Sayfalar

| Sayfa | URL | Açıklama |
|---|---|---|
| Ana Sayfa | `/` | Ürünler, özellikler, istatistikler |
| Ürünler | `/products` | Kategoriye göre filtrelenebilir ürün listesi |
| Galeri | `/galeri` | Lightbox destekli proje galerisi |
| Özel Tasarım | `/ozel-tasarim` | Adım adım mobilya konfigüratörü |
| Hakkımızda | `/about` | Şirket hikayesi, değerler, zaman çizelgesi |
| İletişim | `/contact` | İletişim formu + Leaflet haritası |
| Ankara SEO | `/bahce-mobilyasi-ankara` | Ankara odaklı SEO landing sayfası |

## Kurulum

```bash
# Bağımlılıkları yükleyin
npm install
# veya
pnpm install

# Ortam değişkenlerini ayarlayın
cp .env.example .env.local
# .env.local dosyasını SMTP bilgilerinizle doldurun

# Geliştirme sunucusunu başlatın
npm run dev
```

## E-posta Konfigürasyonu

`.env.local` dosyasını oluşturup aşağıdaki değişkenleri doldurun:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="Örnek İş Dekor <your-email@gmail.com>"
CONTACT_EMAIL=info@ornekisdekor.com
```

Gmail kullanıyorsanız, Google Hesabınızda **Uygulama Şifresi** oluşturmanız gerekir.

## Özellikler

- 🌿 Yeşil renk teması (Tailwind green-800/700/600)
- 📱 Tam responsive tasarım
- 🗺️ Leaflet haritası (OpenStreetMap)
- 📧 Nodemailer ile e-posta bildirimi
- 🛡️ Honeypot spam koruması
- ⚡ Rate limiting (15 dk'da 5 istek)
- 🔍 SEO meta etiketleri ve JSON-LD yapılandırılmış veri
- 🗺️ XML sitemap (`/sitemap.xml`)
- 🤖 robots.txt (`/robots.txt`)
- 🎨 Ürün konfigüratörü (6 adımlı)
- 🖼️ Lightbox destekli galeri

## Proje Yapısı

```
app/
├── layout.tsx                    # Root layout + JSON-LD
├── page.tsx                      # Ana sayfa
├── HomeContent.tsx               # Ana sayfa içeriği
├── sitemap.ts                    # XML sitemap
├── robots.ts                     # robots.txt
├── components/
│   ├── layout.tsx                # Header + Footer
│   ├── MobileMenu.tsx            # Mobil navigasyon
│   └── LeafletMap.tsx            # Harita bileşeni
├── products/
│   ├── page.tsx
│   └── ProductsContent.tsx       # Filtreli ürün listesi
├── galeri/
│   ├── page.tsx
│   └── GalleryContent.tsx        # Lightbox galerisi
├── ozel-tasarim/
│   ├── page.tsx
│   └── ConfiguratorContent.tsx   # 6 adımlı konfigüratör
├── about/
│   ├── page.tsx
│   └── AboutContent.tsx          # Hakkımızda
├── contact/
│   ├── page.tsx
│   └── ContactContent.tsx        # İletişim formu + harita
├── bahce-mobilyasi-ankara/
│   └── page.tsx                  # Ankara SEO landing
└── api/
    └── send-email/
        └── route.ts              # E-posta API endpoint
```

## Lisans

Tüm hakları saklıdır © 2025 Örnek İş Dekor.
