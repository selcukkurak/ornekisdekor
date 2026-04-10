import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Bahçe Mobilyası Ankara - Örnek İş Dekor | Ankara'da Bahçe Mobilyası",
  description:
    "Ankara'da bahçe mobilyası arıyorsanız doğru adrestesiniz. Ostim OSB'de 20+ yıllık deneyimle alüminyum, ahşap ve rattan bahçe mobilyaları. Ücretsiz montaj ve 3 yıl garanti.",
  keywords: [
    "bahçe mobilyası Ankara",
    "Ankara bahçe mobilyası",
    "Ankara dış mekan mobilyaları",
    "Ostim bahçe mobilyası",
    "alüminyum bahçe mobilyası Ankara",
  ],
}

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "Ankara'da bahçe mobilyası nereden alınır?",
    answer:
      "Örnek İş Dekor olarak Ankara Ostim OSB'de showroom ve atölyemizde tüm bahçe mobilyası ihtiyaçlarınızı karşılıyoruz. Hem hazır katalog ürünlerimizden seçim yapabilir, hem de özel ölçüde sipariş verebilirsiniz.",
  },
  {
    question: "Ankara iline ücretsiz teslimat yapıyor musunuz?",
    answer:
      "Evet, Ankara il sınırları içindeki tüm teslimatlarımız ücretsizdir. Montaj hizmeti de teslimat ücretine dahildir. Ankara dışı teslimatlar için ekibimizle iletişime geçebilirsiniz.",
  },
  {
    question: "Alüminyum bahçe mobilyaları ne kadar dayanıklı?",
    answer:
      "Kullandığımız marine grade alüminyum alaşımı, Ankara'nın sert kış koşullarına ve UV ışınlarına karşı son derece dayanıklıdır. Tüm alüminyum ürünlerimizde 3 yıl garanti sunuyoruz.",
  },
  {
    question: "Özel ölçüde sipariş alabiliyor musunuz?",
    answer:
      "Kesinlikle. Ostim atölyemizde müşterilerimizin belirlediği ölçü, renk ve malzemeye göre tamamen özel üretim yapıyoruz. Özel tasarım sayfamızı ziyaret ederek adımları takip edebilirsiniz.",
  },
  {
    question: "Bahçe mobilyasının kışın bakımı nasıl yapılır?",
    answer:
      "Alüminyum ürünler hava koşullarına dayanıklıdır, yılın her sezonunda dışarıda kalabilir. Ahşap ürünleri kış öncesi kaplama yağı ile korumayı, tekstil aksesuarları ise iç mekanda muhafaza etmeyi öneririz.",
  },
]

export default function BahceMobilyasiAnkara() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-green-300 text-sm mb-4">
            <MapPin size={14} />
            <span>Ostim OSB, Ankara</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ankara Bahçe Mobilyası –<br />Örnek İş Dekor
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mb-8 leading-relaxed">
            Ankara&apos;nın iklim koşullarına uygun, dayanıklı ve şık bahçe mobilyaları. 20 yılı aşkın deneyimle Ostim atölyemizde üretim, showroom&apos;umuzda sunum.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products" className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2">
              Ürünleri İncele <ArrowRight size={16} />
            </Link>
            <a href="tel:+903123845678" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center gap-2">
              <Phone size={16} /> Hemen Ara
            </a>
          </div>
        </div>
      </section>

      {/* Why Ankara-specific */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Ankara&apos;ya Özel Bahçe Mobilyası
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Ankara&apos;nın karasal iklimi, bahçe mobilyası seçimini İstanbul veya Ege gibi bölgelerden farklı kılar. Biz bu farkı iyi biliyoruz.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Soğuğa Dayanıklı",
                desc: "Ankara kışlarına uygun, -20°C'ye dayanıklı alüminyum ve yüksek yoğunluklu polirattan ürünler.",
              },
              {
                title: "UV Korumalı",
                desc: "Yaz aylarındaki yoğun güneş ışığına karşı tüm kumaş ve malzemelerde UV stabilizatör kullanımı.",
              },
              {
                title: "Hızlı Teslimat",
                desc: "Ostim atölyemizde üretim yapıldığından Ankara içi teslimatlar genellikle 5–10 iş gününde tamamlanır.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <CheckCircle className="text-green-600 w-7 h-7 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Ürün Kategorilerimiz</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Oturma Grupları", desc: "3'lü, 5'li, L tipi koltuk setleri" },
              { name: "Masa Setleri", desc: "4 ve 6 kişilik yemek grupları" },
              { name: "Şezlonglar", desc: "Havuz başı ve teras için" },
              { name: "Bahçe Aksesuarları", desc: "Şemsiye, sehpa, saksılık" },
            ].map((cat) => (
              <Link key={cat.name} href="/products"
                className="bg-green-50 hover:bg-green-100 border border-green-100 p-5 rounded-xl text-center transition-colors group">
                <div className="text-green-700 font-bold mb-1 group-hover:text-green-800">{cat.name}</div>
                <div className="text-gray-500 text-xs">{cat.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom */}
      <section className="py-14 bg-green-800 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ankara Showroom&apos;umuzu Ziyaret Edin</h2>
            <p className="text-green-200 leading-relaxed mb-6">
              Ostim OSB&apos;deki showroom&apos;umuzda 50&apos;yi aşkın model teşhirde. Ürünleri bizzat görüp, dokunup, uzman ekibimizden danışmanlık alabilirsiniz.
            </p>
            <div className="space-y-3 text-green-200 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-green-400 flex-shrink-0" />
                <span>Ostim OSB Mahallesi, 100. Yıl Bulvarı No: 45, Yenimahalle / Ankara</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-green-400 flex-shrink-0" />
                <a href="tel:+903123845678" className="hover:text-white">(0312) 384 56 78</a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 text-center transition-colors">
              Randevu Al
            </Link>
            <Link href="/ozel-tasarim" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 text-center transition-colors">
              Özel Tasarım Başlat
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Sıkça Sorulan Sorular</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 border-t bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ankara&apos;nın En İyi Bahçe Mobilyaları İçin</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">Hemen iletişime geçin veya showroom&apos;umuzu ziyaret edin. Ücretsiz keşif ve fiyat teklifi sunuyoruz.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center gap-2">
              İletişime Geç <ArrowRight size={16} />
            </Link>
            <Link href="/products" className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
              Ürünleri İncele
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function FaqItem({ question, answer }: FaqItem) {
  return (
    <details className="bg-white rounded-xl border border-gray-200 group">
      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900 hover:text-green-700 transition-colors list-none">
        <span>{question}</span>
        <span className="ml-4 text-green-600 group-open:rotate-180 transition-transform text-xl font-bold flex-shrink-0">+</span>
      </summary>
      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
        {answer}
      </div>
    </details>
  )
}
