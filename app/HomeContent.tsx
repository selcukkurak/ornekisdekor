import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Wrench, Truck, Shield, Star, CheckCircle } from "lucide-react"

const HomeContent = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Alüminyum Oturma Grubu",
      category: "Oturma Grupları",
      description: "Dayanıklı alüminyum iskelet, su geçirmez kumaş minderleriyle konfor ve şıklık bir arada.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Tik Ahşap Yemek Seti",
      category: "Masa Setleri",
      description: "Doğal tik ahşabının güzelliğiyle bahçenize özel tasarım yemek masası ve sandalye seti.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Polirattan Şezlong",
      category: "Şezlonglar",
      description: "UV dayanımlı polirattan örgüsüyle havuz başı ve bahçe keyfini zirveye taşıyan şezlong.",
      image: "https://images.unsplash.com/photo-1562182384-08115de5ee97?w=800&auto=format&fit=crop&q=80",
    },
  ]

  const stats = [
    { value: "500+", label: "Mutlu Müşteri" },
    { value: "20+", label: "Yıl Deneyim" },
    { value: "3 Yıl", label: "Garanti" },
    { value: "Ücretsiz", label: "Montaj" },
  ]

  const features = [
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Kaliteli Malzeme",
      description: "Alüminyum, tik ahşap ve polirattan gibi premium malzemelerle uzun ömürlü ürünler üretiyoruz.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-600" />,
      title: "Özel Tasarım",
      description: "Bahçenizin ölçüsüne ve zevkinize göre tamamen kişiselleştirilmiş mobilya çözümleri sunuyoruz.",
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Ankara'ya Hızlı Teslimat",
      description: "Ankara ve çevresi için ücretsiz teslimat ve profesyonel montaj hizmeti sunuyoruz.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center"
        style={{ background: "linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
        />
        <div className="relative container mx-auto px-4 py-20 text-white">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-700 bg-opacity-60 text-green-100 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <Star size={14} className="fill-current" />
              Ankara&apos;nın Güvenilir Bahçe Mobilyası Markası
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ankara&apos;nın Bahçe Mobilyası Uzmanı
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
              Alüminyum, ahşap ve rattan bahçe mobilyalarında 20 yılı aşkın deneyim. Ostim atölyemizde özel üretim, ücretsiz montaj.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-white text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
              >
                Ürünleri Keşfet
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/ozel-tasarim"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors inline-flex items-center gap-2"
              >
                Özel Tasarım
                <Wrench size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-green-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-green-100">{stat.value}</div>
                <div className="text-green-300 text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Öne Çıkan Ürünlerimiz</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kalite ve estetiği bir arada sunan ürün koleksiyonumuzdan öne çıkanları keşfedin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden h-56">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{product.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-green-700 font-semibold hover:text-green-800 text-sm"
                  >
                    Detaylı Bilgi Al
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-flex items-center gap-2"
            >
              Tüm Ürünleri Gör
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden Örnek İş Dekor?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              20 yılı aşkın tecrübemizle Ankara&apos;nın en güvenilir bahçe mobilyası üreticisiyiz.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-50 p-4 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-12 h-12 text-green-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hayalinizdeki bahçeyi birlikte tasarlayalım</h2>
          <p className="text-green-200 text-lg mb-8 max-w-xl mx-auto">
            Ölçü, malzeme ve renk seçenekleriyle tamamen size özel bahçe mobilyaları üretiyoruz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/ozel-tasarim"
              className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center gap-2"
            >
              Özel Tasarım Başlat
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-800 transition-colors"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Shield className="w-6 h-6" />, text: "3 Yıl Garanti" },
              { icon: <Truck className="w-6 h-6" />, text: "Ücretsiz Montaj" },
              { icon: <Award className="w-6 h-6" />, text: "Sertifikalı Ürünler" },
              { icon: <CheckCircle className="w-6 h-6" />, text: "Müşteri Memnuniyeti" },
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col items-center gap-2 text-green-700">
                {badge.icon}
                <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
