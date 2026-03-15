export interface Offer {
  name: string;
  subtitle: string;
  badge?: string;
  priceEngaged: string;
  priceFree: string;
  features: string[];
  description: string;
}

export const socialOffers: Offer[] = [
  {
    name: "Starter",
    subtitle: "Stratégie & création à distance",
    priceEngaged: "210 € / mois",
    priceFree: "230 € / mois sans engagement",
    features: [
      "Audit de votre communication",
      "4 concepts adaptés à votre activité",
      "4 scripts prêts à tourner",
      "Plan d'action simple pour le mois",
      "Montage à partir de vos rushs",
    ],
    description:
      "Pour les entreprises qui veulent savoir quoi publier, comment le dire, et comment mieux se positionner sur les réseaux sociaux.",
  },
  {
    name: "Essentiel",
    subtitle: "Création de contenu",
    badge: "Recommandé",
    priceEngaged: "680 € / mois",
    priceFree: "800 € / mois sans engagement",
    features: [
      "Tout ce qui est inclus dans l'offre Starter",
      "Tournage avec vous sur place",
      "4 vidéos prêtes à publier par mois",
      "Publication ou aide à la publication",
      "Suivi éditorial",
    ],
    description:
      "Pour les entreprises qui veulent publier régulièrement et rendre leur activité plus visible.",
  },
  {
    name: "Boost",
    subtitle: "Accompagnement éditorial",
    priceEngaged: "950 € / mois",
    priceFree: "1100 € / mois sans engagement",
    features: [
      "Tout ce qui est inclus dans l'offre Essentiel",
      "8 vidéos prêtes à publier par mois",
      "Suivi des contenus qui fonctionnent",
      "Ajustement des concepts",
      "Création de stories pour animer vos réseaux",
    ],
    description:
      "Pour les entreprises qui veulent un accompagnement plus complet dans la durée, au-delà de la simple production de contenu.",
  },
];

export const linkedinOffers: Offer[] = [
  {
    name: "Starter",
    subtitle: "Stratégie & positionnement à distance",
    priceEngaged: "210 € / mois",
    priceFree: "230 € / mois sans engagement",
    features: [
      "Audit de votre profil LinkedIn",
      "Optimisation de votre positionnement",
      "2 angles de contenus adaptés à votre activité",
      "4 trames de posts prêtes à publier",
      "Méthode simple pour mieux structurer vos posts",
    ],
    description:
      "Pour les entrepreneurs et dirigeants qui veulent savoir quoi publier, comment se positionner et mieux prendre la parole sur LinkedIn.",
  },
  {
    name: "Essentiel",
    subtitle: "Création de contenu LinkedIn",
    badge: "Recommandé",
    priceEngaged: "680 € / mois",
    priceFree: "800 € / mois sans engagement",
    features: [
      "Tout ce qui est inclus dans l'offre Starter",
      "Calendrier éditorial du mois",
      "4 contenus LinkedIn rédigés",
      "4 accroches fortes",
      "1 carrousel ou visuel simple",
      "Aide à la publication",
    ],
    description:
      "Pour les entreprises et indépendants qui veulent publier régulièrement sur LinkedIn et développer leur visibilité.",
  },
  {
    name: "Boost",
    subtitle: "Accompagnement éditorial LinkedIn",
    priceEngaged: "950 € / mois",
    priceFree: "1100 € / mois sans engagement",
    features: [
      "Tout ce qui est inclus dans l'offre Essentiel",
      "8 contenus LinkedIn rédigés par mois",
      "2 carrousels ou visuels simples",
      "Ajustement des angles et du positionnement",
      "Suivi des contenus qui fonctionnent",
      "Aide à la publication",
    ],
    description:
      "Pour les dirigeants et entrepreneurs qui veulent une présence plus forte, plus régulière et mieux structurée sur LinkedIn.",
  },
];
