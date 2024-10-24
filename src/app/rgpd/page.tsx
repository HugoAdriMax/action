'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, UserCheck, Database, AlertCircle, FileText, Settings, Server } from "lucide-react"

export default function RGPD() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Protection des
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Données</span>
            </h1>
            <p className="text-xl text-gray-600">
              Règles relatives à la protection des personnes physiques à l'égard des données à caractère personnel de ACTIOM
            </p>
          </div>
        </div>
      </section>

      {/* RGPD Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          {[
            {
              title: "1. Contexte et cadre juridique",
              icon: <Shield className="h-6 w-6" />,
              content: `Le Règlement (EU) 2016/679 du Parlement Européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques à l'égard du traitement de données à caractère personnel et à la libre circulation de ces données, appelé le Règlement Général sur la Protection des Données (RGPD), fixe le cadre juridique applicable aux traitements de données à caractère personnel.<br/><br/>
              Dans ce cadre, nous présentons les modalités de respect de cette réglementation, conformément à la demande de cette réglementation. En effet, ACTIOM gère bien des données personnelles dans le cadre de son activité. Cette activité est principalement la mise en place de formations pour des entreprises.`
            },
            {
              title: "2. Les éléments relatifs à notre application de la réglementation",
              icon: <FileText className="h-6 w-6" />,
              content: `<strong>Les finalités des traitements :</strong><br/>
              – Recueillir des besoins de formation auprès de nos clients par téléphone<br/>
              – Accompagner nos clients pour les conseiller dans le choix des formations<br/>
              – Monter la demande de prise en charge et une convention de formation<br/>
              – Faire signer cette demande de prise en charge aux clients<br/>
              – Faire auditer téléphoniquement le client<br/>
              – Mettre en place la formation<br/>
              – Réaliser des enquêtes de satisfaction<br/><br/>
              <strong>Origine des données :</strong><br/>
              – Fiche RDV transmise par des partenaires<br/>
              – RDV téléphonique avec les clients<br/>
              – Conversation téléphonique<br/><br/>
              <strong>Typologie des données traitées :</strong><br/>
              Données d'identification et données financières si nécessaire.`
            },
            {
              title: "3. Principes généraux de collecte et traitement",
              icon: <Database className="h-6 w-6" />,
              content: `ACTIOM met tout en œuvre pour respecter la réglementation lors de la collecte et traitement des données personnelles aussi bien en interne, qu'en externe, avec nos partenaires et aussi bien au niveau informatique qu'organisationnel.`
            },
            {
              title: "4. Droits des personnes",
              icon: <UserCheck className="h-6 w-6" />,
              content: `Les clients et contacts disposent des droits suivants :<br/>
              – Consentement / Suppression du Consentement<br/>
              – Droit d'accès<br/>
              – Droit à la modification<br/>
              – Droit à l'oubli<br/>
              – Droit à la limitation des traitements<br/><br/>
              Pour exercer ces droits, contactez-nous à : contact@actiomformation.fr`
            },
            {
              title: "5. Sous-traitance",
              icon: <Settings className="h-6 w-6" />,
              content: `ACTIOM informe ses clients et contacts qu'elle pourra faire intervenir tout sous-traitant de son choix dans le cadre du traitement de leurs données à caractère personnel.`
            },
            {
              title: "6. Sécurité",
              icon: <Lock className="h-6 w-6" />,
              content: `Parmi nos mesures de sécurité figurent principalement :<br/>
              – Politique de sécurité des systèmes d'information<br/>
              – Gestion des identifications et habilitations<br/>
              – Mesures de sauvegarde et archivage<br/>
              – Mesures de reprises d'activité<br/>
              – Audits de sécurité`
            },
            {
              title: "7. Violation des données",
              icon: <AlertCircle className="h-6 w-6" />,
              content: `En cas de violation de données à caractère personnel, ACTIOM s'engage à en notifier à la CNIL dans les conditions prescrites par le RGPD.`
            },
            {
              title: "8. Registre des traitements et Analyse d'Impact",
              icon: <Server className="h-6 w-6" />,
              content: `ACTIOM, en tant que responsable du traitement, s'engage à tenir à jour un registre de toutes les activités de traitement effectuées.`
            }
          ].map((section, index) => (
            <Card key={index} className="border-none shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <div 
                  className="text-gray-600 space-y-4"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}