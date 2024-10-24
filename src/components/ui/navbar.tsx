'use client';

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Liste exacte des formations
const formationPrograms = [
  { name: "Formation Langues étrangères", link: "/formations/langues-etrangeres" },
  { name: "Microsoft Word Excel Power", link: "/formations/microsoft" },
  { name: "Prévention", link: "/formations/prevention" },
  { name: "Esthétique - Santé", link: "/formations/esthetique-sante" },
  { name: "Commercial", link: "/formations/commercial" },
  { name: "Immobilier", link: "/formations/immobilier" },
  { name: "Assurance", link: "/formations/assurance" },
  { name: "Ressources humaines - Projet professionnel", link: "/formations/rh-projet" },
  { name: "Management - Communication", link: "/formations/management-communication" },
  { name: "Intelligence artificielle (IA)", link: "/formations/ia" },
  { name: "CAO 2D 3D", link: "/formations/cao" },
  { name: "PAO & VIDEO", link: "/formations/pao-video" },
  { name: "Codage système réseaux", link: "/formations/codage" },
  { name: "Sites", link: "/formations/sites" },
  { name: "Application marketing digital", link: "/formations/marketing-digital" },
  { name: "Base informatique", link: "/formations/informatique" }
];

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
            {/* Menu Formations */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsFormationsOpen(true)}
              onMouseLeave={() => setIsFormationsOpen(false)}
            >
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>Nos programmes de formation</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFormationsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div 
                className={`absolute top-full left-0 w-[400px] -translate-x-1/4 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${
                  isFormationsOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="p-4">
                  <ul className="space-y-2">
                    {formationPrograms.map((formation, index) => (
                      <li key={formation.name}>
                        <Link
                          href={formation.link}
                          className="text-gray-600 hover:text-blue-600 transition-colors block text-sm py-1"
                        >
                          {`${index + 1}) ${formation.name}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/cpf" className="text-gray-600 hover:text-blue-600 transition-colors">
              CPF
            </Link>
            
            <Link href="/opco" className="text-gray-600 hover:text-blue-600 transition-colors">
              L'opco c'est quoi ?
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
            {/* Mobile Formations Menu */}
            <div className="space-y-2">
              <button 
                className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsFormationsOpen(!isFormationsOpen)}
              >
                <span>Nos programmes de formation</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isFormationsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFormationsOpen && (
                <div className="pl-4 space-y-2">
                  <ul className="space-y-2">
                    {formationPrograms.map((formation, index) => (
                      <li key={formation.name}>
                        <Link
                          href={formation.link}
                          className="block text-gray-600 hover:text-blue-600 transition-colors text-sm py-1"
                        >
                          {`${index + 1}) ${formation.name}`}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link href="/cpf" className="block text-gray-600 hover:text-blue-600 transition-colors">
              CPF
            </Link>
            
            <Link href="/opco" className="block text-gray-600 hover:text-blue-600 transition-colors">
              L'opco c'est quoi
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