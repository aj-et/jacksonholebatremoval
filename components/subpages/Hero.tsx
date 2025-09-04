import Image from 'next/image'

type City = {
  name: string
  state: string
  phone: string
  description: string
}

export default function Hero({ city }: { city: City }) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <Image 
        src="/images/Jackson_hole.webp" 
        alt={`Scenic view of ${city.name}, ${city.state}`} 
        fill 
        priority
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw' 
        className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
      />

      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-pulse" />
        <div className="absolute bottom-24 right-16 w-24 h-24 border border-white/15 rounded-full animate-pulse delay-500" />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-amber-400/60 rounded-full animate-ping delay-1000" />
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white/50 rounded-full animate-ping delay-2000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 text-white">
        <div className="space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 text-sm font-medium">
            <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Licensed & Insured Professionals
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="block">Bat Removal in</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
              {city.name}, {city.state}
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto text-white/90">
            {city.description}
          </p>
          
          {/* CTA Button */}
          <div className="pt-4">
            <a
              href={`tel:${city.phone}`}
              className="group inline-flex items-center bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {city.phone}
              <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-8 pt-8">
            {[
              { icon: "⚡", text: "24/7 Emergency Service" },
              { icon: "🛡️", text: "5-Year Warranty" },
              { icon: "⭐", text: "Same-Day Response" }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2 text-white/90">
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}