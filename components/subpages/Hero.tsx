import Image from 'next/image'

type City = {
  name: string
  state: string
  phone: string
  description: string
}

export default function Hero({ city }: { city: City }) {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-white">
      {/* <img
        src="/jackson-hole-mountains.jpg"
        alt={`Scenic view of ${city.name}, ${city.state}`}
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      <Image src="/images/Jackson_hole.webp" alt={`Scenic view of ${city.name}, ${city.state}`} fill priority className="absolute inset-0 w-full h-full object-cover"></Image>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold">
          Bat Removal in {city.name}, {city.state}
        </h1>
        <p className="mt-4 text-lg">{city.description}</p>
        <a
          href={`tel:${city.phone}`}
          className="inline-block mt-6 bg-gold hover:bg-rust text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          Call {city.phone}
        </a>
      </div>
    </section>
  )
}