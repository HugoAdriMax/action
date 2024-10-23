'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, Award, Shield, Users, CheckCircle2, ArrowRight, BookOpen, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Des compétences
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> améliorées</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              De la prise de contact à la finalisation de vos projets, Actiom vous accompagne à chaque étape de vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Qui sommes-nous Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qui sommes-nous ?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Fort de notre expérience dans le domaine de la formation, l'équipe d'ACTIOM a su s'entourer des meilleurs pour concevoir son programme de formation et constituer une équipe de partenaires solides qui vous permettent de trouver le domaine qui va vous permettre de progresser.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.midjourney.com/2c7aa686-1e41-4ab6-9d46-a15b9dd1d1c8/0_2.png" 
                alt="Équipe Actiom" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Engagements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos engagements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Écoute personnalisée",
                description: "Établir un parcours de formation cohérent à vos attentes et à votre niveau."
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "Flexibilité",
                description: "Adapter le déroulement de la formation à votre emploi du temps avec des cours disponibles 7/7j."
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Pratique optimisée",
                description: "Privilégier des exercices pratiques pour optimiser l'acquisition des connaissances."
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Certifications reconnues",
                description: "S'entourer de partenaires de qualité pour proposer les meilleures certifications."
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: "Amélioration continue",
                description: "Contrôler la qualité de nos formations dans une démarche d'amélioration continue."
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Accompagnement",
                description: "Rester à votre écoute tout au long de votre parcours de formation."
              }
            ].map((engagement, index) => (
              <Card key={index} className="border-none hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      {engagement.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{engagement.title}</h3>
                      <p className="text-gray-600">{engagement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Charte de déontologie Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Card className="border-none shadow-xl bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Charte de déontologie</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center font-medium text-gray-700">
                DANS LE CADRE DE LA VENTE DE PRESTATIONS ÉLIGIBLES AU COMPTE PERSONNEL DE FORMATION (CPF), ACTIOM S'ENGAGE À RESPECTER LA CHARTE DE DÉONTOLOGIE ET À HONORER LES ENGAGEMENTS SUIVANTS :
              </p>
              <div className="space-y-4">
                {[
                  "Je suis titulaire de la certification Qualiopi comme condition préalable à la promotion et la vente de prestations éligibles au CPF.",
                  "Je garantis la qualité des formations certifiantes et l'accès aux certifications.",
                  "Je présente mon offre avec loyauté et transparence.",
                  "Je m'interdis toute pratique agressive ou trompeuse."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Personnalisation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Personnaliser pour mieux avancer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Audit de préformation",
                description: "Organisez votre cursus selon vos besoins. Votre formateur reste à l'écoute pour adapter le programme."
              },
              {
                title: "Cours particuliers",
                description: "Bénéficiez d'un apprentissage plus efficace et d'une plus grande flexibilité horaire."
              },
              {
                title: "Certification",
                description: "Repartez mieux armé sur le marché du travail pour affronter ses grandes évolutions."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Des questions sur nos formations ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Nous vous accompagnons du lundi au samedi au <span className="font-semibold">01 76 35 13 56</span>
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
    </div>
  )
}