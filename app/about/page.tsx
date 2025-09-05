import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const teamValues = [
    {
      title: "Wildlife Expertise",
      description: "Specialized knowledge of Wyoming bat species, behavior patterns, and seasonal migration cycles.",
      icon: "🦇",
      details: ["Species identification", "Behavior analysis", "Seasonal timing expertise", "Local ecosystem knowledge"]
    },
    {
      title: "Humane Practices", 
      description: "Commitment to wildlife-friendly methods that protect both your property and local bat populations.",
      icon: "💚",
      details: ["No-harm exclusion methods", "Wildlife protection compliance", "Ethical treatment standards", "Conservation awareness"]
    },
    {
      title: "Professional Excellence",
      description: "Licensed, insured, and certified technicians with years of specialized bat removal experience.",
      icon: "⭐",
      details: ["Licensed operators", "Comprehensive insurance", "Ongoing training", "Industry certifications"]
    },
    {
      title: "Local Understanding",
      description: "Deep knowledge of Jackson Hole's unique challenges, from weather patterns to building types.",
      icon: "🏔️",
      details: ["Regional expertise", "Climate considerations", "Local building knowledge", "Community connections"]
    }
  ]

  const serviceAreas = [
    "Jackson Hole", "Kelly", "Moose", "Moran", "Wilson", "Teton Village", 
    "Alpine", "Star Valley", "Afton", "Driggs", "Victor"
  ]

  const certifications = [
    {
      title: "Wildlife Control Operator License",
      issuer: "Wyoming Game & Fish Department",
      icon: "🎓"
    },
    {
      title: "Comprehensive General Liability",
      issuer: "Commercial Insurance Coverage",
      icon: "🛡️"
    },
    {
      title: "NWCOA Certified",
      issuer: "National Wildlife Control Operators Association",
      icon: "📜"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/placeholder.webp"
          alt="About Jackson Hole Bat Removal Team"
          fill
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Animated team/people icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-24 right-16 transform -rotate-12">
            <svg className="w-12 h-12 text-white animate-pulse delay-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 space-y-6 px-6 max-w-4xl">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-20 h-20 text-amber-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Wyoming&apos;s trusted wildlife control specialists dedicated to humane bat removal
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Floating background elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl" />
        
        <div className="relative z-10 space-y-16">
          {/* Company Introduction */}
          <div className="text-center space-y-8">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12 hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                    Jackson Hole Bat Removal
                  </span>{" "}
                  - Your Wildlife Control Experts
                </h2>
                
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  At Jackson Hole Bat Removal, we specialize in safe, humane, and effective wildlife control. 
                  Our certified team has over 15 years of experience in bat removal, exclusion, and attic restoration 
                  throughout the greater Jackson Hole region.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <p className="text-lg text-slate-700 font-medium">
                    We&apos;re committed to protecting homes while respecting the vital role bats play in 
                    Wyoming&apos;s ecosystem. Our approach balances effective wildlife control with environmental stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values/Expertise */}
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                What Sets Us 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600"> Apart</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our expertise goes beyond basic pest control - we&apos;re wildlife specialists dedicated to lasting solutions
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teamValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{value.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-800 mb-4">{value.title}</h3>
                      
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {value.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {value.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            <span className="text-slate-600 text-sm font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Credentials */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Licensed & Certified Professionals
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Our credentials ensure you receive the highest quality, compliant wildlife control services
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl p-3 w-fit mx-auto mb-4">
                    <span className="text-3xl text-white">{cert.icon}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{cert.title}</h3>
                  <p className="text-slate-600">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Proudly Serving Wyoming Communities
              </h2>
              
              <p className="text-lg text-slate-700 leading-relaxed">
                Our service area covers the entire Jackson Hole valley and surrounding regions. 
                We understand the unique challenges of Wyoming&apos;s climate and terrain, from harsh winters 
                to diverse building types across our mountain communities.
              </p>
              
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                <h3 className="font-bold text-slate-800 mb-4">Primary Service Areas:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full" />
                      <span className="text-slate-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4 italic">
                  Don&apos;t see your area? Contact us - we may still be able to help!
                </p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Why Experience Matters</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">15+ Years of Local Experience</h4>
                    <p className="text-slate-600 text-sm">Deep understanding of Wyoming&apos;s unique bat species and migration patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Hundreds of Successful Projects</h4>
                    <p className="text-slate-600 text-sm">Proven track record across residential and commercial properties</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">98% Customer Satisfaction</h4>
                    <p className="text-slate-600 text-sm">Consistently high ratings and referrals from satisfied customers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Comprehensive Warranties</h4>
                    <p className="text-slate-600 text-sm">2-year guarantees on all exclusion work for your peace of mind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Commitment */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Environmental Stewardship
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Balancing effective wildlife control with respect for Wyoming&apos;s natural ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800">Why Bats Matter</h3>
                <p className="text-slate-700 leading-relaxed">
                  Bats are crucial to Wyoming&apos;s ecosystem, consuming thousands of insects nightly and supporting 
                  agricultural health. Our exclusion methods ensure these important animals can continue their 
                  ecological role while staying away from human structures.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🦟</span>
                    <span className="text-slate-700">Natural pest control - one bat eats 1,000+ mosquitoes per hour</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌾</span>
                    <span className="text-slate-700">Agricultural protection by controlling crop-damaging insects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌸</span>
                    <span className="text-slate-700">Pollination services for night-blooming plants</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                <h3 className="text-xl font-bold text-slate-800 mb-4">Our Conservation Promise</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <p className="text-slate-700 text-sm">Zero-harm exclusion methods that protect bat populations</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <p className="text-slate-700 text-sm">Timing work around breeding and hibernation cycles</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <p className="text-slate-700 text-sm">Compliance with all federal and state wildlife protection laws</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <p className="text-slate-700 text-sm">Education on coexistence and bat house alternatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready to Work with Wyoming&apos;s Bat Specialists?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Contact our experienced team for professional, humane bat removal services. 
              We&apos;re here to protect your property while respecting wildlife.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(801)675-8829"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (801) 675-8829
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-amber-600 font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-amber-600"
              >
                Get Free Consultation
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}