'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Phone, 
  Pencil, 
  Users, 
  Monitor, 
  Layout,
  Image, 
  PenTool,
  Box,
  Building2,
  MessageCircle, 
  Award,
  ArrowRight,
  Target 
} from "lucide-react"

export default function DesignFormation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos formations en
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> design</span>
            </h1>
            <p className="text-xl text-gray-600">
              Développez votre créativité grâce aux programmes de Web Design. Apprenez à retoucher des images, 
              créer des visuels et des vidéos animées dans un secteur en pleine expansion.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Un secteur en pleine croissance</h2>
              <p className="text-gray-600 text-lg">
                Rien qu'en France, la part de ce marché a été multiplié par cinq sur la décennie. 
                Obtenez une certification dans un domaine très recherché par les recruteurs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Formation adaptée aux débutants</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Perfectionnement intermédiaire</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Expertise avancée</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://cdn.midjourney.com/2707ec5d-8138-466c-86c3-3a61914d72c0/0_0.png" 
                alt="Formation design" 
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
                    <p>Accès illimité à notre plateforme dynamique et intuitive</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Interface personnalisable compatible tous supports</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p>Accompagnement par des tuteurs experts</p>
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
                    <p>Formateur adapté à votre situation</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Logiciels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nos formations logiciels</h2>
            <p className="text-xl text-gray-600">Maîtrisez les outils professionnels du design</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Image className="h-8 w-8" />,
                title: "Photoshop",
                description: "Initiation & perfectionnement",
                features: [
                  "54 modules de formation",
                  "Retouche d'images",
                  "Création graphique",
                  "Design professionnel"
                ]
              },
              {
                icon: <PenTool className="h-8 w-8" />,
                title: "Illustrator",
                description: "Initiation & perfectionnement",
                features: [
                  "60 modules complets",
                  "Création de logos",
                  "Charte graphique",
                  "Infographies"
                ]
              },
              {
                icon: <Layout className="h-8 w-8" />,
                title: "InDesign",
                description: "Initiation & perfectionnement",
                features: [
                  "24 modules pratiques",
                  "Mise en page",
                  "Publications print",
                  "Documents interactifs"
                ]
              },
              {
                icon: <Box className="h-8 w-8" />,
                title: "SketchUp Pro 2021",
                description: "Modélisation 3D",
                features: [
                  "Modélisation complète",
                  "Création à taille réelle",
                  "Module Layout",
                  "Projets professionnels"
                ]
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Autodesk Revit 2021",
                description: "CAO Architecture",
                features: [
                  "Interface et navigation 2D",
                  "Gestion des calques",
                  "Création de plans",
                  "Gestion des impressions"
                ]
              }
            ].map((logiciel, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                    {logiciel.icon}
                  </div>
                  <CardTitle>{logiciel.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{logiciel.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {logiciel.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button variant="outline">Voir les détails</Button>
                    <Button>Voir le programme</Button>
                  </div>
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
                title: "Cours adaptés", 
                description: "En particulier ou en groupe de 4 à 6 personnes" 
              },
              { 
                icon: <Monitor className="h-6 w-6" />, 
                title: "Multi-support", 
                description: "Plateforme accessible sur Mobile et Tablette" 
              },
              { 
                icon: <MessageCircle className="h-6 w-6" />, 
                title: "Support complet", 
                description: "Support pédagogique et technique via chat" 
              },
              { 
                icon: <Pencil className="h-6 w-6" />, 
                title: "Programme personnalisé", 
                description: "Adapté à votre niveau et vos objectifs" 
              },
              { 
                icon: <Award className="h-6 w-6" />, 
                title: "Certifications ICDL", 
                description: "CAO 3D, Edition d'image et PAO incluses" 
              },
              { 
                icon: <Target className="h-6 w-6" />, 
                title: "Apprentissage pratique", 
                description: "Projets concrets et créatifs" 
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

      {/* Certification Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <CardTitle>Certifications incluses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">CAO 3D (Autodesk / Sketchup)</p>
                      <p className="text-sm text-gray-600">Code formation RS5191</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">Edition d'image (Photoshop / Illustrator)</p>
                      <p className="text-sm text-gray-600">Code formation RS6561</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium">PAO (Indesign)</p>
                      <p className="text-sm text-gray-600">Code formation RS5190</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle>Les objectifs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Les objectifs personnalisés de votre formation seront établis en fonction de 
                  votre niveau et de vos besoins, à la suite d'un audit réalisé en début de parcours.
                </p>
                <Button className="w-full">Découvrir le programme</Button>
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