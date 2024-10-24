import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ArrowRightCircle } from "lucide-react";

export default function Langues() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Les différentes langues
              </h1>
              <p className="text-xl text-gray-600">
                Découvrez notre programme complet de formation en langue, divisé en plusieurs modules pour améliorer progressivement vos compétences linguistiques.
              </p>
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg">
                Explorer nos modules de formation
                <ArrowRightCircle className="ml-2 h-6 w-6" />
              </Button>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <BookOpen className="h-40 w-40 text-blue-600 mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-12">
            {/* Module 1-4 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Module 1-4 : Bases solides</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ces modules permettent d’acquérir des bases solides avec le vocabulaire fondamental et les principales structures de la langue. Les compétences développées incluent :
                <ul className="list-disc list-inside mt-4">
                  <li>Salutations et présentations</li>
                  <li>Questions et réponses simples</li>
                  <li>Shopping</li>
                  <li>Compétences de compréhension orale</li>
                  <li>Compétences de lecture et d’écriture de base</li>
                </ul>
              </p>
            </div>

            {/* Module 5-8 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Module 5-8 : Navigation dans l’environnement</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ces modules continuent à bâtir sur les bases acquises dans les précédents, et couvrent les compétences suivantes :
                <ul className="list-disc list-inside mt-4">
                  <li>Donner et obtenir des instructions</li>
                  <li>Utiliser les transports</li>
                  <li>Dire l’heure</li>
                  <li>Interactions sociales de base</li>
                  <li>Vie professionnelle</li>
                  <li>Arts et culture, temps passé, présent et futur</li>
                </ul>
              </p>
            </div>

            {/* Module 9-12 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Module 9-12 : Communiquer avec le monde</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ces modules aident à développer les compétences de communication dans diverses situations :
                <ul className="list-disc list-inside mt-4">
                  <li>Exprimer des idées et opinions</li>
                  <li>Sentiments et préoccupations</li>
                  <li>Travail et événements actuels</li>
                  <li>Naissance, mariage, décès</li>
                  <li>Termes liés à la santé et corps</li>
                </ul>
              </p>
            </div>

            {/* Module 13-16 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Module 13-16 : Compréhension avancée</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ces modules offrent aux apprenants des compétences plus avancées :
                <ul className="list-disc list-inside mt-4">
                  <li>Vie professionnelle et navigation dans le travail</li>
                  <li>Santé et bien-être</li>
                  <li>Déménager à l’étranger</li>
                  <li>Planification d’aventures et préférences personnelles</li>
                </ul>
              </p>
            </div>

            {/* Module 17-20 */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Module 17-20 : Maîtrise et perfectionnement</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ces modules permettent de développer une maîtrise plus approfondie de la langue :
                <ul className="list-disc list-inside mt-4">
                  <li>Situations d’urgence et divertissements</li>
                  <li>Interagir avec les services publics</li>
                  <li>Bénévolat et famille</li>
                  <li>Exprimer ses inquiétudes et accomplissements</li>
                </ul>
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white py-12 px-4 text-center">
              <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nos formations sont interactives et captivantes, offrant un apprentissage rapide et efficace, utilisables à distance ou en présentiel. 
                Vos stagiaires bénéficient d’un accès permanent aux supports de cours pour un apprentissage autonome.
              </p>
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
                Voir nos formateurs experts
                <ArrowRightCircle className="ml-2 h-6 w-6" />
              </Button>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
                Explorer nos formations en langue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
