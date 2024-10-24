'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Laptop, ScrollText, Mail, Phone, MapPin, CheckCircle2, ArrowRight, Download } from "lucide-react"
import Link from 'next/link';
import { useState } from "react"
import { Search } from "lucide-react"

const formations = [
  // BUREAUTIQUE
  {
    title: "Word Initiation",
    category: "Bureautique",
    link: "/formations/bureautique#word-initiation",
    description: "Maîtrisez les fondamentaux de Word",
    certification: "ICDL-PCIE",
    reference: "RS6159",
    niveau: "Débutant",
    modules: ["Mise en page", "Tableaux", "Gestion des documents", "Insertion d'objets"]
  },
  {
    title: "Word Perfectionnement",
    category: "Bureautique",
    link: "/formations/bureautique#word-perfectionnement",
    description: "Devenez expert sur Word",
    certification: "ICDL-PCIE",
    reference: "RS6159",
    niveau: "Avancé",
    modules: ["Publipostage", "Documents longs", "Formulaires", "Automatisation"]
  },
  {
    title: "Excel Initiation",
    category: "Bureautique",
    link: "/formations/bureautique#excel-initiation",
    description: "Les bases essentielles d'Excel",
    certification: "ICDL-PCIE",
    reference: "RS6289",
    niveau: "Débutant",
    modules: ["Formules de base", "Mise en forme", "Graphiques simples", "Gestion des données"]
  },
  {
    title: "Excel Perfectionnement",
    category: "Bureautique",
    link: "/formations/bureautique#excel-perfectionnement",
    description: "Maîtrisez les fonctions avancées d'Excel",
    certification: "ICDL-PCIE",
    reference: "RS6289",
    niveau: "Avancé",
    modules: ["Tableaux croisés dynamiques", "Fonctions avancées", "Macros simples", "Base de données"]
  },
  {
    title: "Excel VBA",
    category: "Bureautique",
    link: "/formations/bureautique#excel-vba",
    description: "Programmation VBA pour Excel",
    certification: "ICDL-PCIE",
    reference: "RS6289",
    niveau: "Expert",
    modules: ["Bases de programmation", "Macros avancées", "Userforms", "Automatisation"]
  },
  {
    title: "PowerPoint Initiation",
    category: "Bureautique",
    link: "/formations/bureautique#powerpoint-initiation",
    description: "Créez vos premières présentations",
    certification: "ICDL-PCIE",
    reference: "RS6160",
    niveau: "Débutant",
    modules: ["Création de diapositives", "Animations simples", "Mise en forme", "Transitions"]
  },
  {
    title: "PowerPoint Perfectionnement",
    category: "Bureautique",
    link: "/formations/bureautique#powerpoint-perfectionnement",
    description: "Présentations professionnelles avancées",
    certification: "ICDL-PCIE",
    reference: "RS6160",
    niveau: "Avancé",
    modules: ["Animations avancées", "Masques", "Multimédia", "Interactivité"]
  },

  // DESIGN & PAO
  {
    title: "Photoshop Initiation",
    category: "Design",
    link: "/formations/design#photoshop-initiation",
    description: "Les fondamentaux de la retouche photo",
    certification: "ICDL-PCIE",
    reference: "RS6561",
    niveau: "Débutant",
    modules: ["Interface", "Calques", "Outils de base", "Retouches simples"]
  },
  {
    title: "Photoshop Perfectionnement",
    category: "Design",
    link: "/formations/design#photoshop-perfectionnement",
    description: "Maîtrisez les techniques avancées",
    certification: "ICDL-PCIE",
    reference: "RS6561",
    niveau: "Avancé",
    modules: ["Retouche avancée", "Photomontage", "Actions", "Automatisation"]
  },
  {
    title: "Illustrator Initiation",
    category: "Design",
    link: "/formations/design#illustrator-initiation",
    description: "Création graphique vectorielle",
    certification: "ICDL-PCIE",
    reference: "RS6561",
    niveau: "Débutant",
    modules: ["Outils de base", "Tracés", "Couleurs", "Formes"]
  },
  {
    title: "Illustrator Perfectionnement",
    category: "Design",
    link: "/formations/design#illustrator-perfectionnement",
    description: "Design vectoriel avancé",
    certification: "ICDL-PCIE",
    reference: "RS6561",
    niveau: "Avancé",
    modules: ["Techniques avancées", "Masques", "Symboles", "3D"]
  },
  {
    title: "InDesign Initiation",
    category: "Design",
    link: "/formations/design#indesign-initiation",
    description: "Mise en page professionnelle",
    certification: "ICDL-PCIE",
    reference: "RS5190",
    niveau: "Débutant",
    modules: ["Interface", "Texte", "Images", "Mise en page de base"]
  },
  {
    title: "InDesign Perfectionnement",
    category: "Design",
    link: "/formations/design#indesign-perfectionnement",
    description: "Édition avancée",
    certification: "ICDL-PCIE",
    reference: "RS5190",
    niveau: "Avancé",
    modules: ["Styles avancés", "Documents longs", "Interactivité", "Publication digitale"]
  },

  // LANGUES
  {
    title: "Anglais Débutant",
    category: "Langues",
    link: "/formations/langues#anglais-debutant",
    description: "Niveau A1-A2",
    certification: "LEVELTEL",
    reference: "RS6265",
    niveau: "Débutant",
    modules: ["Grammaire de base", "Vocabulaire courant", "Expressions usuelles", "Compréhension simple"]
  },
  {
    title: "Anglais Intermédiaire",
    category: "Langues",
    link: "/formations/langues#anglais-intermediaire",
    description: "Niveau B1-B2",
    certification: "LEVELTEL",
    reference: "RS6265",
    niveau: "Intermédiaire",
    modules: ["Grammaire avancée", "Communication professionnelle", "Compréhension courante", "Expression orale"]
  }
]

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const filteredFormations = formations.filter(formation =>
    formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    formation.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-2xl mx-auto px-4 mb-20">
      <div className="relative">
        <div className="relative flex items-center rounded-lg border bg-white shadow-sm">
          <Search className="absolute left-4 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une formation..."
            className="w-full py-4 pl-12 pr-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setIsOpen(true)
            }}
            onFocus={() => setIsOpen(true)}
          />
        </div>

        {isOpen && searchTerm && (
          <div className="absolute w-full mt-2 bg-white rounded-lg border shadow-lg z-50">
            {filteredFormations.length === 0 ? (
              <div className="p-4 text-gray-500">
                Aucune formation trouvée.
              </div>
            ) : (
              <div className="max-h-[300px] overflow-y-auto">
                {Array.from(new Set(filteredFormations.map(f => f.category))).map(category => (
                  <div key={category}>
                    <div className="px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-50">
                      {category}
                    </div>
                    {filteredFormations
                      .filter(formation => formation.category === category)
                      .map((formation) => (
                        <Link 
                          href={formation.link} 
                          key={formation.title}
                          className="block px-4 py-3 hover:bg-blue-50 cursor-pointer"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium">{formation.title}</div>
                          <div className="text-sm text-gray-500">{formation.category}</div>
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,#f0f8ff_12%,transparent_12.5%,transparent_87%,#f0f8ff_87.5%,#f0f8ff_100%)] bg-[length:20px_20px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm text-blue-600 shadow-md">
                <CheckCircle2 className="h-4 w-4 mr-2" /> Formation professionnelle certifiée
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Formez-vous aux métiers de demain avec 
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> Actiom</span>
              </h1>
              <p className="text-xl text-gray-600">
                Des formations innovantes et personnalisées pour développer vos compétences et accélérer votre carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-400 text-lg h-12 px-8">
                  Découvrir nos formations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="text-lg h-12 px-8">
                  <Download className="mr-2 h-5 w-5" />
                  Catalogue 2024
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 animate-pulse"></div>
              <img 
                src="https://cdn.midjourney.com/c108adfa-433d-49bc-a30f-1f91c46fbd94/0_0.png" 
                alt="Formation" 
                className="rounded-3xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
   
      <SearchBar />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "95%", label: "Taux de réussite" },
              { number: "500+", label: "Apprenants formés" },
              { number: "50+", label: "Formations" },
              { number: "100%", label: "Satisfaction client" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Domaines de Formation</h2>
            <p className="text-xl text-gray-600">Développez vos compétences avec nos programmes spécialisés</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Développement Personnel",
                description: "Leadership et communication",
                features: ["Gestion du stress", "Prise de parole", "Management d'équipe"]
              },
              {
                icon: <Laptop className="h-8 w-8" />,
                title: "Compétences Numériques",
                description: "Maîtrisez les outils digitaux",
                features: ["Suite Microsoft Office", "Outils collaboratifs", "Digital Marketing"]
              },
              {
                icon: <ScrollText className="h-8 w-8" />,
                title: "Formation Continue",
                description: "Évolution professionnelle",
                features: ["Certifications", "VAE", "Bilans de compétences"]
              }
            ].map((formation, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-white group-hover:from-blue-100 group-hover:to-blue-50 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-blue-600 shadow-lg group-hover:scale-110 transition-all duration-300">
                    {formation.icon}
                  </div>
                  <CardTitle className="mt-4">{formation.title}</CardTitle>
                  <p className="text-gray-600">{formation.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {formation.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-400">
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


{/* CPF Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 w-full">
        <h2 className="text-3xl font-bold text-center md:text-left">Faîtes financer votre formation</h2>
        <div className="space-y-4">
          <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
            Un <span className="font-semibold">C</span>ompte{" "}
            <span className="font-semibold">P</span>ersonnel de{" "}
            <span className="font-semibold">F</span>ormation est un organisme qui finance des formations.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed text-center md:text-left">
            Au cours de leur vie active, les salariés accumulent des droits au sein d'une
            cagnotte qu'ils sont libres d'utiliser pour une ou plusieurs formations.
          </p>
        </div>
        <div className="pt-4 flex justify-center md:justify-start">
          <Link href="/cpf">
            <Button className="bg-gradient-to-r from-blue-600 to-blue-400 w-full md:w-auto">
              En savoir plus
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center items-center w-full">
        <img
          src="https://actiomformation.fr/wp-content/uploads/2022/09/Logo-officiel-cpf.png"
          alt="Logo CPF"
          className="rounded-lg w-[200px] md:w-[300px] h-auto object-contain"
        />
      </div>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Contactez-nous</h2>
              <p className="text-xl text-gray-600">
                Notre équipe est à votre écoute pour vous accompagner dans votre projet de formation.
              </p>
              <div className="space-y-6">
                <Card className="border-none">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <p className="text-gray-600">01 23 45 67 89</p>
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
                      <p className="text-gray-600">contact@actiom.fr</p>
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
                      <p className="text-gray-600">123 rue de la Formation, Paris</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Demande d'information</CardTitle>
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
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 h-12 text-lg">
                    Envoyer le message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </div>
)
}