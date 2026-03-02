export type Project = {
  year: string;
  title: string;
  location: string;
  tag: string;
  description: string;
  image: string;
};

export const PROJECTS: Project[] = [
  {
    year: "2025",
    title: "Salle de bain clés en main",
    location: "Metz",
    tag: "Salle de bain",
    description:
      "Rénovation intégrale avec douche à l'italienne, faïence grand format et meuble vasque sur mesure.",
    image:
      "/images/Realisations/carreleur-metz-salle-de-bain-carrelage-marbre.webp",
  },
  {
    year: "2026",
    title: "Véranda sur-mesure",
    location: "Montigny-lès-Metz",
    tag: "Intérieur",
    description:
      "Transformez votre intérieur avec une véranda moderne et chaleureuse, baignée de lumière naturelle.",
    image:
      "/images/Realisations/carrelage-veranda-effet-bois-metz-moselle.webp",
  },
  {
    year: "2023",
    title: "Piscine raffinée",
    location: "Woippy",
    tag: "Extérieur",
    description:
      "Sol moderne et élégant autour de la piscine pour un espace raffiné et convivial.",
    image: "/images/Realisations/carrelage-piscine-exterieure-moselle.webp",
  },
  {
    year: "2024",
    title: "Douche à l'italienne",
    location: "Marly",
    tag: "Salle de bain",
    description:
      "Douche à l'italienne avec grands carreaux foncés, double niche encastrée et colonne pluie.",
    image:
      "/images/Realisations/douche-italienne-carrelage-grand-format-moselle.webp",
  },
  {
    year: "2023",
    title: "Dalle sur plot",
    location: "Hagondange",
    tag: "Extérieur",
    description: "Dalle sur plot.",
    image: "/images/Realisations/terrasse-dalles-sur-plots-metz-moselle.webp",
  },
  {
    year: "2022",
    title: "Pierre naturelle",
    location: "Thionville",
    tag: "Intérieur",
    description: "Terrasse en pierre naturelle avec finition antidérapante.",
    image: "/images/Realisations/mur-pierre-naturelle-interieur-moselle.webp",
  },
];
