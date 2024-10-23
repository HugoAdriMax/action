'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Phone, Book, Globe, Users, Monitor, MessageCircle, Award, ArrowRight, Link2 } from "lucide-react"
import Link from 'next/link';

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
              Vous souhaitez partir à l'étranger ? Nous proposons différentes formations en anglais, espagnol, allemand, italien et français.
            </p>
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
                Grâce à nos formations en langues, ACTIOM vous permet de renforcer vos capacités pour atteindre le niveau :
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Débutant (A1-A2)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Intermédiaire (B1-B2)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span>Avancé (C1-C2)</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.midjourney.com/9e918527-4ae0-4d7b-a338-e1544591d9c6/0_0.png" 
                alt="Formation en langues" 
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

{/* Langues proposées */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold mb-4">Nos programmes de langue</h2>
      <p className="text-xl text-gray-600">Découvrez nos formations par langue</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Anglais",
          description: "Formation certifiante LEVELTEL (RS6265)",
          features: ["Modules interactifs", "Immersion audio", "Usage quotidien"],
          link: "https://actiomformation.fr/wp-content/uploads/2024/04/Certification-Programme-de-formation-anglais-A1-C2-4-1-1.pdf"
        },
        {
          title: "Français",
          description: "Reflex'Français Grammaire et Vocabulaire",
          features: ["Approche innovante", "Mémorisation optimisée", "Progression rapide"],
          link: "https://actiomformation.fr/wp-content/uploads/2024/04/certification-programe-francais-A1-C2.pdf"
        },
        {
          title: "Allemand",
          description: "Reflex'Deutsch Grammatik et Wortschatz",
          features: ["Conforme au CECR", "20 leçons interactives", "60+ règles de grammaire"],
          link: "https://actiomformation.fr/wp-content/uploads/2024/04/certification-programe-allemand-A1-C2.pdf"
        },
        {
          title: "Espagnol",
          description: "Reflex'Español méthode interactive",
          features: ["Modules thématiques", "Grammaire et vocabulaire", "Compréhension écrite et orale"],
          link: "https://actiomformation.fr/wp-content/uploads/2024/04/certification-programme-espagnol-A1-C2.pdf"
        }
      ].map((langue, index) => (
        <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
          <CardHeader>
            <CardTitle>{langue.title}</CardTitle>
            <p className="text-gray-600 mt-2">{langue.description}</p>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {langue.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link href={langue.link}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400">
                  Voir le programme
                </Button>
              </Link>
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
              { icon: <Users className="h-6 w-6" />, title: "Cours adaptés", description: "En particulier ou en groupe de 4 à 6 personnes" },
              { icon: <Monitor className="h-6 w-6" />, title: "Multi-support", description: "Plateforme accessible sur Mobile et Tablette" },
              { icon: <MessageCircle className="h-6 w-6" />, title: "Support complet", description: "Support pédagogique et technique via chat" },
              { icon: <Book className="h-6 w-6" />, title: "Programme personnalisé", description: "Adapté à votre niveau et vos objectifs" },
              { icon: <Award className="h-6 w-6" />, title: "Certification incluse", description: "Examen de certification reconnu" },
              { icon: <Globe className="h-6 w-6" />, title: "Formation à distance", description: "Flexibilité totale dans votre apprentissage" }
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre formation ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Faites financer votre formation grâce à votre CPF ou contactez-nous pour plus d'informations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
              Je m'inscris
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
            <Button variant="outline" className="text-lg px-8">
              <Phone className="mr-2 h-5 w-5" />
              Me faire rappeler
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

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
      </Button>
    </div>
    <div className="relative">
      <img 
        src="/api/placeholder/600/400" 
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
  <Button 
    size="lg" 
    className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg h-12 px-8"
  >
    <Phone className="mr-2 h-5 w-5" />
    Me faire rappeler
  </Button>
</div>
</section>
