type City = {
  name: string
  state: string
}

export default function FAQ({ city }: { city: City }) {
  const faqs = [
    {
      icon: "📍",
      question: `Do you serve all of ${city.name}?`,
      answer: `Yes, we cover all neighborhoods and surrounding areas of ${city.name}.`
    },
    {
      icon: "⚠️",
      question: "Are bats dangerous?",
      answer: "Bats can carry rabies and their droppings may spread histoplasmosis. Professional removal is important."
    },
    {
      icon: "⚡",
      question: "How quickly can you help?",
      answer: `We usually provide same-day or next-day service in ${city.state}.`
    }
  ]

  return (
    <section className="py-20 px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-10 right-16 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-40 blur-2xl" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl p-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600">
            FAQs About Bat Removal
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-700">
            in {city.name}
          </h3>
          
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mx-auto" />
        </div>

        {/* Enhanced FAQ cards */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm border border-white/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl p-3 group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-500">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300 block">
                      {faq.icon}
                    </span>
                  </div>
                  
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600 group-hover:from-amber-700 group-hover:to-yellow-700 transition-all duration-300">
                      {faq.question}
                    </h3>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-2xl p-8 border border-white/50">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Have More Questions?</h3>
            <p className="text-slate-600 mb-6">
              Our bat removal experts are here to help with any additional concerns you may have.
            </p>
            <a
              href="tel:(801)675-8829"
              className="inline-flex items-center bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}