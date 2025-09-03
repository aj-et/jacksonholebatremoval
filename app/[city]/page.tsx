import cities from "@/const/cities.json";
import { Hero, Services, FAQ, CTA } from "@/components/subpages";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Params {
  params: { city: string }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const cityData = cities.find((c) => c.slug === params.city)

  if (!cityData) {
    return {
      title: "Bat Removal Services | Jackson Hole Bat Removal",
      description:
        "Safe, humane, and effective bat removal and exclusion services in Wyoming. Call our experts today.",
    }
  }

  return {
    title: `Bat Removal in ${cityData.name}, ${cityData.state} | Jackson Hole Bat Removal`,
    description: cityData.description,
    keywords: [
      "bat removal",
      "bat exclusion",
      "guano cleanup",
      `bat control in ${cityData.name}`,
      `bat removal in ${cityData.name}`,
      `${cityData.state} wildlife removal`,
    ],
    openGraph: {
      title: `Bat Removal in ${cityData.name}, ${cityData.state}`,
      description: cityData.description,
      url: `https://www.jacksonholebatremoval.com/${cityData.slug}`,
      type: "website",
    },
    alternates: {
      canonical: `https://www.jacksonholebatremoval.com/${cityData.slug}`,
    },
  }
}

export default async function City({ params }: Params) {
  // const { city } = await params
  const cityData = cities.find((c) => c.slug === params.city)

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