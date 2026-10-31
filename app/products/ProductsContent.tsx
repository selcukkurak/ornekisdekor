import Image from "next/image"

const ProductsContent = () => {
  const products = [
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
    {
      id: 4,
      name: "Bahçe Şemsiyesi",
      image:
        "/garden-umbrella.svg",
    },
    {
      id: 5,
      name: "Bahçe Sehpası",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdhcmRlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Bahçe Koltuk Takımı",
      image:
        "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdhcmRlbiUyMGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ]

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Ürünlerimiz</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-sm md:text-base text-gray-600">
                Şık ve dayanıklı bahçe mobilyalarımızla dış mekanlarınızı güzelleştirin.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsContent
