'use client';
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MicrosoftFormation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formation 
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Microsoft Word, Excel & PowerPoint</span>
            </h1>
            <p className="text-xl text-gray-600">
              Découvrez nos formations complètes sur les outils Microsoft Office pour maîtriser Excel, Word et PowerPoint à tous les niveaux.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">À qui s'adresse cette formation ?</h2>
              <p className="text-gray-600 text-lg">
                Toute personne utilisant Excel dans son quotidien et souhaitant améliorer ses compétences, ainsi que toute personne souhaitant découvrir Word et PowerPoint.
              </p>

              <h2 className="text-3xl font-bold">Public concerné</h2>
              <p className="text-gray-600 text-lg">
                Toute personne ou non utilisant Excel, Word ou PowerPoint dans son quotidien et qui souhaite améliorer ses compétences.
              </p>

              <h2 className="text-3xl font-bold">Prérequis</h2>
              <p className="text-gray-600 text-lg">
                Savoir manipuler un ordinateur muni d’un système d’exploitation Windows. Pas de connaissances requises pour participer à cette formation.
              </p>
            </div>

            {/* Program Section */}
            <div className="space-y-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle>Le programme de la formation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-lg">
                    Plusieurs parcours sont disponibles pour Word, Excel et PowerPoint. Veuillez nous contacter pour plus d'informations.
                  </p>
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-400">
                    <a href="/contact" className="block w-full h-full text-white">
                      Nous contacter
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Les objectifs de la formation</h2>
            <p className="text-xl text-gray-600">
              Découvrir et exploiter les principales fonctionnalités du logiciel Microsoft Excel, Word et PowerPoint.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Fonctionnalités Excel</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Manipuler les séries de données</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Utiliser les fonctions courantes et avancées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Créer des graphiques et tableaux croisés dynamiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Créer des macros pour automatiser des tâches</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <CardTitle>Fonctionnalités Word & PowerPoint</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Création de documents professionnels</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Mise en page avancée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Création de présentations dynamiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Insertion d'animations et de transitions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pourquoi nous choisir ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nos supports de formation interactifs et captivants permettent un apprentissage rapide et efficace, avec des exercices intégrés pour un suivi optimal.
          </p>
          <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
            Voir nos formateurs experts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Cette formation est adossée au référentiel de compétences sur France Compétences et est éligible au financement par les fonds de la formation professionnelle.
              </p>
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-400">
                <a href="/contact" className="block w-full h-full text-white">
                  Contactez-nous pour plus de détails
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Image added next to certification */}
          <div className="relative">
            <img 
              src="https://cdn.midjourney.com/7981d6d7-810c-49bc-b953-f4489cdd79ba/0_2.png" 
              alt="Microsoft Certification"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
