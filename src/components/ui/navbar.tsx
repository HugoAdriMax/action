'use client';

import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isFormationsOpen, setIsFormationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Actiom
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              À propos
            </Link>
            
            {/* Dropdown for "Formations certifiantes" */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsFormationsOpen(true)}
              onMouseLeave={() => setIsFormationsOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>Formations certifiantes</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFormationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${
                  isFormationsOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="py-2">
                  <Link 
                    href="/formations/langues"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Langues
                  </Link>
                  <Link 
                    href="/formations/bureautique"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Bureautique
                  </Link>
                  <Link 
                    href="/formations/design"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Design
                  </Link>
                  <Link 
                    href="/formations/web"
                    className="block px-4 py-2 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    Web
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/pro" className="text-gray-600 hover:text-blue-600 transition-colors">
              Formations professionnelles
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button
              className="bg-gradient-to-r from-blue-600 to-blue-400"
              onClick={() => window.location.href = 'https://actiom.simplelearning.fr/authentication/login'}
            >
              Espace Apprenant
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-4">
            <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
              À propos
            </Link>

            {/* Dropdown for "Formations certifiantes" */}
            <div className="space-y-2">
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsFormationsOpen(!isFormationsOpen)}
              >
                <span>Formations certifiantes</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFormationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFormationsOpen && (
                <div className="space-y-2 pl-4">
                  <Link 
                    href="/formations/langues"
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Langues
                  </Link>
                  <Link 
                    href="/formations/bureautique"
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Bureautique
                  </Link>
                  <Link 
                    href="/formations/design"
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Design
                  </Link>
                  <Link 
                    href="/formations/web"
                    className="block text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    Web
                  </Link>
                </div>
              )}
            </div>

            <Link href="/pro" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Formations professionnelles
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-400"
              onClick={() => window.location.href = 'https://actiom.simplelearning.fr/authentication/login'}
            >
              Espace Apprenant
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
