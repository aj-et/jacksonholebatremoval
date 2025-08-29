export default function WhyChooseUs() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Bat Removal Experts?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Humane Removal",
            text: "We use exclusion techniques that let bats leave safely without harm."
          },
          {
            title: "Complete Proofing",
            text: "All entry points are sealed to prevent future infestations."
          },
          {
            title: "Certified Specialists",
            text: "Licensed experts with years of bat removal and exclusion experience."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}