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
          {/* Image added above the text */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <img 
              src="https://cdn.midjourney.com/fbc06f4f-3bb6-4f3a-849a-001863c7dca6/0_3.png" 
              alt="Formation Langues" 
              className="mx-auto mb-8 rounded-2xl shadow-xl"
            />
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Excellence pédagogique</h2>
              <p className="text-gray-600 text-lg">
                Nos programmes sont conçus pour s'adapter à tous les niveaux, du débutant à l'avancé, en développant des compétences linguistiques fondamentales puis avancées.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Apprentissage progressif et structuré</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Accompagnement par des formateurs experts</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Accessibilité pour tous niveaux</span>
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
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400">
                    <a href="/contact" className="block w-full h-full text-white">
                      Ajouter à mon catalogue
                    </a>
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
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400">
                    <a href="/contact" className="block w-full h-full text-white">
                      Trouver un formateur
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Linguistiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Modules linguistiques</h2>
            <p className="text-xl text-gray-600">Chaque module met en valeur des compétences linguistiques spécifiques</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Module 1-4 : Bases solides",
                features: [
                  "Salutations et présentations",
                  "Questions et réponses simples",
                  "Compétences de lecture et écriture de base",
                  "Shopping"
                ]
              },
              {
                title: "Module 5-8 : Interactions courantes",
                features: [
                  "Donner des instructions",
                  "Dire l'heure",
                  "Interagir dans les restaurants et transports",
                  "Vie professionnelle"
                ]
              },
              {
                title: "Module 9-12 : Communiquer avec le monde",
                features: [
                  "Exprimer des idées et opinions",
                  "Sujets actuels",
                  "Travail et santé",
                  "Événements importants"
                ]
              },
              {
                title: "Module 13-16 : Maîtrise approfondie",
                features: [
                  "Déménager à l’étranger",
                  "Naviguer dans son lieu de travail",
                  "Santé mentale et physique",
                  "Organisation des aventures"
                ]
              }
            ].map((module, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos formations linguistiques sont flexibles et accessibles, adaptées aux besoins professionnels et personnels.
          </p>
          <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
            Voir nos formateurs experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Objectifs et Certification */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle>Les objectifs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Maîtrise des bases et compétences avancées</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Pratique des compétences orales et écrites</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <Award className="h-8 w-8" />
              </div>
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                À la fin de votre formation, passez un test de certification en ligne reconnu.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Certificat européen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Des questions sur nos formations ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous sommes disponibles pour vous accompagner au{" "}
            <span className="font-semibold">01 76 35 13 56</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg h-12 px-8">
              Je m'inscris
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
