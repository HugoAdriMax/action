'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Phone, 
  Globe, 
  Users, 
  Monitor, 
  Layout,
  Code,
  MessageCircle, 
  Award,
  ArrowRight,
  Target,
  Laptop,
  Blocks,
  BookOpen 
} from "lucide-react"

export default function WebFormation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre formation
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> web</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Devenez un expert du Web grâce à notre formation complète et personnalisée !
            </p>
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm text-blue-600 shadow-md">
              <Award className="h-4 w-4 mr-2" />
              Certification ICDL (RS6560)
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Formation adaptée à tous les niveaux</h2>
              <p className="text-gray-600 text-lg">
                Grâce aux ateliers créatifs s'appuyant sur des exemples concrets, votre formateur 
                vous proposera des mises en pratique à votre rythme, sur les différentes actions 
                et activités abordées dans les tutoriels vidéos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Niveau débutant</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Niveau intermédiaire</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Niveau avancé</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform -rotate-3"></div>
              <img 
                src="https://cdn.midjourney.com/5e130815-f60c-4e06-a61c-dff406918220/0_0.png" 
                alt="Formation web" 
                className="rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modes de formation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos modes de formation</h2>
            <p className="text-xl text-gray-600">Choisissez la formule qui vous convient le mieux</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Monitor className="h-8 w-8" />
                </div>
                <CardTitle>E-learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Interface personnalisable compatible tous supports</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Accès illimité à la plateforme</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Accompagnement permanent par des experts</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <CardTitle>Formation Hybride</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Cours particuliers personnalisés</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Audit personnalisé de vos besoins</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Progression à votre rythme</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* WordPress Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Édition Site Web avec WordPress</h2>
            <p className="text-xl text-gray-600">Créez des sites internet percutants en quelques heures</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Blocks className="h-8 w-8" />,
                title: "Création complète",
                description: "De l'installation au site terminé",
                features: [
                  "Installation WordPress",
                  "Gestion du site",
                  "Design responsive",
                  "Configuration complète"
                ]
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Pour tous les niveaux",
                description: "Aucun prérequis nécessaire",
                features: [
                  "Débutants bienvenus",
                  "Progression adaptée",
                  "Exemples concrets",
                  "Pratique guidée"
                ]
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Site professionnel",
                description: "Résultats garantis",
                features: [
                  "Design moderne",
                  "Bonnes pratiques",
                  "Optimisation SEO",
                  "Site responsive"
                ]
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Les points forts</h2>
            <p className="text-xl text-gray-600">Les avantages de notre formation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Users className="h-6 w-6" />, 
                title: "Cours flexibles", 
                description: "En particulier ou en groupe de 4 à 6 personnes" 
              },
              { 
                icon: <Laptop className="h-6 w-6" />, 
                title: "Multi-support", 
                description: "Plateforme accessible sur Mobile et Tablette" 
              },
              { 
                icon: <MessageCircle className="h-6 w-6" />, 
                title: "Support technique", 
                description: "Support pédagogique et technique via chat" 
              },
              { 
                icon: <BookOpen className="h-6 w-6" />, 
                title: "Programme personnalisé", 
                description: "Adapté à votre niveau et vos objectifs" 
              },
              { 
                icon: <Award className="h-6 w-6" />, 
                title: "Certification ICDL", 
                description: "Code formation RS6560 incluse" 
              },
              { 
                icon: <Code className="h-6 w-6" />, 
                title: "Pratique concrète", 
                description: "Projets réels et mise en application" 
              }
            ].map((point, index) => (
              <Card key={index} className="border-none">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs et Certification */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle>Les objectifs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Votre programme de formation vous permettra de développer vos capacités 
                  dans la création et la gestion de sites web professionnels.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Maîtrise complète de WordPress</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Création de sites web responsive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <span>Gestion autonome de votre site</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle>Certification ICDL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  À la suite de votre formation, vous effectuerez un test de certification 
                  en ligne. L'examen est inclus dans votre formule et reconnu à l'échelle européenne.
                </p>
                <Button className="w-full">
                  Voir le programme complet
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CPF Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Faîtes financer votre formation</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Un Compte Personnel de Formation est un organisme qui finance des formations.
                Au cours de leur vie active, les salariés accumulent des droits au sein d'une 
                cagnotte qu'ils sont libres d'utiliser pour une ou plusieurs formations.
              </p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-400">
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.midjourney.com/38cca4d9-6c08-4bbc-8c75-8cfbb5812a41/0_1.png" 
                alt="CPF Formation" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Des questions sur nos formations ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous vous accompagnons du lundi au samedi au{" "}
            <span className="font-semibold">01 76 35 13 56</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg h-12 px-8"
            >
              Je m'inscris
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="text-lg h-12 px-8"
            >
              <Phone className="mr-2 h-5 w-5" />
              Me faire rappeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}