'use client';
import { Globe2, CheckCircle2, MessageCircle, Users, Award, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from 'next/router';

export default function LanguesFormation() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos formations en
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> langue</span>
            </h1>
            <p className="text-xl text-gray-600">
              Progressez dans votre apprentissage des langues avec nos programmes complets, structurés en plusieurs modules pour chaque niveau.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Le Programme standard d'une formation en langue</h2>
              <p className="text-gray-600 text-lg">
                Chaque module met en valeur différentes compétences linguistiques et de vocabulaire.
              </p>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <strong>Module 1-4 :</strong> Bases solides avec le vocabulaire fondamental et les principales structures de langue. 
                  Compétences abordées : Salutations, questions simples, shopping, compréhension orale, etc.
                </li>
                <li className="text-gray-600">
                  <strong>Module 5-8 :</strong> Navigation dans l'environnement avec un vocabulaire plus étendu.
                  Compétences abordées : Donner des instructions, utiliser les transports, interactions sociales, vie professionnelle.
                </li>
                <li className="text-gray-600">
                  <strong>Module 9-12 :</strong> Communication sur des sujets variés.
                  Compétences abordées : Idées, opinions, travail, événements actuels, santé, etc.
                </li>
                <li className="text-gray-600">
                  <strong>Module 13-16 :</strong> Maîtrise plus approfondie.
                  Compétences abordées : Santé mentale, conduite, déménagement, organiser des aventures, etc.
                </li>
                <li className="text-gray-600">
                  <strong>Module 17-20 :</strong> Ces cours permettent aux apprenants de développer leur maîtrise de la langue tout en affinant les compétences de communication essentielles. 
                  Compétences abordées : Situations d'urgence, divertissements, secteur administratif, apprentissage du quartier, bénévolat, famille et traditions, célébration de vos réussites.
                </li>
              </ul>
            </div>

            {/* Modules section à droite */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>Caractéristiques</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Support E-learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Durée : 12h</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Prix sur demande</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400"
                    onClick={() => router.push('/contact')}
                  >
                    Ajouter à mon catalogue
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>Ajouter un formateur</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Présentiel/Distanciel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Classe Individuelle/Collective</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Durée sur mesure</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-blue-600" />
                      <span>Tarif horaire sur demande</span>
                    </li>
                  </ul>
                  <Button
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-400"
                    onClick={() => router.push('/contact')}
                  >
                    Trouver un formateur
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos supports de formation interactifs, captivants et stimulants, permettent un apprentissage rapide. Utilisables à distance ou en présentiel, ils vous permettent de vérifier en continu l'implication et la progression de vos apprenants grâce à des exercices intégrés. Vos stagiaires bénéficient durant toute la durée de la licence d'un accès permanent aux supports de cours pour un apprentissage autonome et durable.
          </p>
          <h3 className="text-2xl font-bold mb-4">Formateurs experts</h3>
          <p className="text-lg text-gray-600 mb-6">
            Nos tuteurs sont disponibles à tout moment en Chat asynchrone ou par courriel sur les parcours E-Learning.
          </p>
          <h3 className="text-2xl font-bold mb-4">Qualité des formations</h3>
          <p className="text-lg text-gray-600">
            Apprentissage captivant, meilleur taux d'achèvement : nos supports de cours interactifs font la différence ! Cette formation est éligible aux différents financements de la formation professionnelle. Adossée au référentiel de compétences de France Compétences, elle est potentiellement éligible aux fonds de la formation professionnelle. Contactez-nous pour en savoir plus.
          </p>
        </div>
      </section>
    </div>
  );
}
