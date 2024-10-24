'use client';
import { Button } from "@/components/ui/button"

export default function CertificationQualiopi() {
  return (
    <div className="min-h-screen bg-white">
      {/* Certification Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Titre de la section */}
          <h2 className="text-3xl font-bold mb-6">Certification Qualiopi</h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8">
            Actiom Formation a obtenu la certification Qualiopi, gage de qualité pour toutes nos formations professionnelles. Cette certification garantit que nos processus de formation respectent les exigences du référentiel national de qualité. 
          </p>

          {/* Image de la certification */}
          <div className="max-w-md mx-auto mb-8">
            <img 
              src="https://actiomformation.fr/wp-content/uploads/2024/01/FM2217991_Certificat-Qualiopi_ACTIOM_page-0001.jpg"  
              alt="Certification Qualiopi - Actiom Formation"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Call to Action */}
          <Button className="h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8">
            En savoir plus sur la certification
          </Button>
        </div>
      </section>
    </div>
  );
}
