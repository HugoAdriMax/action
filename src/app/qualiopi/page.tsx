'use client';
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react"; // Choisir une icône qui symbolise la certification ou la qualité

export default function CertificationQualiopi() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Notre certification 
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Qualiopi</span>
            </h1>
            <p className="text-xl text-gray-600">
              Actiom Formation est certifié Qualiopi, garantissant des processus de formation respectant les standards de qualité requis pour vos projets de formation.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-none shadow-lg mb-8">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold">Certification Qualiopi</h2>
              </div>
              <div className="text-gray-600 space-y-4">
                <p>
                  La certification Qualiopi atteste de la qualité du processus que nous mettons en œuvre dans le développement des compétences. Elle garantit que nos formations répondent aux exigences du Référentiel National Qualité, permettant ainsi à nos clients de bénéficier d'un financement de leurs formations par des fonds publics ou mutualisés.
                </p>
                <p>
                  Chez Actiom Formation, nous sommes fiers de pouvoir proposer des formations professionnelles éligibles au financement grâce à notre certification. Cette certification est reconnue par les OPCO, Pôle Emploi et d'autres dispositifs de financement.
                </p>
              </div>
              <div className="mt-12 text-center">
                <img 
                  src="https://actiomformation.fr/wp-content/uploads/2024/01/FM2217991_Certificat-Qualiopi_ACTIOM_page-0001.jpg" 
                  alt="Certification Qualiopi"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Des questions sur notre certification Qualiopi ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous pour plus d'informations sur la certification Qualiopi et comment elle garantit la qualité de nos formations.
          </p>
        </div>
      </section>
    </div>
  );
}
