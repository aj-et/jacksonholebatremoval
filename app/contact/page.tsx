import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Banner with Parallax Effect */}
      <section className="relative h-64 md:h-80 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/Teton_range.webp"
          alt="Contact Jackson Hole Bat Removal"
          fill
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full animate-pulse" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-300" />
        </div>
        
        <div className="relative z-10 space-y-4 px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 animate-pulse">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl">
            Professional bat removal specialists at your service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 py-16 relative">
        {/* Floating background elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl" />
        
        <div className="text-center space-y-12 relative z-10">
          {/* Intro Text with Enhanced Typography */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight">
              Get in touch with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                bat removal specialists
              </span>{" "}
              today
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We&apos;re here to help you keep your home safe and bat-free with professional, 
              humane removal services.
            </p>
          </div>

          {/* Contact Card with Glass Morphism */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
            
            <div className="relative bg-white/80 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12 space-y-8 hover:shadow-3xl transition-all duration-500 hover:transform hover:-translate-y-1">
              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Phone */}
                <div className="group/item space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800">Phone</h3>
                    <a
                      href="tel:(801)675-8829"
                      className="inline-block text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 hover:scale-105"
                    >
                      (801) 675-8829
                    </a>
                    <p className="text-sm text-slate-500">Call us anytime for immediate assistance</p>
                  </div>
                </div>

                {/* Email */}
                <div className="group/item space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-slate-800">Email</h3>
                    <a
                      href="mailto:info@jacksonholebatremoval.com"
                      className="inline-block text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 break-all"
                    >
                      holebatremoval@gmail.com
                    </a>
                    <p className="text-sm text-slate-500">Send us a detailed message</p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gradient-to-r from-transparent via-slate-200 to-transparent" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-slate-400 text-sm font-medium">Service Areas</span>
                </div>
              </div>

              {/* Service Areas */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">
                  Proudly serving the greater Jackson Hole area
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    "Jackson Hole", "Kelly", "Moose", "Moran", 
                    "Wilson", "Teton Village", "Surrounding Areas"
                  ].map((area, index) => (
                    <span
                      key={area}
                      className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 font-medium rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 border border-slate-200"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-6 border-t border-slate-200">
                <p className="text-lg text-slate-600 font-medium">
                  🦇 Available 24/7 for emergency bat removal services
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: "⚡", title: "Fast Response", desc: "Same-day service available" },
              { icon: "🏠", title: "Safe & Humane", desc: "Eco-friendly removal methods" },
              { icon: "✅", title: "Licensed & Insured", desc: "Professional certified technicians" }
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-white/30"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}