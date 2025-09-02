import Image from "next/image"

export default function UnderConstruction({ pageName }: { pageName?: string }) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-6 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/construction.webp"
          alt="Under construction background"
          fill
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-jh-rust mb-6 drop-shadow-md">
          {pageName ? `${pageName} Page` : "This Page"} is Under Construction
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mb-8">
          We are working hard to finish this page. Please check back soon!
        </p>
        <p className="text-sm text-gray-600 italic">
          — Jackson Hole Bat Removal Team
        </p>
      </div>
    </main>
  )
}
