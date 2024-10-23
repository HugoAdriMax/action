'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, ArrowRightCircle } from "lucide-react";

export default function FormationPro() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Formation Professionnelle
              </h1>
              <p className="text-xl text-gray-600">
                Découvrez tout ce qu'il faut savoir sur les OPCO et le financement de la formation professionnelle.
              </p>
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg">
                Voir toutes nos formations
                <ArrowRightCircle className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <GraduationCap className="h-40 w-40 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {/* First Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Rappel : C'est quoi un OPCO ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Un Opérateur de Compétence (OPCO) désigne un organisme d’accompagnement à la formation professionnelle. Depuis le 1er avril 2019, les OPCO ont remplacé les Organismes Paritaires Collecteurs Agréés (OPCA). Ainsi, les 329 branches professionnelles sont réparties sous 11 OPCO à la place des 20 OPCA précédents.
                <br /><br />
                Les OPCO jouent un rôle d’intermédiaire entre les branches professionnelles et les entreprises. Ils renseignent sur la prise en charge des formations et aident à définir les besoins en formation. 
              </p>
            </div>

            {/* Second Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Financement de la formation professionnelle par les OPCO</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Les OPCO financent la formation professionnelle de tous les actifs dès l’âge de 16 ans, qu’il s’agisse de salariés, d’apprentis, de dirigeants, etc. Ils prennent aussi en charge le financement des contrats d’apprentissage et de professionnalisation.
              </p>
            </div>

            {/* Third Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Quels sont les OPCO ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Les 11 Opérateurs de Compétence sont : AFDAS, ATLAS, Uniformation, AKTO, OCAPIAT, OPCO 2i, Construction, OPCO Mobilités, OPCO EP, OPCO Santé, et OPCOcommerce. Chaque OPCO regroupe plusieurs branches professionnelles pour accompagner la formation de leurs salariés.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
                TOUTES NOS FORMATIONS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
