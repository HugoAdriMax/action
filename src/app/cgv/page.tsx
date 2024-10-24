'use client';

import { Card, CardContent } from "@/components/ui/card"

export default function CGU() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Conditions Générales
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"> d'Utilisation</span>
            </h1>
          </div>
        </div>
      </section>

      {/* CGU Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 space-y-8">
              {/* Définitions */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-600">Définitions</h2>
                <p className="text-gray-600">
                  <span className="font-semibold">Client :</span> co-contractant de ACTIOM<br />
                  <span className="font-semibold">Formation intra-entreprise :</span> Formation réalisée sur mesure pour le compte d'un Client réalisée dans les locaux du Client ou dans des locaux mis à la disposition par le Client ou par ACTIOM.
                </p>
              </div>

              {/* Sections */}
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold text-blue-600">{section.title}</h2>
                  <div className="text-gray-600 space-y-4" dangerouslySetInnerHTML={{ __html: section.content }} />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

const sections = [
    {
      title: "Définitions",
      content: `
        <strong>Client :</strong> co-contractant de ACTIOM<br/><br/>
        <strong>Formation intra-entreprise :</strong> Formation réalisée sur mesure pour le compte d'un Client réalisée dans les locaux du Client ou dans des locaux mis à la disposition par le Client ou par ACTIOM.`
    },
    {
      title: "Objet et champ d'application",
      content: `Toute commande de formation implique l'acceptation sans réserve par le Client et son adhésion pleine et entière aux présentes conditions générales de vente qui prévalent sur tout autre document du Client, et notamment sur toutes conditions générales d'achat.`
    },
    {
      title: "Documents contractuels",
      content: `ACTIOM fait parvenir au Client, une convention de formation professionnelle continue établie selon les articles L6353-1 et L6353-2 du Code du travail. Le Client s'engage à retourner dans les plus brefs délais à ACTIOM un exemplaire signé et portant son cachet commercial.<br/><br/>Une attestation de présence peut être adressée au Client sur demande.`
    },
    {
      title: "Formations inter-entreprise",
      content: `<strong>Conditions financières :</strong><br/>
      L'acceptation de ACTIOM étant conditionnée par le règlement intégral de la facture, ACTIOM se réserve expressément le droit de disposer librement des places retenues par le Client, tant que les frais d'inscription n'auront pas été couverts dans les conditions prévues ci- dessous.<br/><br/>
      Les factures sont émises en fin de formation.<br/><br/>
      <strong>Ouverture d'une session de formation :</strong> ACTIOM se réserve la possibilité d'ajourner une session de formation et ce sans indemnités, au plus tard une semaine avant la date prévue, pour des raisons pédagogiques.`
    },
    {
      title: "Formations intra-entreprise",
      content: `<strong>Conditions financières :</strong><br/> 
      Une proposition commerciale et financière sera préalablement établie par ACTIOM.<br/><br/>
      Le prix de la formation est dû à réception des différentes factures émises au fur et à mesure de l'avancement des formations.<br/><br/>
      En cas de non-paiement intégral d'une facture venue à échéance, après mise en demeure restée sans effet dans les 5 jours ouvrables, ACTIOM se réserve la faculté de suspendre toute formation en cours et /ou à venir.`
    },
    {
      title: "Remplacement d'un participant",
      content: `ACTIOM offre au Client la possibilité de remplacer un participant sans facturation supplémentaire jusqu'à l'ouverture de la session de formation concernée, Toute demande de remplacement devra être adressée par écrit.`
    },
    {
      title: "Conditions d'annulation des formations par le client",
      content: `Toute annulation par le Client doit être communiquée par écrit.<br/><br/>
      <strong>Pour les formations intra-entreprises :</strong><br/>
      – Pour toute annulation communiquée par le Client à moins de 21 jours calendaires et au moins 8 jours calendaires avant la session de formation, 50% du montant de la formation sera facturée par ACTIOM à ce dernier.<br/><br/>
      – Pour toute annulation communiquée par le Client à moins de 8 jours calendaires avant la session de formation, 100% du montant de la formation sera facturée par ACTIOM à ce dernier.`
    },
    {
      title: "Dématérialisation des supports",
      content: `Dans le cadre d'un engagement de ACTIOM pour l'environnement, les supports fournis pour les sessions de formation sont par défaut, des supports dématérialisés. Des supports papiers peuvent être prévus sur demande 15 jours avant le démarrage de la session.`
    },
    {
      title: "Prix et règlements",
      content: `Tous nos prix sont indiqués en euros et hors taxes. Ils sont à majorer de la TVA au taux en vigueur. Toute formation commencée est due en entier.<br/><br/>
      Les factures sont payables en euros, à 30 jours date de facture, sans escompte et à l'ordre de ACTIOM. Toute somme non payée à l'échéance donnera lieu au paiement par le Client de pénalités de retard au taux d'intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus récente majoré de 10 points de pourcentage.<br/><br/>
      Ces pénalités sont exigibles de plein droit, dès réception de l'avis informant le Client qu'elles ont été portées à son débit.<br/><br/>
      Outre les pénalités constatées en cas de retard de paiement, le Client sera redevable d'une indemnité forfaitaire de 40€ pour frais de recouvrement conformément aux articles L441-6 c. com. et D. 441-5 c. com.<br/><br/>
      ACTIOM se réserve néanmoins le droit de réclamer une indemnisation complémentaire, sur justification, lorsque les frais réellement exposés sont supérieurs à ce montant.`
    },
    {
      title: "Règlement par un OPCO",
      content: `Si le Client souhaite que le règlement soit émis par l'OPCO dont il dépend, il lui appartient :<br/>
      – de faire une demande de prise en charge avant le début de la formation et de s'assurer de la bonne fin de cette demande ;<br/>
      – de l'indiquer explicitement sur son bulletin d'inscription ou sur son bon de commande ;<br/>
      – de s'assurer de la bonne fin du paiement par l'OPCO qu'il aura désigné.<br/><br/>
      Si l'OPCO ne prend en charge que partiellement le coût de la formation, le reliquat sera facturé au Client.<br/><br/>
      Si ACTIOM n'a pas reçu la prise en charge de l'OPCO au 1er jour de la formation, le Client sera facturé de l'intégralité du coût du stage.<br/><br/>
      En cas de non-paiement par l'OPCO, pour quelque motif que ce soit, le Client sera redevable de l'intégralité du coût de la formation et sera facturé du montant correspondant.`
    },
    {
      title: "Refus de commande",
      content: `Dans le cas où un Client passerait une commande à ACTIOM, sans avoir procédé au paiement de la (des) commande(s) précédente(s), ACTIOM pourra refuser d'honorer la commande et de délivrer les formations concernées, sans que le Client puisse prétendre à une quelconque indemnité, pour quelque raison que ce soit.`
    },
    {
      title: "Informatique et libertés",
      content: `Le Client est informé que les informations à caractère personnel qui sont communiquées à ACTIOM en application et dans l'exécution des commandes et/ou ventes pourront être communiquées aux partenaires contractuels de ACTIOM pour les besoins desdites commandes.<br/><br/>
      Conformément à la loi n°78-17 du 6 janvier 1978, dite Loi Informatique et Libertés, mise à jour par la loi du 6 août 2004, le Client dispose d'un droit d'accès, de rectification et d'opposition aux données personnelles le concernant. Ce droit est exerçable en faisant une demande par e-mail ou par courrier adressé à ACTIOM.`
    },
    {
      title: "Propriété intellectuelle",
      content: `Les droits de reproduction, d'utilisation, de diffusion, d'adaptation, de modification, d'exploitation des supports de formation restent la propriété exclusive de ACTIOM et ne peuvent donc pas être cédés au Client.<br/><br/>
      Sous réserve du complet paiement du prix de la session de formation, ACTIOM pourra céder au Client les droits de reproduction, d'utilisation, de diffusion, d'adaptation, de modification et d'exploitation des supports de formation, pour un usage exclusivement interne et dans des conditions devant être définies entre les parties.`
    },
    {
      title: "Responsabilité",
      content: `ACTIOM pourra être tenu responsable de tout dommage direct subi par le Client et résultant de l'exécution des actions de formation.<br/><br/>
      L'indemnité due au Client, en réparation de son préjudice, ne pourra dépasser le montant correspondant aux sommes versées par le Client à ACTIOM au titre de l'année civile pendant laquelle le dommage a eu lieu.`
    },
    {
      title: "Confidentialité",
      content: `Toutes informations (hors celles accessibles au public) dont ACTIOM ou le Client aura eu connaissance ou qui auront été communiquées par l'autre partie ou par un client un tiers, antérieurement ou durant l'exécution du contrat, sont strictement confidentielles et chacune des parties s'interdit de les divulguer.<br/><br/>
      Pour les besoins de l'exécution des prestations, chacune des parties n'est autorisée à communiquer les informations susvisées qu'à ses préposés et/ou éventuels sous-traitants autorisés ; chacune des parties se porte fort du respect de cette obligation par ses préposés et/ou éventuels sous-traitants.<br/><br/>
      Chacune des parties s'engage à restituer (ou détruire, au choix de l'autre partie) lesdites informations ainsi que leur copie, dans les 5 jours ouvrés après le terme ou la résiliation du contrat ou du bon de commande, sur simple demande de l'autre partie. Les Parties seront liées par la présente obligation de confidentialité pendant une durée de deux ans à compter de la cessation de leurs relations contractuelles.`
    },
    {
      title: "Communication",
      content: `Le Client autorise expressément ACTIOM et ses filiales à mentionner son nom, son logo et à faire mention à titre de références de la souscription à une commande et de toute opération découlant de son application dans l'ensemble de leurs documents commerciaux.`
    },
    {
      title: "Renonciation",
      content: `Le fait pour ACTIOM de ne pas se prévaloir à un moment donné de l'une quelconque des clauses des présentes, ne peut valoir renonciation à se prévaloir ultérieurement de ces mêmes clauses.`
    },
    {
      title: "Loi applicable",
      content: `Les Conditions Générales et tous les rapports entre ACTIOM et ses Clients relèvent de la Loi française.`
    },
    {
      title: "Attribution de compétences",
      content: `Tous litiges qui ne pourraient être réglés à l'amiable seront de la COMPETENCE EXCLUSIVE DU TRIBUNAL DE COMMERCE DE PARIS quel que soit le siège ou la résidence du Client, nonobstant pluralité de défendeurs ou appel en garantie.<br/><br/>
      Cette clause attributive de compétence ne s'appliquera pas au cas de litige avec un Client non professionnel pour lequel les règles légales de compétence matérielle et géographique s'appliqueront. La présente clause est stipulée dans l'intérêt de la société ACTIOM qui se réserve le droit d'y renoncer si bon lui semble.`
    }
  ]