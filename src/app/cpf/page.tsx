'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Phone, ArrowRight, CreditCard, Users, FileCheck } from "lucide-react"
import Link from 'next/link';


export default function CPFPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Compte Personnel de
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Formation</span>
            </h1>
          </div>
        </div>
      </section>

{/* Qu'est-ce que le CPF Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Qu'est-ce que le CPF ?</h2>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Un Compte Personnel de Formation est un organisme qui finance des formations.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Au cours de leur vie active, les salariés accumulent des droits au sein d'une 
            cagnotte qu'ils sont libres d'utiliser pour une ou plusieurs formations.
          </p>
        </div>
      </div>
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
        <iframe 
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube-nocookie.com/embed/2sT9qqxRWIQ?si=hhfFHOJJvusBmQzI" 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </div>
  </div>
</section>

      {/* Éligibilité Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Êtes-vous éligible au CPF ?</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <p className="text-gray-600 text-lg leading-relaxed">
                  Un compte formation professionnelle profite à tous dès l'entrée en activité 
                  (à partir de 16 ans), même en période de chômage, jusqu'au départ à la retraite.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Le CPF peut être utilisé pour suivre une formation certifiante même si le salarié 
                  est au chômage. Si vous souhaitez connaître l'état de votre compte formation, 
                  merci de vous connecter sur <span className="font-semibold">moncompteformation.gouv.fr</span>.
                </p>
                <div className="text-center pt-4">
                <Link href="https://www.moncompteformation.gouv.fr/espace-public/salarie-de-droit-prive">
                  <Button className="bg-gradient-to-r from-blue-600 to-blue-400">
                    En savoir plus sur le CPF
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comment utiliser Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Comment utiliser mes droits CPF ?</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 text-lg mb-6">
                  Votre identité est vérifiée lorsque vous accédez et activez un espace CPF pour la première fois.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-gray-600">Pour cela, munissez vous de : votre numéro de sécurité sociale, 
                    votre civilité, votre prénom, nom et date de naissance.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-gray-600">Ensuite, vous devrez créer un espace avec votre adresse e-mail 
                    et créer un mot de passe.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mt-1" />
                    <p className="text-gray-600">Après avoir créé votre espace, vous recevrez un email vous 
                    demandant d'activer votre compte personnel de formation en cliquant sur le lien approprié. 
                    Vous avez 15 jours pour activer le lien. Au delà, il ne sera plus valide.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-50">
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
    </div>
  )
}