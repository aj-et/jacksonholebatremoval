import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import { Footer } from "@/components/subpages"

export const metadata: Metadata = {
  title: "Professional Bat Removal Services | Jackson Hole Bat Removal",
  description:
    "Safe, humane, and effective bat removal services. Get expert bat exclusion, guano cleanup, and prevention to protect your home.",
    keywords: [
    "bat removal",
    "bat exclusion",
    "guano cleanup",
    "Wyoming wildlife removal",
    "Jackson Hole bat control",
  ],
  openGraph: {
    title: "Professional Bat Removal Services | Jackson Hole Bat Removal",
    description:
      "Safe, humane, and effective bat removal services across Wyoming.",
    url: "https://www.jacksonholebatremoval.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.jacksonholebatremoval.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
