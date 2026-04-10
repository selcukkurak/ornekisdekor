import type React from "react"
import { Award, Users, MapPin, Clock, Wrench, Leaf } from "lucide-react"

const milestones = [
  { year: "2004", title: "Kuruluş", desc: "Ostim OSB'de küçük bir atölyede bahçe mobilyası üretimine başladık." },
  { year: "2008", title: "Showroom Açılışı", desc: "Büyüyen müşteri talebine yanıt olarak Ankara'nın ilk özel bahçe mobilyası showroom'unu açtık." },
  { year: "2012", title: "Özel Tasarım Birimi", desc: "Müşterilerin ihtiyaçlarına özel ölçü ve tasarım hizmetini resmi olarak başlattık." },
  { year: "2016", title: "Üretim Kapasitesi Artışı", desc: "Yeni CNC ekipmanlarıyla atölyemizi genişlettik ve yıllık üretim kapasitemizi 3 katına çıkardık." },
  { year: "2020", title: "Dijital Dönüşüm", desc: "Online sipariş ve 3D tasarım simülasyonu hizmetlerini müşterilerimize sunduk." },
  { year: "2024", title: "500+ Mutlu Müşteri", desc: "Ankara ve çevresi genelinde 500'ü aşkın mutlu müşteri ile büyümeye devam ediyoruz." },
]

const values = [
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "Kalite Önce",
    desc: "Her üründe sertifikalı malzeme, her süreçte en yüksek kalite standardı.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-green-600" />,
    title: "Özel Üretim",
    desc: "Müşterimizin her isteğine göre tasarlanıp üretilen, seri üretimden ayrışan mobilyalar.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-green-600" />,
    title: "Sürdürülebilirlik",
    desc: "FSC sertifikalı ahşap ve geri dönüştürülebilir alüminyum kullanımıyla çevreye saygılı üretim.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Müşteri Odaklılık",
    desc: "Ön keşiften montaja, satış sonrası desteğe kadar kesintisiz hizmet anlayışı.",
  },
]

const AboutContent: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-green-800 text-white py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Hakkımızda</h1>
          <p className="text-green-200 text-lg max-w-2xl">
            Ankara&apos;nın köklü bahçe mobilyası markası. 2004&apos;ten bu yana kalite ve özgünlük.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              2004 yılında Ankara Ostim OSB&apos;de küçük bir atölyede başlayan yolculuğumuz, bugün 500&apos;ü aşkın mutlu müşteri ile sürmektedir.
              Kurucumuz, Ankara&apos;da kaliteli ve uygun fiyatlı bahçe mobilyasına duyulan ihtiyaçtan yola çıkarak bu işe gönül verdi.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">
              Ostim atölyemizde alüminyum, tik ahşap ve polirattan malzemeleri işleyerek ürettiğimiz her ürün, Ankara&apos;nın iklimine
              ve yaşam kültürüne uygun biçimde tasarlanmaktadır. Kışın soğuğuna, yazın sıcağına dayanan ürünler üretmek en temel önceliğimizdir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Bugün özel tasarım birimimizle birlikte kapsamlı bir hizmet yelpazesi sunuyoruz: standart ürün katalogumuzdan seçim yapabileceğiniz
              gibi, sıfırdan özel ölçü ve tasarımda mobilya da sipariş edebilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Değerlerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-sm transition-all text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-green-50 p-3 rounded-full">{v.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Kilometre Taşlarımız</h2>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-4 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green-700 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {m.year}
                  </div>
                  {i < milestones.length - 1 && <div className="w-0.5 bg-green-200 flex-1 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{m.title}</h3>
                  <p className="text-gray-600">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop/Location */}
      <section className="py-12 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Atölyemiz & Showroom</h2>
              <p className="text-green-200 leading-relaxed mb-6">
                Ankara Ostim OSB&apos;deki atölyemizde üretimden kalite kontrolüne kadar tüm süreçleri bizzat yönetiyoruz.
                Showroom&apos;umuzu ziyaret ederek ürünleri yerinde görebilir, uzman ekibimizle özel tasarım danışmanlığı alabilirsiniz.
              </p>
              <div className="space-y-3 text-green-200">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-green-400" />
                  <span>Ostim OSB Mahallesi, 100. Yıl Bulvarı No: 45, Yenimahalle / Ankara</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="flex-shrink-0 text-green-400" />
                  <span>Pzt–Cmt: 09:00–18:00</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "500+", label: "Tamamlanan Proje" },
                { num: "20+", label: "Yıl Deneyim" },
                { num: "3 Yıl", label: "Ürün Garantisi" },
                { num: "15+", label: "Uzman Personel" },
              ].map((stat) => (
                <div key={stat.label} className="bg-green-700 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-white">{stat.num}</div>
                  <div className="text-green-300 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutContent
