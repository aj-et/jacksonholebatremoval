import Image from "next/image"
import Link from "next/link"

export default function ExclusionPage() {
  const exclusionSteps = [
    {
      step: "1",
      title: "Property Inspection",
      description: "Comprehensive assessment to identify all entry points, roosting areas, and potential access routes.",
      details: [
        "Complete exterior examination",
        "Attic and crawl space inspection", 
        "Entry point mapping and documentation",
        "Species identification and population assessment"
      ],
      icon: "🔍"
    },
    {
      step: "2", 
      title: "Exclusion Planning",
      description: "Custom strategy development based on your property's unique characteristics and bat behavior patterns.",
      details: [
        "Timeline planning around bat activity cycles",
        "Material selection for Wyoming weather",
        "One-way exit device placement strategy",
        "Detailed work plan and cost estimate"
      ],
      icon: "📋"
    },
    {
      step: "3",
      title: "One-Way Exit Installation", 
      description: "Installation of specialized devices that allow bats to leave naturally but prevent re-entry.",
      details: [
        "Strategic placement of exclusion devices",
        "Temporary monitoring period",
        "Verification of bat departure",
        "24-48 hour observation window"
      ],
      icon: "🚪"
    },
    {
      step: "4",
      title: "Permanent Sealing",
      description: "Complete sealing of all entry points with durable, weather-resistant materials.",
      details: [
        "Premium exclusion materials installation",
        "Weather-resistant sealing compounds",
        "Structural integrity maintenance", 
        "Clean-up and site restoration"
      ],
      icon: "🔒"
    }
  ]

  const exclusionMethods = [
    {
      method: "One-Way Exclusion Devices",
      description: "Specialized tubes and funnels that allow bats to exit but create a one-way barrier preventing return.",
      benefits: ["100% humane", "No harm to bats", "Effective for all species"],
      icon: "🛡️"
    },
    {
      method: "Premium Sealing Materials",
      description: "Weather-resistant materials designed specifically for Wyoming's harsh climate conditions.",
      benefits: ["Long-lasting protection", "Weather-resistant", "Maintains home aesthetics"],
      icon: "🏠"
    },
    {
      method: "Timing Coordination",
      description: "Work scheduled around bat activity patterns to ensure no bats are trapped inside structures.",
      benefits: ["Seasonal awareness", "Protects baby bats", "Maximum effectiveness"],
      icon: "📅"
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/placeholder.webp"
          alt="Professional Bat Exclusion Services"
          fill
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Animated shield/protection icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-24 right-16 transform -rotate-12">
            <svg className="w-12 h-12 text-white animate-pulse delay-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 space-y-6 px-6 max-w-4xl">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-20 h-20 text-amber-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
            Bat Exclusion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Humane, permanent protection that keeps bats out while ensuring their safety
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Floating background elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl" />
        
        <div className="relative z-10 space-y-16">
          {/* Introduction */}
          <div className="text-center space-y-8">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12 hover:shadow-3xl transition-all duration-500">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                    Humane & Effective
                  </span>{" "}
                  Bat Exclusion
                </h2>
                
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  Our exclusion process ensures bats leave safely but cannot return. We install one-way doors, 
                  seal all entry points, and guarantee long-term protection while respecting wildlife.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <p className="text-lg text-slate-700 font-medium">
                    Exclusion is the most humane and effective way to keep bats out of your home 
                    while ensuring they survive and thrive in their natural environment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Exclusion Process Steps */}
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Our Professional 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600"> Exclusion Process</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A systematic approach that guarantees results while protecting both your property and local bat populations
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto mt-6" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {exclusionSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <div className="flex items-start space-x-6">
                    <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                          {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800">{step.title}</h3>
                      </div>
                      
                      <p className="text-slate-700 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-amber-400 rounded-full" />
                            <span className="text-slate-600 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exclusion Methods */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Proven Exclusion Methods
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Time-tested techniques that provide permanent protection without harming wildlife
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {exclusionMethods.map((method, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{method.method}</h3>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-4">
                    {method.description}
                  </p>
                  
                  <div className="space-y-2">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600 text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Exclusion */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-800">
                Why Choose Professional Exclusion?
              </h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Humane Wildlife Management",
                    desc: "Protects both your property and local bat populations without causing harm",
                    icon: "💚"
                  },
                  {
                    title: "Permanent Solution", 
                    desc: "Addresses root causes rather than temporary fixes, preventing future infestations",
                    icon: "🔒"
                  },
                  {
                    title: "Legal Compliance",
                    desc: "Follows all federal and state wildlife protection regulations in Wyoming",
                    icon: "⚖️"
                  },
                  {
                    title: "Property Protection",
                    desc: "Prevents structural damage from bat guano and maintains home value",
                    icon: "🏠"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl p-3">
                      <span className="text-2xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Exclusion vs. Other Methods</h3>
              
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <h4 className="font-bold text-green-800 mb-2">✅ Professional Exclusion</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 100% humane and safe</li>
                    <li>• Permanent, long-term solution</li>
                    <li>• Legally compliant</li>
                    <li>• 2-year warranty included</li>
                  </ul>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <h4 className="font-bold text-red-800 mb-2">❌ DIY or Harmful Methods</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    <li>• Risk of trapping bats inside</li>
                    <li>• Potential legal violations</li>
                    <li>• Temporary or ineffective results</li>
                    <li>• Safety and health risks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Timing and Seasonal Considerations */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 border border-amber-200">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Optimal Timing for Bat Exclusion
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Proper timing ensures maximum effectiveness while protecting bat populations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-400 rounded-2xl p-4 w-fit mx-auto mb-4">
                  <span className="text-3xl text-white">🍂</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Best Time: Fall</h3>
                <p className="text-slate-600">August - October is ideal when young bats can fly but before hibernation begins.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-400 rounded-2xl p-4 w-fit mx-auto mb-4">
                  <span className="text-3xl text-white">⚠️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Caution: Spring</h3>
                <p className="text-slate-600">May - July is maternity season. Limited exclusion to avoid trapping flightless pups.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-400 rounded-2xl p-4 w-fit mx-auto mb-4">
                  <span className="text-3xl text-white">❄️</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Winter Options</h3>
                <p className="text-slate-600">Emergency exclusion available when bats are hibernating elsewhere.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready for Professional Bat Exclusion?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Protect your property with humane, permanent bat exclusion services. 
              Our expert team ensures lasting results while respecting wildlife.
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
                Free Estimate
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