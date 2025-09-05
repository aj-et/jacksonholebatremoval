import cities from "@/const/cities.json";
import { Hero, Services, FAQ, CTA } from "@/components/subpages";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface Params {
  params: { city: string }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city } = await params
  const cityData = cities.find((c) => c.slug === city)

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
  const { city } = await params
  const cityData = cities.find((c) => c.slug === city)

  if (!cityData) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Global decorative background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-100/30 to-yellow-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-br from-blue-100/25 to-indigo-100/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/3 -left-20 w-48 h-48 bg-gradient-to-br from-purple-100/20 to-pink-100/20 rounded-full blur-3xl animate-pulse delay-2000" />
        <div className="absolute -bottom-32 -right-24 w-72 h-72 bg-gradient-to-br from-green-100/20 to-teal-100/20 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Medium accent orbs */}
        <div className="absolute top-16 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full blur-2xl animate-pulse delay-3000" />
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/35 to-indigo-200/35 rounded-full blur-2xl animate-pulse delay-4000" />
        
        {/* Small floating elements */}
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-br from-amber-300/50 to-yellow-300/50 rounded-full blur-xl animate-pulse delay-1500" />
        <div className="absolute bottom-1/4 right-32 w-20 h-20 bg-gradient-to-br from-blue-300/45 to-indigo-300/45 rounded-full blur-xl animate-pulse delay-2500" />
      </div>

      {/* Hero Section with enhanced backdrop */}
      <section className="relative z-10">
        {/* Hero-specific decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-40 blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-2xl animate-pulse delay-300" />
          
          {/* Subtle geometric patterns */}
          <div className="absolute top-32 right-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-ping delay-1000" />
          <div className="absolute top-48 left-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-ping delay-2000" />
          <div className="absolute top-64 right-1/3 w-1.5 h-1.5 bg-yellow-400/35 rounded-full animate-ping delay-3000" />
        </div>
        
        <Hero city={cityData} />
      </section>

      {/* Services Section with flowing background */}
      <section className="relative z-10 py-8">
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient flow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/30 to-transparent" />
          <div className="absolute top-0 left-1/4 w-48 h-48 bg-gradient-to-br from-amber-50/60 to-yellow-50/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-full blur-3xl" />
          
          {/* Service accent dots */}
          <div className="absolute top-16 right-16 w-3 h-3 bg-amber-300/40 rounded-full animate-pulse delay-500" />
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-300/45 rounded-full animate-pulse delay-1500" />
        </div>
        
        <Services city={cityData} />
      </section>

      {/* FAQ Section with subtle patterns */}
      <section className="relative z-10 py-8">
        <div className="absolute inset-0 pointer-events-none">
          {/* FAQ background elements */}
          <div className="absolute top-0 left-1/3 w-56 h-56 bg-gradient-to-br from-amber-50/40 to-yellow-50/40 rounded-full opacity-60 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-44 h-44 bg-gradient-to-br from-blue-50/35 to-indigo-50/35 rounded-full opacity-70 blur-3xl" />
          <div className="absolute top-1/2 left-8 w-36 h-36 bg-gradient-to-br from-purple-50/25 to-pink-50/25 rounded-full opacity-50 blur-3xl" />
          
          {/* Question mark inspired subtle elements */}
          <div className="absolute top-24 right-32 w-1 h-6 bg-amber-200/30 rounded-full rotate-12" />
          <div className="absolute top-32 right-28 w-1 h-1 bg-amber-300/40 rounded-full" />
          <div className="absolute bottom-32 left-24 w-1 h-4 bg-blue-200/35 rounded-full -rotate-12" />
        </div>
        
        <FAQ city={cityData} />
      </section>

      {/* CTA Section with emphasis backdrop */}
      <section className="relative z-10">
        <div className="absolute inset-0 pointer-events-none">
          {/* CTA background enhancement */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100/40 via-transparent to-blue-100/40" />
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-100/50 to-yellow-100/50 rounded-full opacity-60 blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-gradient-to-br from-blue-100/45 to-indigo-100/45 rounded-full opacity-55 blur-3xl animate-pulse delay-1200" />
          
          {/* Call-to-action accent elements */}
          <div className="absolute top-12 left-12 w-4 h-4 bg-amber-400/30 rounded-full animate-ping delay-2000" />
          <div className="absolute bottom-16 right-16 w-3 h-3 bg-blue-400/35 rounded-full animate-ping delay-2500" />
          <div className="absolute top-20 right-1/3 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping delay-1800" />
        </div>
        
        <CTA city={cityData} />
      </section>

      {/* Subtle page-wide overlay for cohesion */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/10" />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}