'use client';

import { GraduationCap } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold">Actiom</span>
          </div>
          <p className="text-gray-600">
            Formation professionnelle innovante pour votre réussite
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Formation</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Catalogue</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">CPF</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Entreprises</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">À propos</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Notre équipe</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Nos valeurs</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Légal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Mentions légales</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Confidentialité</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">CGV</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t pt-8 text-center text-gray-600">
        <p>© 2024 Actiom Formation. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
  )
}
