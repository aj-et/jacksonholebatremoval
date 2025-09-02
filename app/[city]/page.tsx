import cities from "@/const/cities.json";
import { Hero, Services, FAQ, CTA } from "@/components/subpages";
import { notFound } from "next/navigation";

interface Params {
  params: { city: string }
}

export default async function City({ params }: Params) {
  const { city } = await params
  const cityData = cities.find((c) => c.slug === city)

  if (!cityData) {
    notFound()
  }

  return (
    <main>
      <Hero city={cityData} />
      <Services city={cityData} />
      <FAQ city={cityData} />
      <CTA city={cityData} />
    </main>
  )
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}