import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HomeContent = () => {
  return (
    <>
      <section className="bg-green-100 py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bahçeniz İçin Mükemmel Mobilyalar</h2>
          <p className="text-lg md:text-xl mb-8">
            Kaliteli ve şık bahçe mobilyalarımızla dış mekanlarınızı canlandırın.
          </p>
          <Link
            href="/products"
            className="bg-green-600 text-white px-6 py-3 rounded-lg inline-flex items-center hover:bg-green-700 transition-colors text-sm md:text-base"
          >
            Ürünleri Keşfedin
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Öne Çıkan Ürünlerimiz</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                id: 1,
                name: "Bahçe Sandalyesi",
                image:
                  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FyZGVuJTIwZnVybml0dXJlfGVufDB8fDB8fHww",
              },
              {
                id: 2,
                name: "Bahçe Masası",
                image:
                  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdhcmRlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
              },
              {
                id: 3,
                name: "Bahçe Salıncağı",
                image:
                  "https://images.unsplash.com/photo-1562182384-08115de5ee97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhcmRlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
              },
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={300}
                  className="w-full h-48 md:h-64 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h4>
                  <p className="text-sm md:text-base text-gray-600">
                    Şık ve dayanıklı bahçe mobilyalarımızla dış mekanlarınızı güzelleştirin.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeContent
