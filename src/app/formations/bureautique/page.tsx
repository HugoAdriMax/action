'use client';
import { Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  CheckCircle2, 
  Phone, 
  MonitorSmartphone, 
  Users, 
  FileSpreadsheet, 
  FileText, 
  Layout,
  Monitor, 
  MessageCircle, 
  Award,
  ArrowRight 
} from "lucide-react"

export default function BureautiqueFormation() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos formations en
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> bureautique</span>
            </h1>
            <p className="text-xl text-gray-600">
              Maîtrisez les outils bureautiques et le travail collaboratif pour accélérer et automatiser votre travail.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Excellence technologique</h2>
              <p className="text-gray-600 text-lg">
                Qu'il s'agisse de vous former sur les bases informatiques ou le pack office 
                (Word, Excel, PowerPoint), nous avons les clés pour vous faire progresser 
                de manière dynamique et intuitive dans votre apprentissage.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Formation adaptée aux débutants</span>
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
              <img 
                src="https://cdn.midjourney.com/074665fa-b6dc-4bd2-af5d-dac1baa4840c/0_0.png" 
                alt="Formation bureautique" 
                className="rounded-2xl shadow-xl"
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
                    <p>Compatible PC, Mac, tablette et smartphone</p>
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

      {/* Programmes Office */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Pack Office</h2>
            <p className="text-xl text-gray-600">Des formations complètes sur les outils Microsoft Office</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Word",
                description: "Certification ENI - RS6159",
                features: [
                  "27 Modules et 106 leçons",
                  "3 niveaux de formation",
                  "Mise en page évoluée",
                  "Publipostage et formulaires"
                ]
              },
              {
                icon: <FileSpreadsheet className="h-8 w-8" />,
                title: "Excel",
                description: "Certification ENI - RS6289",
                features: [
                  "123 leçons complètes",
                  "Fonctions avancées",
                  "Tableaux croisés dynamiques",
                  "Création de macros"
                ]
              },
              {
                icon: <Layout className="h-8 w-8" />,
                title: "PowerPoint",
                description: "Certification ENI - RS6160",
                features: [
                  "75 leçons pratiques",
                  "Création de présentations",
                  "Design professionnel",
                  "Animation et transition"
                ]
              }
            ].map((programme, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    {programme.icon}
                  </div>
                  <CardTitle>{programme.title}</CardTitle>
                  <p className="text-gray-600 mt-2">{programme.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {programme.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">
                    Voir le programme
                  </Button>
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
                icon: <MonitorSmartphone className="h-6 w-6" />, 
                title: "Multi-support", 
                description: "Plateforme accessible sur Mobile et Tablette" 
              },
              { 
                icon: <MessageCircle className="h-6 w-6" />, 
                title: "Support complet", 
                description: "Support pédagogique et technique via chat" 
              },
              { 
                icon: <CheckCircle2 className="h-6 w-6" />, 
                title: "Programme personnalisé", 
                description: "Adapté à votre niveau et vos objectifs" 
              },
              { 
                icon: <Award className="h-6 w-6" />, 
                title: "Certification incluse", 
                description: "Examen de certification ENI inclus" 
              },
              { 
                icon: <Monitor className="h-6 w-6" />, 
                title: "Formation à distance", 
                description: "Flexibilité totale dans votre apprentissage" 
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

      {/* Objectifs et Certification */}
      <section className="py-20 bg-white">
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
                <p className="text-gray-600 mb-4">
                  Votre programme de formation vous permettra de développer vos compétences 
                  bureautiques pour une utilisation professionnelle efficace.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Maîtrise des outils Microsoft Office</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Automatisation des tâches répétitives</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Création de documents professionnels</span>
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
                  À la suite de votre formation, vous effectuerez un test de certification 
                  ENI en ligne. L'examen est inclus dans votre formule et reconnu à 
                  l'échelle européenne.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Word - RS6159</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>Excel - RS6289</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-blue-600" />
                    <span>PowerPoint - RS6160</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
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