import Image from "next/image"

type City = {
  name: string
  state: string
}

export default function Services({ city }: { city: City }) {
  const services = [
    {
      title: "Bat Inspection",
      text: `Thorough inspection of your property in ${city.name} to identify bat activity and entry points.`,
      img: "/images/bat-inspection.webp",
      icon: "🔍",
      features: ["Complete property assessment", "Entry point identification", "Species determination"]
    },
    {
      title: "Bat Exclusion", 
      text: `Safe, humane removal and sealing to permanently keep bats out of your ${city.state} home.`,
      img: "/images/bat-exclusion.webp", 
      icon: "🏠",
      features: ["Humane bat removal", "Professional sealing", "Prevention barriers"]
    },
    {
      title: "Guano Cleanup",
      text: `Professional sanitization of bat droppings and contaminated areas in ${city.name} properties.`,
      img: "/images/guano-cleanup.webp",
      icon: "🧽", 
      features: ["Complete sanitization", "Odor elimination", "Health-safe cleanup"]
    },
  ]

  return (
    <section className="relative py-20 px-6">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-slate-50/30" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-12 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-30 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Enhanced section header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600">
            Our Expert Services
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-700">
            in {city.name}
          </h3>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Enhanced services grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Image container with overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  width={500} 
                  height={300} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent group-hover:from-black/30 transition-all duration-500" />
                
                {/* Service icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 group-hover:bg-amber-400 group-hover:scale-110 transition-all duration-500">
                  <span className="text-2xl">{service.icon}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 group-hover:from-amber-700 group-hover:to-yellow-700 transition-all duration-300 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {service.text}
                  </p>
                </div>
                
                {/* Service features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full group-hover:bg-yellow-500 transition-colors duration-300" />
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Service badge */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 font-medium">Professional Service</span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional service info */}
        {/* <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Emergency Response</h3>
                <p className="text-slate-600">Available 24/7 for urgent bat removal situations in {city.name}.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-400 rounded-xl p-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Guaranteed Results</h3>
                <p className="text-slate-600">All our work comes with a comprehensive 5-year warranty for your peace of mind.</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}