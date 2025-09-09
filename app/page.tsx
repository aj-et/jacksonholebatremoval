import Link from "next/link"
import cities from "../const/cities.json"
import { FAQ, CTA } from "../components/subpages"
import { Home_Hero, Home_Services } from "@/components/subpages/Homepage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wyoming Bat Removal | Professional Bat Control Services",
  description:
    "Safe, humane, and effective bat removal services throughout Wyoming. We specialize in bat exclusion, guano cleanup, and long-term prevention.",
  keywords: [
    "bat removal Wyoming",
    "bat exclusion",
    "guano cleanup",
    "Wyoming wildlife control",
    "bat control services",
  ],
  openGraph: {
    title: "Wyoming Bat Removal | Professional Bat Control Services",
    description:
      "Trusted bat removal and exclusion services throughout Wyoming. Call our experts today.",
    url: "https://www.jacksonholebatremoval.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jacksonholebatremoval.com",
  },
}

export default function Home() {
  // Use generic data for FAQ and CTA components
  const genericCityData = {
    name: "Wyoming",
    state: "",
    phone: "(801) 675-8829",
    description: "Safe, humane bat removal services throughout Wyoming. Our certified experts provide inspections, exclusions, and guano cleanup."
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero with enhanced backdrop */}
      <div className="relative">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-30 blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40 blur-2xl animate-pulse delay-300" />
        
        <Home_Hero />
      </div>

      {/* Services with enhanced spacing */}
      <div className="relative py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-50/50 to-transparent" />
        <Home_Services />
      </div>

      {/* FAQ with subtle background */}
      <div className="relative py-8">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-60 blur-3xl" />
        <FAQ city={genericCityData} />
      </div>

      {/* Areas We Serve Section - Keep this as is since it's the main differentiator */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-25 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-slate-100 to-gray-100 rounded-full opacity-10 blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Enhanced section header */}
          <div className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600">
              Areas We Serve
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional bat removal services throughout the greater Wyoming region
            </p>
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto" />
          </div>

          {/* Enhanced city grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cities.map((city, index) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Card with glass morphism effect */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 flex flex-col items-center text-center group-hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-yellow-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Location icon */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-amber-400 group-hover:to-yellow-500 rounded-xl p-4 transition-all duration-500 shadow-md group-hover:shadow-lg">
                      <svg 
                        className="w-8 h-8 text-slate-600 group-hover:text-white transition-colors duration-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* City name */}
                  <h3 className="relative z-10 text-xl font-bold text-slate-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-yellow-600 transition-all duration-500 mb-3">
                    {city.name}
                    {city.state && (
                      <span className="text-sm font-normal text-slate-500 group-hover:text-slate-600 block mt-1">
                        {city.state}
                      </span>
                    )}
                  </h3>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Additional service areas note */}
          <div className="mt-16 text-center">
            <div className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h3 className="text-xl font-bold text-slate-800">Serving Additional Areas</h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Don&apos;t see your location listed? We provide bat removal services throughout Wyoming and surrounding areas. 
                <br />
                <span className="font-semibold text-amber-600">Contact us to discuss service in your area.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with enhanced backdrop */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-transparent to-blue-100/50" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-40 blur-3xl" />
        <CTA city={genericCityData} />
      </div>
    </main>
  )
}