"use client"
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
   <header className="bg-[#ede8e5] shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              About
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Services
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              FAQs
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex flex-col items-center">
            <div className="text-2xl font-light text-stone-700 tracking-wider">
              Tess Browne
            </div>
            <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">
              Clinical Psychologist
            </div>
          </div>

          {/* Right Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Resources
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Journal
            </button>
            <button className="text-stone-600 hover:text-stone-800 transition-colors uppercase text-sm tracking-wider">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-600 hover:text-stone-800 focus:outline-none transition-transform duration-200 hover:scale-110"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced Beautiful UI */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md shadow-lg border-t border-stone-200">
            <div className="px-6 py-8 space-y-6">
              {/* Mobile Logo Section */}
              <div className="text-center pb-6 border-b border-stone-200">
                <div className="text-xl font-light text-stone-700 tracking-wider">
                  Tess Browne
                </div>
                <div className="text-xs text-stone-500 uppercase tracking-widest mt-1">
                  Clinical Psychologist
                </div>
              </div>
              
              {/* Mobile Navigation Items */}
              <div className="space-y-4">
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  About
                </button>
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  Services
                </button>
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  FAQs
                </button>
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  Resources
                </button>
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  Journal
                </button>
                <button className="w-full text-left px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-stone-50 rounded-lg transition-all duration-200 uppercase text-sm tracking-wider font-medium border border-transparent hover:border-stone-200">
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}