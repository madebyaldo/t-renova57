export type Service = {
  title: string;
  description: string;
  details: string[];
  icon: string;
  image: string;
};

export const SERVICES: Service[] = [
  {
    title: "Carrelage intérieur",
    description:
      "Cuisine, salon, entrée, couloir — nous posons tout type de carrelage intérieur avec précision. Grès cérame, faïence, grands formats et mosaïque.",
    details: [
      "Grès cérame, faïence, mosaïque",
      "Grands formats",
      "Pose droite, diagonale ou décalée",
      "Joints coordonnés et finitions soignées",
    ],
    icon: "interior",
    image: "/images/Hero/carrelage-sol-grand-format-cuisine-metz-moselle.webp",
  },
  {
    title: "Carrelage extérieur & terrasse",
    description:
      "Aménagement de terrasses, contours de piscine et allées extérieures. Pose sur plots ou collée, avec des matériaux résistants aux intempéries.",
    details: [
      "Pose sur plots ou collée",
      "Contours de piscine",
      "Allées et entrées extérieures",
      "Matériaux résistants au gel",
    ],
    icon: "exterior",
    image:
      "/images/Realisations/carrelage-veranda-effet-bois-metz-moselle.webp",
  },
  {
    title: "Rénovation salle de bain",
    description:
      "De la dépose à la finition : douche à l'italienne, baignoire, faïence murale, sol antidérapant. Un résultat clé en main, soigné et durable.",
    details: [
      "Douche à l'italienne",
      "Faïence murale et sol antidérapant",
      "Meuble vasque et accessoires",
      "Résultat clé en main",
    ],
    icon: "bathroom",
    image:
      "/images/Realisations/douche-italienne-carrelage-grand-format-moselle.webp",
  },
  {
    title: "Étanchéité & balcon",
    description:
      "Reprise d'étanchéité, ragréage et pose de carrelage sur balcon et loggia. Travaux conformes aux normes pour une durabilité garantie.",
    details: [
      "Reprise d'étanchéité complète",
      "Ragréage et mise à niveau",
      "Pose de carrelage antidérapant",
      "Conformité aux normes DTU",
    ],
    icon: "balcony",
    image: "/images/Realisations/terrasse-dalles-sur-plots-metz-moselle.webp",
  },
  {
    title: "Revêtement sols & murs",
    description:
      "Pose de revêtements variés : carrelage, pierre naturelle, plaquettes de parement. Intérieur comme extérieur, pour tous types de surfaces.",
    details: [
      "Pierre naturelle et travertin",
      "Plaquettes de parement",
      "Effet béton ciré, bois, marbre",
      "Sols et murs intérieurs/extérieurs",
    ],
    icon: "walls",
    image: "/images/Realisations/mur-pierre-naturelle-interieur-moselle.webp",
  },
  {
    title: "Conseil & accompagnement",
    description:
      "Aide au choix des matériaux, prise de mesures, estimation précise. Nous vous guidons de la conception à la réalisation de votre projet.",
    details: [
      "Visite et prise de mesures sur place",
      "Aide au choix des matériaux",
      "Devis détaillé et transparent",
      "Suivi de chantier personnalisé",
    ],
    icon: "consult",
    image:
      "/images/Realisations/carreleur-metz-salle-de-bain-carrelage-marbre.webp",
  },
];
