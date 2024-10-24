'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Info, ArrowRightCircle } from "lucide-react";

export default function Opcos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                L'OPCO, c'est quoi ?
              </h1>
              <p className="text-xl text-gray-600">
                Comprenez ce qu'est un OPCO et découvrez comment cet organisme vous accompagne dans vos démarches de formation professionnelle.
              </p>
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg">
                Voir comment en bénéficier
                <ArrowRightCircle className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Remplacer l'icône par l'image */}
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://cdn.midjourney.com/c108adfa-433d-49bc-a30f-1f91c46fbd94/0_2.png" 
                  alt="OPCO illustration" 
                  className="rounded-2xl shadow-xl mx-auto"
                />
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
              <h2 className="text-3xl font-bold mb-4">C'est quoi un OPCO ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Un OPCO (Opérateur de Compétence) est un organisme qui accompagne les entreprises dans l'accès à la formation professionnelle. Depuis avril 2019, les OPCO ont remplacé les anciens Organismes Paritaires Collecteurs Agréés (OPCA). Ils regroupent les entreprises par branches professionnelles pour faciliter le financement et la mise en œuvre des formations.
              </p>
            </div>

            {/* Second Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Comment fonctionnent les OPCO ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Les OPCO jouent un rôle clé dans le développement des compétences au sein des entreprises. Ils aident à identifier les besoins de formation, prennent en charge les coûts et accompagnent les entreprises dans la gestion des dossiers de formation. Ils financent également des formations via des dispositifs comme le CPF (Compte Personnel de Formation) et le contrat d’apprentissage.
              </p>
            </div>

            {/* Third Section */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Les démarches à suivre pour bénéficier des services d’un OPCO</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Pour bénéficier des services d'un OPCO, les entreprises doivent d'abord identifier l'OPCO qui couvre leur branche professionnelle. Ensuite, elles peuvent contacter leur OPCO pour obtenir des informations sur les démarches à suivre : définition des besoins de formation, élaboration d’un plan de formation, et soumission des dossiers de financement. Les OPCO sont également disponibles pour conseiller sur les dispositifs disponibles pour les salariés, comme le CPF, le plan de développement des compétences, ou encore le contrat de professionnalisation.
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
                Découvrez comment faire financer vos formations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
