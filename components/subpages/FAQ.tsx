type City = {
  name: string
  state: string
}

export default function FAQ({ city }: { city: City }) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-rust">
        FAQs About Bat Removal in {city.name}
      </h2>
      <div className="space-y-6">
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gold">
            Do you serve all of {city.name}?
          </h3>
          <p>Yes, we cover all neighborhoods and surrounding areas of {city.name}.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gold">Are bats dangerous?</h3>
          <p>Bats can carry rabies and their droppings may spread histoplasmosis. Professional removal is important.</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h3 className="font-semibold text-lg text-gold">How quickly can you help?</h3>
          <p>We usually provide same-day or next-day service in {city.state}.</p>
        </div>
      </div>
    </section>
  )
}
