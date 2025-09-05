import Image from "next/image"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "Safety & Health",
      icon: "🏥",
      questions: [
        {
          q: "Are bats dangerous to humans?",
          a: "While bats themselves are generally not aggressive, they can carry rabies and their droppings (guano) can cause histoplasmosis, a respiratory infection. Professional removal is essential for safety."
        },
        {
          q: "Can I get diseases from bat droppings?",
          a: "Yes, bat guano can harbor Histoplasma capsulatum, which causes histoplasmosis when spores are inhaled. Our team uses proper protective equipment and sanitization procedures during cleanup."
        },
        {
          q: "What should I do if I find a bat in my living space?",
          a: "Don't handle it yourself. Open windows and doors to give it an exit route, keep pets and children away, and call us immediately. If contact occurred, consult a doctor about rabies exposure."
        }
      ]
    },
    {
      category: "Removal Process",
      icon: "🔧",
      questions: [
        {
          q: "Do you harm or kill bats during removal?",
          a: "Absolutely not. We use humane exclusion methods with one-way exits that allow bats to leave naturally but prevent re-entry. This protects both bats and your property."
        },
        {
          q: "How long does the exclusion process take?",
          a: "Initial exclusion work typically takes 1-2 days, depending on property size and complexity. The full process includes a waiting period to ensure all bats have exited before final sealing."
        },
        {
          q: "When is the best time for bat exclusion?",
          a: "Late summer to early fall (August-October) is ideal in Wyoming, after babies can fly but before hibernation. We avoid exclusion during maternity season (May-July) when flightless pups could be trapped."
        }
      ]
    },
    {
      category: "Service & Pricing",
      icon: "💰",
      questions: [
        {
          q: "How quickly can you respond to my bat problem?",
          a: "We typically provide same-day or next-day service throughout the Jackson Hole area. Emergency consultations are available for urgent situations involving bats in living spaces."
        },
        {
          q: "What does bat removal cost?",
          a: "Costs vary based on property size, extent of infestation, and required repairs. We provide free estimates with transparent pricing and no hidden fees. Most residential projects range from $800-$3,500."
        },
        {
          q: "Do you offer warranties on your work?",
          a: "Yes, we provide a comprehensive 2-year warranty on all exclusion work. If bats return to previously treated areas, we'll address it at no charge (structural modifications void warranty)."
        }
      ]
    },
    {
      category: "Prevention & Maintenance",
      icon: "🛡️",
      questions: [
        {
          q: "How can I prevent bats from returning?",
          a: "Our exclusion work includes sealing all entry points with durable materials. Regular property inspections, maintaining roof integrity, and prompt repair of gaps help prevent future issues."
        },
        {
          q: "What attracts bats to my property?",
          a: "Bats seek warm, dark spaces for roosting. Common attractants include roof gaps, attic spaces, loose soffits, open vents, and areas near water sources or insect populations."
        },
        {
          q: "Should I install bat houses after exclusion?",
          a: "Bat houses can be beneficial for local ecosystems and may reduce the likelihood of bats seeking shelter in your home. We can advise on proper placement away from your structure."
        }
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <section className="relative h-80 md:h-96 flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/placeholder.webp"
          alt="Frequently Asked Questions about Bat Removal"
          fill
          className="absolute inset-0 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Animated question mark icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 transform rotate-12">
            <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="absolute bottom-24 right-16 transform -rotate-12">
            <svg className="w-12 h-12 text-white animate-pulse delay-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 space-y-6 px-6 max-w-4xl">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-20 h-20 text-amber-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300">
            Bat Removal FAQ
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Get answers to your most common questions about professional bat removal services
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
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              Common Questions About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600"> Bat Removal</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Professional answers from Wyoming&apos;s trusted bat removal specialists
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto" />
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div 
                key={category.category}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50"
                style={{
                  animationDelay: `${categoryIndex * 0.2}s`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg">
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div 
                      key={faqIndex}
                      className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all duration-300"
                    >
                      <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 mb-3 group-hover:from-amber-700 group-hover:to-yellow-700 transition-all duration-300">
                        {faq.q}
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Resources */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-400 rounded-xl p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Still Have Questions?</h3>
                  <p className="text-slate-600 mb-4">Our bat removal experts are available to discuss your specific situation and provide personalized advice.</p>
                  <a
                    href="tel:(801)675-8829"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                  >
                    Call Us Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
              <div className="flex items-start space-x-4">
                <div className="bg-amber-400 rounded-xl p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Free Consultation</h3>
                  <p className="text-slate-600 mb-4">Get a detailed assessment of your bat problem with no obligation. We&apos;ll explain our process and provide transparent pricing.</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors duration-300"
                  >
                    Schedule Now
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Notice */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="bg-red-400 rounded-full p-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Situations</h3>
                <p className="text-red-700">
                  If you&apos;ve had direct contact with a bat, or if bats are actively flying in your living space, 
                  call us immediately at <a href="tel:(801)675-8829" className="font-bold underline">(801) 675-8829</a>. 
                  Consult with a healthcare provider about potential rabies exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}