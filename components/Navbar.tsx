"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "Bat FAQ" },
  { href: "/exclusion", label: "Exclusion" },
  { href: "/warranty", label: "Warranty" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null)

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node

      // Ignore clicks inside sidebar or on the toggle button
      if (
        sidebarRef.current?.contains(target) ||
        toggleBtnRef.current?.contains(target)
      ) {
        return
      }

      setIsOpen(false)
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="bg-rust text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-3">
          <Image 
            src="/images/jacksonholebatremoval_logo.webp" 
            alt="Jackson Hole Bat Removal logo" 
            width={40} 
            height={40} 
            className="h-10 w-10 object-contain" 
          />
          <span className="text-xl md:text-2xl font-bold text-jh-gold whitespace-nowrap">
            Jackson Hole Bat Removal
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-gold transition ${
                  pathname === link.href ? "text-gold font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button with animated icons */}
        <button
          ref={toggleBtnRef}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Hamburger Icon */}
          <Menu
            className={`absolute w-7 h-7 transition-all duration-300 transform ${
              isOpen
                ? "opacity-0 rotate-90 scale-75"
                : "opacity-100 rotate-0 scale-100"
            }`}
          />
          {/* Close Icon */}
          <X
            className={`absolute w-7 h-7 transition-all duration-300 transform ${
              isOpen
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </div>

      {/* Sidebar (LEFT side, closes when clicking outside) */}
      <aside
        ref={sidebarRef}
        className={`fixed top-[64px] left-0 z-50 bg-white text-rust rounded-r-2xl shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-6 space-y-4 w-64">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-4 py-2 rounded-lg hover:bg-gold hover:text-white transition ${
                  pathname === link.href
                    ? "bg-gold text-white font-semibold"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </nav>
  )
}
