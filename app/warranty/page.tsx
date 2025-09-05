import Image from 'next/image'
import Link from 'next/link'

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Banner */}
      <section className="relative h-80 md:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/placeholder.webp"
          alt="Jackson Hole Bat Removal Warranty"
          fill
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Animated shield icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-24 right-16 transform -rotate-12">
            <svg className="w-12 h-12 text-white animate-pulse delay-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
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
            Our Warranty
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Your satisfaction is guaranteed with our comprehensive warranty protection
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative">
        {/* Floating background elements */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-1/2 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-50 blur-3xl" />
        
        <div className="relative z-10 space-y-16">
          {/* Main Warranty Promise */}
          <div className="text-center space-y-8">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/90 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl p-8 md:p-12 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                    100% Satisfaction
                  </span>{" "}
                  Guaranteed
                </h2>
                
                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  We stand behind our work with a{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600">
                    2-year comprehensive warranty
                  </span>. 
                  If bats return within the warranty period, we will fix it free of charge - no questions asked.
                </p>
                
                <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
                  <p className="text-lg text-slate-700 font-medium">
                    Our warranty gives you complete peace of mind knowing your property is protected 
                    for two full years after the exclusion work is done. Your investment is secure with our promise 
                    of lasting results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty Details Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "2-Year Coverage",
                description: "Complete protection for 2 full years from service completion date",
                highlight: "Comprehensive"
              },
              {
                icon: "🔧",
                title: "Free Repairs",
                description: "Any warranty repairs completed at no additional cost to you",
                highlight: "No Hidden Fees"
              },
              {
                icon: "📋",
                title: "Written Guarantee",
                description: "Detailed warranty certificate provided with every completed job",
                highlight: "Documentation Included"
              },
              {
                icon: "🏠",
                title: "Property Protection",
                description: "Full coverage for all exclusion points and entry areas treated",
                highlight: "Original Work Only"
              },
              {
                icon: "👨‍🔧",
                title: "Expert Service",
                description: "Only certified technicians perform warranty inspections and repairs",
                highlight: "Licensed & Insured"
              },
              {
                icon: "⚠️",
                title: "Structure Integrity",
                description: "Warranty void if house structure changes (new soffit, fascia modifications)",
                highlight: "Important Notice"
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="mb-2">
                  <span className={`inline-block text-white text-xs font-bold px-2 py-1 rounded-full mb-3 ${
                    item.highlight === "Important Notice" 
                      ? "bg-gradient-to-r from-red-400 to-red-500" 
                      : "bg-gradient-to-r from-amber-400 to-yellow-400"
                  }`}>
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Before Requesting Warranty Service */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-4 shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Before Requesting Warranty Service
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Please complete these verification steps to confirm bat activity before submitting a warranty claim
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">👀</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2">1. Visual Inspection</h3>
                      <ul className="text-slate-600 space-y-1 text-sm">
                        <li>• Look for bats entering/exiting at dusk</li>
                        <li>• Check for new droppings or staining</li>
                        <li>• Inspect previously sealed entry points</li>
                        <li>• Document with photos if possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">👂</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2">2. Audio Verification</h3>
                      <ul className="text-slate-600 space-y-1 text-sm">
                        <li>• Listen for scratching or chattering sounds</li>
                        <li>• Check attic, walls, and ceiling areas</li>
                        <li>• Note times when sounds are heard</li>
                        <li>• Record audio if possible</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-blue-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">📅</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2">3. Monitor Activity</h3>
                      <ul className="text-slate-600 space-y-1 text-sm">
                        <li>• Observe for 3-5 consecutive days</li>
                        <li>• Track patterns of activity</li>
                        <li>• Note weather conditions during observations</li>
                        <li>• Keep detailed log of findings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-amber-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2">Rule Out Other Wildlife</h3>
                      <ul className="text-slate-600 space-y-1 text-sm">
                        <li>• Distinguish from birds, rodents, or insects</li>
                        <li>• Confirm droppings are bat guano</li>
                        <li>• Verify entry point size and location</li>
                        <li>• Check for bat-specific signs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-green-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">📝</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-800 mb-2">Document Everything</h3>
                      <ul className="text-slate-600 space-y-1 text-sm">
                        <li>• Take clear photos of evidence</li>
                        <li>• Note date, time, and location</li>
                        <li>• Record weather conditions</li>
                        <li>• Prepare written summary</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 h-48 flex flex-col">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="bg-red-100 rounded-full p-3 mt-1">
                      <span className="text-2xl">🚫</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-800 mb-2">Important Reminder</h3>
                      <p className="text-red-700 text-sm">
                        Warranty claims require verified bat activity. False alarms or non-bat wildlife issues are not covered under warranty terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
              Why Trust Our Warranty?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">15+ Years Experience</h3>
                    <p className="text-slate-600">Decades of proven bat exclusion expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Licensed & Insured</h3>
                    <p className="text-slate-600">Fully licensed wildlife control operators with comprehensive insurance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Local Expertise</h3>
                    <p className="text-slate-600">Deep understanding of Wyoming bat species and seasonal patterns</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Proven Methods</h3>
                    <p className="text-slate-600">Time-tested exclusion techniques with 98%+ success rate</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Quality Materials</h3>
                    <p className="text-slate-600">Premium exclusion materials designed for harsh Wyoming weather</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 rounded-full p-2 mt-1">
                    <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2">Customer Satisfaction</h3>
                    <p className="text-slate-600">Hundreds of satisfied customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Warranty Process */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-4">
              Warranty Claim Process
            </h2>
            <p className="text-center text-slate-300 mb-10 max-w-2xl mx-auto">
              After completing the verification steps above, follow this simple process for warranty service
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Contact Us", desc: "Call us with your verification documentation" },
                { step: "2", title: "Inspection", desc: "Scheduled inspection within 48-72 hours" },
                { step: "3", title: "Assessment", desc: "We evaluate the situation and determine coverage" },
                { step: "4", title: "Resolution", desc: "Complete covered repairs at no charge" }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div key={index} className="bg-gradient-to-br from-amber-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-yellow-500/10 rounded-2xl border border-yellow-500/20">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500/20 rounded-full p-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-yellow-400 mb-2">Important Note</h3>
                  <p className="text-slate-300 text-sm">
                    Emergency response is not available for warranty claims. Standard service scheduling applies during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Ready for Guaranteed Results?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Don&apos;t let bats return to your property. Our 2-year warranty 
              ensures your investment is protected with proper verification procedures.
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
                Get Free Estimate
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