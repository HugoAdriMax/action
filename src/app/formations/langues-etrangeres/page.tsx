'use client';
import { Globe2, CheckCircle2, MessageCircle, Users, Award, Target, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LanguesFormation() {
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
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400" href="/contact">
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
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-400" href="/contact">
                    Trouver un formateur
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
