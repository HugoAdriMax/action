'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Phone, Mail, User, MapPin } from "lucide-react"

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mentions 
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Légales</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Informations Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 space-y-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                Le site « www.actiomformation.fr » est la propriété exclusive de la société ACTIOM.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Informations légales</h3>
                    <p className="text-gray-600">Siret : 914 570 189 000 11 – RCS PARIS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Adresse</h3>
                    <p className="text-gray-600">67 avenue Victor Hugo – 75016 PARIS</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Téléphone</h3>
                    <p className="text-gray-600">01 76 35 13 56</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">E-mail</h3>
                    <p className="text-gray-600">contact@actiomformation.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Directeur de la publication / gérant</h3>
                    <p className="text-gray-600">Alexandre UZAN</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t">
                <p className="text-gray-600">
                  Le site est hébergé par la société O2SWITCH, dont le siège social est au 222 Bd Gustave Flaubert, 63000 Clermont-Ferrand – France.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}