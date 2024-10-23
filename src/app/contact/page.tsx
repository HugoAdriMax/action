'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, ArrowRightCircle } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Contact Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Nous contacter
              </h1>
              <p className="text-xl text-gray-600">
                Nous vous accompagnons du lundi au samedi de 9h à 19h. Faites-vous rappeler par l’un de nos tuteurs en cliquant sur le bouton !
              </p>
              <div className="space-y-6">
                <Card className="border-none">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-gray-600">01 76 35 13 56</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">contact@actiomformation.fr</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-none">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Adresse</h3>
                      <p className="text-gray-600">67 Avenue Victor Hugo - 75016 PARIS</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Envoyer un message</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nom complet"
                    className="w-full p-4 rounded-lg border focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 rounded-lg border focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Votre message"
                    rows={4}
                    className="w-full p-4 rounded-lg border focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  />
                  <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg">
                    Envoyer
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
