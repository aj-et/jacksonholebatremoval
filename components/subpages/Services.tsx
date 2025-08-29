import Image from "next/image"

type City = {
  name: string
  state: string
}

export default function Services({ city }: { city: City }) {
  return (
    <section className="bg-blue/10 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-rust">
        Our Services in {city.name}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: "Bat Inspection",
            text: `Thorough inspection of your property in ${city.name} to identify bat activity.`,
            img: "/images/bat-inspection.webp",
          },
          {
            title: "Bat Exclusion",
            text: `Safe removal and sealing to keep bats out of your ${city.state} home.`,
            img: "/images/bat-exclusion.webp",
          },
          {
            title: "Guano Cleanup",
            text: `Sanitization of bat droppings in attics or crawl spaces in ${city.name}.`,
            img: "/images/guano-cleanup.webp",
          },
        ].map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Image src={service.img} alt={service.title} width={500} height={500} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="font-semibold text-xl text-rust">{service.title}</h3>
            <p className="text-gray mt-2">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
