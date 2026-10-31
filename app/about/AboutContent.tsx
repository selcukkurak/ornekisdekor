import type React from "react"

const AboutContent: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Hakkımızda</h1>
      <p className="text-base md:text-lg mb-4">
        Ornek Is Dekor, yılların deneyimiyle bahçe mobilyaları alanında lider bir markadır. Kaliteli malzemeler ve özgün
        tasarımlarla, müşterilerimizin dış mekanlarını güzelleştirmeyi amaçlıyoruz.
      </p>
      <p className="text-base md:text-lg mb-4">
        Şirketimiz, sürdürülebilirlik ve çevre dostu üretim yöntemlerini benimseyerek, doğaya saygılı ürünler
        sunmaktadır. Müşteri memnuniyetini ön planda tutarak, her zevke ve bütçeye uygun çözümler üretiyoruz.
      </p>
      <p className="text-base md:text-lg">
        Ornek Is Dekor olarak, bahçenizi yaşam alanınızın değerli bir parçası haline getirmek için buradayız. Sizleri
        showroom&apos;umuza bekliyor, hayalinizdeki bahçeyi birlikte tasarlamak için sabırsızlanıyoruz.
      </p>
    </div>
  )
}

export default AboutContent
