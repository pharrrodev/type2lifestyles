'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Type2Lifestyles</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary transition font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-primary transition font-medium">
              Resources
            </Link>
            <Link 
              href="/app" 
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition font-semibold"
            >
              Try App
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
            <Link
              href="/app"
              className="block px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
              onClick={() => setIsOpen(false)}
            >
              Try App
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
