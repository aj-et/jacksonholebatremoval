import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Professional Bat Removal Services | Utah Wildlife Specialists",
  description:
    "Safe, humane, and effective bat removal services. Get expert bat exclusion, guano cleanup, and prevention to protect your home.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}
