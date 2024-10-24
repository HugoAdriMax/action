'use client';

import { Button } from "@/components/ui/button"
import { GraduationCap, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Définition des programmes de formation
const formationPrograms = [
  {
    title: "Administratif",
    items: [
      { name: "Assistant(e) Secrétariat", link: "/formations/assistant-secretariat" },
      { name: "Auto-Entrepreneur", link: "/formations/auto-entrepreneur" },
      { name: "Bilan Comptable", link: "/formations/bilan-comptable" },
    ]
  },
  {
    title: "Langues & Bureautique",
    items: [
      { name: "Langues Étrangères", link: "/formations/langues-etrangeres" },
      { name: "Microsoft Excel", link: "/formations/microsoft-excel" },
      { name: "Microsoft Word", link: "/formations/microsoft-word" },
      { name: "Microsoft PowerPoint", link: "/formations/microsoft-powerpoint" },
    ]
  },
  {
    title: "Design & PAO",
    items: [
      { name: "InDesign", link: "/formations/indesign" },
      { name: "Photoshop", link: "/formations/photoshop" },
      { name: "Illustrator", link: "/formations/illustrator" },
    ]
  },
  {
    title: "Commercial & Marketing Digital",
    items: [
      { name: "Téléprospecteur", link: "/formations/teleprospecteur" },
      { name: "Téléconseillers", link: "/formations/teleconseillers" },
      { name: "Big-Data", link: "/formations/big-data" },
      { name: "Community Manager", link: "/formations/community-manager" },
      { name: "Inbound Marketing", link: "/formations/inbound-marketing" },
      { name: "SEO", link: "/formations/seo" },
      { name: "SEA", link: "/formations/sea" },
      { name: "Digital", link: "/formations/digital" },
      { name: "Créer un site WordPress", link: "/formations/wordpress" },
    ]
  },
  {
    title: "Développement Personnel",
    items: [
      { name: "Coaching", link: "/formations/coaching" },
      { name: "Rédaction Web", link: "/formations/redaction-web" },
      { name: "Comptabilité", link: "/formations/comptabilite" },
      { name: "Développement Personnel", link: "/formations/developpement-personnel" },
      { name: "Contrat de Travail", link: "/formations/contrat-travail" },
      { name: "Prise de Parole en Public", link: "/formations/prise-parole" },
      { name: "Formation", link: "/formations/formation" },
      { name: "Travail à Distance", link: "/formations/travail-distance" },
      { name: "Gestion du Temps", link: "/formations/gestion-temps" },
    ]
  },
  {
    title: "Management & Qualité",
    items: [
      { name: "Management Agile", link: "/formations/management-agile" },
      { name: "Management", link: "/formations/management" },
      { name: "Innovation & Créativité", link: "/formations/innovation" },
      { name: "Logistique", link: "/formations/logistique" },
      { name: "Consultant", link: "/formations/consultant" },
      { name: "Gestion de Projet", link: "/formations/gestion-projet" },
      { name: "Responsable Qualité", link: "/formations/responsable-qualite" },
      { name: "Relation Client", link: "/formations/relation-client" },
      { name: "HACCP", link: "/formations/haccp" },
    ]
  }
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
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              À propos
            </Link>
            
            {/* Mega Menu */}
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
                className={`absolute top-full left-0 w-[800px] bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ${
                  isFormationsOpen 
                    ? 'opacity-100 visible translate-y-0' 
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="grid grid-cols-3 gap-4 p-6">
                  {formationPrograms.map((category) => (
                    <div key={category.title} className="space-y-3">
                      <h3 className="font-semibold text-gray-900">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.link}
                              className="text-gray-600 hover:text-blue-600 transition-colors block text-sm"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
                <div className="pl-4 space-y-4">
                  {formationPrograms.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h3 className="font-semibold text-gray-900">{category.title}</h3>
                      <ul className="space-y-2 pl-4">
                        {category.items.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.link}
                              className="block text-gray-600 hover:text-blue-600 transition-colors text-sm"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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