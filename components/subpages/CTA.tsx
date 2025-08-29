type City = {
  name: string
  phone: string
}

export default function CTA({ city }: { city: City }) {
  return (
    <section className="bg-gold text-white py-16 text-center">
      <h2 className="text-3xl font-bold">
        Need Bat Removal in {city.name}?
      </h2>
      <p className="mt-4 text-lg">Call our certified specialists today at {city.phone}.</p>
      <a
        href={`tel:${city.phone}`}
        className="inline-block mt-6 bg-rust text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray transition"
      >
        Get a Free Quote
      </a>
    </section>
  )
}
