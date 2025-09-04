"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/faq", label: "Bat FAQ", icon: "❓" },
  { href: "/exclusion", label: "Exclusion", icon: "🛡️" },
  { href: "/warranty", label: "Warranty", icon: "✅" },
  { href: "/about", label: "About", icon: "👥" },
  { href: "/contact", label: "Contact", icon: "📞" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sidebarRef = useRef<HTMLDivElement | null>(null)
  const toggleBtnRef = useRef<HTMLButtonElement | null>(null)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <>
      {/* Backdrop blur overlay when sidebar is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-2xl border-b border-white/50" 
          : "bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 shadow-xl"
      }`}>
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400" />
        
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber-400/5 rounded-full blur-3xl" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-400/5 rounded-full blur-2xl" />
          </div>
          
          {/* Logo + Brand */}
          <Link href="/" className="group flex items-center space-x-3 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-2 group-hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Image 
                  src="/images/jacksonholebatremoval_logo.webp" 
                  alt="Jackson Hole Bat Removal logo" 
                  width={40} 
                  height={40} 
                  className="h-10 w-10 object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold whitespace-nowrap transition-colors duration-300 ${
                scrolled 
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-600" 
                  : "text-amber-400"
              }`}>
                Jackson Hole Bat Removal
              </span>
              <span className={`text-xs font-medium ${
                scrolled ? "text-slate-600" : "text-white/70"
              }`}>
                Professional Wildlife Control
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center space-x-2 relative z-10">
            {links.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                      isActive
                        ? scrolled
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                          : "bg-amber-400 text-slate-900 shadow-lg"
                        : scrolled
                          ? "text-slate-700 hover:bg-amber-100 hover:text-amber-700"
                          : "text-white/90 hover:bg-white/10 hover:text-amber-400"
                    }`}
                  >
                    {/* To remove hydration error added this span that was supposed to be for icon in PC */}
                    <span className="text-sm">{}</span>
                    <span>{link.label}</span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                    )}
                    
                    {/* Hover effect background */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Call Button (Desktop) */}
          <div className="hidden md:block relative z-10">
            <a
              href="tel:(801)675-8829"
              className={`group inline-flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                scrolled
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
                  : "bg-white text-amber-600 hover:bg-amber-50"
              }`}
            >
              <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">(801) 675-8829</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleBtnRef}
            className={`md:hidden lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 ${
              scrolled
                ? "bg-amber-100 text-amber-600 hover:bg-amber-200"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {/* Hamburger Icon */}
            <Menu
              className={`absolute w-6 h-6 transition-all duration-300 transform ${
                isOpen
                  ? "opacity-0 rotate-90 scale-75"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            {/* Close Icon */}
            <X
              className={`absolute w-6 h-6 transition-all duration-300 transform ${
                isOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 -rotate-90 scale-75"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Enhanced Mobile Sidebar */}
      <aside
        ref={sidebarRef}
        className={`fixed top-[73px] left-0 z-50 bg-white/95 backdrop-blur-md border-r border-white/50 shadow-2xl transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          height: 'calc(100vh - 73px)'
        }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl p-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Navigation</h3>
                <p className="text-sm text-slate-600">Professional bat removal</p>
              </div>
            </div>
          </div>
          
          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {links.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center space-x-4 px-4 py-4 rounded-2xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg"
                          : "text-slate-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-yellow-50 hover:text-amber-700"
                      }`}
                      onClick={() => setIsOpen(false)}
                      style={{
                        animationDelay: `${index * 0.05}s`
                      }}
                    >
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-white/20" 
                          : "bg-slate-100 group-hover:bg-amber-200"
                      }`}>
                        <span className="text-lg">{link.icon}</span>
                      </div>
                      <div className="flex-1">
                        <span className="font-semibold">{link.label}</span>
                      </div>
                      <div className={`transition-transform duration-300 ${
                        isActive ? "translate-x-0" : "translate-x-2 group-hover:translate-x-0"
                      }`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Sidebar footer with call button */}
          <div className="p-6 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <a
              href="tel:(801)675-8829"
              className="group w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-6 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (801) 675-8829
            </a>
            
            <div className="mt-4 text-center space-y-1">
              <p className="text-sm text-slate-600 font-medium">Available 24/7</p>
              <div className="flex items-center justify-center space-x-4 text-xs text-slate-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1" />
                  Licensed
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-1" />
                  Insured
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}