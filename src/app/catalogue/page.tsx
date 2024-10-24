'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Laptop, 
  BookOpen, 
  Brain, 
  Heart, 
  Globe, 
  GraduationCap, 
  Compass, 
  Shield, 
  Building2,
  PenTool,
  Layout,
  Code,
  CheckCircle2,
  ArrowRight 
} from "lucide-react"

export default function Catalogue() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">6000H</span> de formation interactives
            </h1>
            <p className="text-xl text-gray-600">
              Actiom dispose d'un catalogue de plus de 6000 heures de modules e-learning opérationnels et interactifs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Toutes les catégories</h2>
            <p className="text-xl text-gray-600">
              Découvrez les contenus sur étagère développés par Actiom. Consultez-les dès maintenant parmi les catégories disponibles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Bureautique",
                description: "Des modules de formation pour tous les logiciels principaux de la suite Microsoft Office."
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Bases informatiques",
                description: "Des modules pour se familiariser avec les différents éléments de l'ordinateur, du système d'exploitation Windows et de la messagerie."
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Entraînement cognitif",
                description: "Des modules ludiques pour exercer votre mémoire, votre concentration, votre fluidité verbale, votre raisonnement logique."
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Santé",
                description: "Mettez toutes les chances de votre côté afin d'intégrer les écoles paramédicales."
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Langues",
                description: "Découvrez nos méthodes d'apprentissage des langues Anglaise, Espagnole et Allemande."
              },
              {
                icon: <GraduationCap className="h-8 w-8" />,
                title: "Savoirs de base",
                description: "Des parcours de formation adaptés à chacun sur les compétences de base en maths et en français."
              },
              {
                icon: <Compass className="h-8 w-8" />,
                title: "Orientation",
                description: "Outils de mise en adéquation des carrières avec les choix vocationnels."
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Prévention",
                description: "Apprendre les gestes qui sauvent, se former pour mieux sécuriser, connaître les risques professionnels…"
              },
              {
                icon: <Building2 className="h-8 w-8" />,
                title: "Tertiaire",
                description: "Des contenus au service du développement des compétences des collaborateurs."
              },
              {
                icon: <PenTool className="h-8 w-8" />,
                title: "CAO-DAO",
                description: "Toutes nos formations Autocad et Revit pour apprendre à créer vos plans 2D ou 3D."
              },
              {
                icon: <Layout className="h-8 w-8" />,
                title: "PAO",
                description: "Préparer des documents destinés à l'impression ou la publication en ligne (flyers, logos, sites)."
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Développement",
                description: "Apprenez les langages de développement les plus utilisés pour réaliser tout vos projets web."
              }
            ].map((category, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                  <Button className="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-400">
                    Découvrir
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Une pédagogie et une technologie reconnue</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-600">Nos contenus de formation en ligne sont innovants et reconnus pour leur grande qualité pédagogique.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-600">Notre technologie unique au monde garantit une simulation logicielle parfaite ne nécessitant aucune installation sur le poste de l'apprenant.</p>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                <p className="text-gray-600">L'apprenant est actif lors de toutes les phases d'apprentissage, leçons et exercices.</p>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="border-none">
                <CardHeader>
                  <CardTitle>Interopérabilité SCORM et AICC</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Toutes les productions d'Actiom respectent les normes <span className="font-semibold">SCORM, AICC et xAPI</span>.
                    Elles peuvent donc être intégrées à toute plateforme LMS du marché.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à commencer votre formation ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez notre catalogue complet et trouvez la formation qui vous correspond.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg px-8"
          >
            Télécharger le catalogue
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}