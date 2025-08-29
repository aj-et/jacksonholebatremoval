import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center">
      {/* Background image */}
      <Image src="/images/404-bats.webp" alt="Jackson Hole night sky with bats" fill className="absolute inset-0 w-full h-full object-cover"></Image>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-2xl text-white">
        <h1 className="text-7xl font-extrabold text-gold drop-shadow-lg mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Oops! It looks like the page you’re searching for doesn’t exist.  
          Maybe the bats flew away 🦇 — but don’t worry, we can guide you back home.
        </p>

        <Link
          href="/"
          className="inline-block bg-gold hover:bg-rust text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  )
}
