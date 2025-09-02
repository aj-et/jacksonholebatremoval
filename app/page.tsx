import Link from "next/link"
import Image from "next/image"
import cities from "../const/cities.json"
import { Hero, Services, FAQ, CTA } from "../components/subpages"

export default function Home() {
  // Use Jackson Hole as the "main city" for homepage
  const mainCity = cities.find((c) => c.slug === "jackson-hole")!

  return (
    <main>
      {/* Hero */}
      <Hero city={mainCity} />

      {/* Services */}
      <Services city={mainCity} />

      {/* FAQ */}
      <FAQ city={mainCity} />

      {/* Areas We Serve */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-rust">
          Areas We Serve
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}`}
              className="group bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center text-center"
            >
              {/* <Image src="/city-placeholder.jpg" alt={city.name} width={500} height={500} className="w-32 h-20 object-cover rounded-md mb-4 group-hover:scale-105 transition"></Image> */}
              <h3 className="text-xl font-semibold text-rust">
                {city.name}, {city.state}
              </h3>
              <p className="text-sm text-gray mt-2">
                Bat removal & exclusion services in {city.name}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CTA city={mainCity} />
    </main>
  )
}