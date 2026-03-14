// ============================================================
// foto-butik - Editierbarer Content
// Alle Texte, Preise und Informationen zentral hier ändern
// ============================================================
import rahmenHeader03 from "@/assets/rahmen/header/rahmen_massanfertigungrahmen_kat_03.jpg";
import rahmen02 from "@/assets/rahmen/rahmen_massanfertigungrahmen_02.jpg";
import rahmen03 from "@/assets/rahmen/rahmen_massanfertigungrahmen_03.jpg";
import rahmen04 from "@/assets/rahmen/rahmen_massanfertigungrahmen_04.jpg";
import rahmen05 from "@/assets/rahmen/rahmen_massanfertigungrahmen_05.jpg";
import rahmen06 from "@/assets/rahmen/rahmen_massanfertigungrahmen_06.jpg";
import rahmen07 from "@/assets/rahmen/rahmen_massanfertigungrahmen_07.jpg";
import rahmen08 from "@/assets/rahmen/rahmen_massanfertigungrahmen_08.jpg";
import rahmen09 from "@/assets/rahmen/rahmen_massanfertigungrahmen_09.jpg";
import familie02 from "@/assets/kinder/portrait_familie_02.jpg";
import familie03 from "@/assets/kinder/portrait_familie_03.jpg";
import rahmenHeader02 from "@/assets/rahmen/header/rahmen_massanfertigungrahmen_kat_02.jpg";

export const studio = {
  name: "foto-butik",
  owner: "Alexander Schmid-Paetzold",
  tagline: "Ihr Fotostudio in Stuttgart-Möhringen",
  claim: "Bilder, die bleiben.",
  claimSub:
    "Passbilder, Bewerbungsfotos, Portraits & Einrahmungen nach Maß - seit Jahren vertraut in Stuttgart-Möhringen.",
  address: "Hechinger Straße 5, 70567 Stuttgart-Möhringen",
  phone: "0711 / 71 28 28",
  phoneHref: "tel:+4971171 2828",
  email: "kontakt@foto-butik.de",
  emailHref: "mailto:kontakt@foto-butik.de",
  openingHours: [
    { day: "Montag - Freitag", time: "9:00 - 18:00 Uhr" },
    { day: "Samstag", time: "9:00 - 14:00 Uhr" },
    { day: "Sonntag", time: "geschlossen" },
  ],
};

// ePassbild Zertifizierungs-Status (editierbar):
// "zertifiziert" | "beantragt" | "in_freigabe" | "geprueft"
export const ePassbildStatus: "zertifiziert" | "beantragt" | "in_freigabe" | "geprueft" = "geprueft";

export const ePassbildStatusLabels = {
  zertifiziert: { label: "Zertifiziertes Studio", color: "success" as const },
  beantragt: { label: "Zertifizierung beantragt", color: "warning" as const },
  in_freigabe: { label: "Freigabe in Bearbeitung", color: "warning" as const },
  geprueft: { label: "Geprüftes Fachstudio", color: "neutral" as const },
};

// ============================================================
// Preise
// ============================================================
export const prices = {
  passbilder: [
    {
      id: "epassbild",
      title: "ePassbild (QR-Code)",
      description: "Digitales Passbild mit QR-Code + 4 gedruckte Fotos nach aktueller biometrischer Norm",
      price: "-- €",
      features: [
        "QR-Code für digitale Behördeneinreichung",
        "4 gedruckte Passbilder inklusive",
        "Biometrisch nach aktueller EU-Norm",
        "Sofort zum Mitnehmen",
      ],
      featured: true,
    },
    {
      id: "sonderformat",
      title: "Passbilder Sondermaß",
      description: "Visafotos, Führerscheinfotos & internationale Sonderformate",
      price: "-- €",
      features: [
        "Alle internationalen Formate",
        "Sofortentwicklung",
        "Für alle Behörden & Länder",
        "Fachgerechte Beratung",
      ],
      featured: false,
    },
  ],

  bewerbung: [
    {
      id: "bewerbung-basis",
      title: "Bewerbungsfoto",
      description: "Professionelles Shooting mit persönlicher Beratung",
      price: "ab -- €",
      features: [
        "Ca. 25-30 Aufnahmen",
        "Persönliche Styling-Beratung",
        "Auswahl von 2 Motiven",
        "Feine digitale Retusche",
        "Digitale Bilddatei",
      ],
      featured: false,
    },
    {
      id: "bewerbung-premium",
      title: "Bewerbungsfoto Premium",
      description: "Komplettpaket mit Prints und erweiterten Optionen",
      price: "ab -- €",
      features: [
        "Ca. 25-30 Aufnahmen",
        "Persönliche Styling-Beratung",
        "Auswahl von 3 Motiven",
        "Feine digitale Retusche",
        "Digitale Bilddateien",
        "Hochwertige Fineart-Prints",
        "Verschiedene Print-Formate",
      ],
      featured: true,
    },
  ],

  portrait: [
    {
      id: "portrait-einzel",
      title: "Portrait Einzel",
      description: "Klassisches Einzel-Portrait im Studio",
      price: "ab -- €",
      features: [
        "Aufnahmepreis",
        "Ca. 20-30 Aufnahmen",
        "Bildauswahl gemeinsam",
        "Retusche inklusive",
        "Digitale Daten optional",
        "Prints optional",
      ],
      featured: false,
    },
    {
      id: "portrait-familie",
      title: "Familie & Kinder",
      description: "Familienshootings im Studio - entspannt und herzlich",
      price: "ab -- €",
      features: [
        "Aufnahmepreis",
        "Alle Familienmitglieder",
        "Verschiedene Konstellationen",
        "Retusche inklusive",
        "Digitale Daten optional",
        "Hochwertige Prints optional",
      ],
      featured: true,
    },
    {
      id: "portrait-schwanger",
      title: "Schwangerschaft",
      description: "Einfühlsame Schwangerschaftsfotos",
      price: "ab -- €",
      features: [
        "Entspannte Atmosphäre",
        "Verschiedene Posen & Stile",
        "Retusche inklusive",
        "Digitale Daten optional",
        "Großformatdruck optional",
      ],
      featured: false,
    },
  ],
};

// ============================================================
// Services Overview
// ============================================================
export const services = [
  {
    id: "passbilder",
    title: "Passbilder & ePassbild",
    subtitle: "Biometrisch nach aktueller Norm",
    description: "Biometrische Passbilder, Visafotos und das moderne ePassbild mit QR-Code - sofort zum Mitnehmen.",
    link: "/passbilder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    alt: "Professionelles Passbild",
  },
  {
    id: "bewerbungsfotos",
    title: "Bewerbungsfotos",
    subtitle: "Ihr erster Eindruck zählt",
    description: "Professionelle Bewerbungsfotos, die überzeugen - mit persönlicher Beratung und feiner Retusche.",
    link: "/bewerbungsfotos",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    alt: "Bewerbungsfoto Business Portrait",
  },
  {
    id: "portrait",
    title: "Portrait & Familie",
    subtitle: "Momente für die Ewigkeit",
    description: "Klassische Portraits, Familienfotos, Kinder und Schwangerschaftsfotos in Ihrem Stuttgarter Studio.",
    link: "/portrait-familie",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80&auto=format&fit=crop",
    alt: "Portrait Fotografie",
  },
  {
    id: "rahmen",
    title: "Rahmen & Einrahmung",
    subtitle: "Boutique-Werkstatt vor Ort",
    description: "Maßanfertigung, große Passepartout-Auswahl, UV-Schutzglas und Leinwandbespannung.",
    link: "/rahmen-einrahmung",
    image: "rahmenHeader03",
    alt: "Rahmen und Einrahmung",
  },
];

// ============================================================
// Testimonials
// ============================================================
export const testimonials = [
  {
    id: 1,
    name: "Maria K.",
    role: "Studentin, Stuttgart",
    text: "Für meinen Bewerbungszyklus hatte ich hier meine Fotos gemacht - absolut professionell, freundlich und das Ergebnis war überzeugend. Bekam direkt drei Rückmeldungen!",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas R.",
    role: "Ingenieur, Möhringen",
    text: "Passbilder sofort, biometrisch korrekt, freundliche Beratung. Ich bin immer wieder hier - seit Jahren mein Vertrauensstudio für die ganze Familie.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sabine L.",
    role: "Lehrerin, Stuttgart-Süd",
    text: "Das Familienportrait war ein Erlebnis. Herr Schmid-Paetzold hat es geschafft, dass sich unsere Kinder wohlfühlen. Die Bilder sind unbezahlbar schön.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kemal Y.",
    role: "Unternehmer, Stuttgart",
    text: "Einrahmung für unser Firmenlogo - Maßanfertigung, UV-Schutzglas, perfektes Passepartout. Schnell, sauber, stilvoll. Empfehle ich jedem weiter.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anna-Lena M.",
    role: "HR-Managerin, Stuttgart",
    text: "Das ePassbild mit QR-Code war unkompliziert und modern. Sofort einsatzbereit. Das Studio ist klein, aber der Service ist erstklassig!",
    rating: 5,
  },
];

// ============================================================
// Trust Items
// ============================================================
export const trustItems = [
  {
    id: 1,
    icon: "shield",
    title: "Biometrisch nach Norm",
    text: "Alle Passbilder entsprechen der aktuellen biometrischen Norm für Reisepass, Ausweis und internationale Behörden.",
  },
  {
    id: 2,
    icon: "clock",
    title: "Sofort zum Mitnehmen",
    text: "Entwicklung und Ausgabe direkt vor Ort - keine Wartezeit, keine Versandkosten.",
  },
  {
    id: 3,
    icon: "smartphone",
    title: "ePassbild mit QR-Code",
    text: "Modernes digitales Passbild mit QR-Code für die direkte Übermittlung an Behörden.",
  },
  {
    id: 4,
    icon: "star",
    title: "Jahrelange Erfahrung",
    text: "Vertrauensstudio in Stuttgart-Möhringen mit langjähriger Expertise und persönlicher Beratung.",
  },
  {
    id: 5,
    icon: "award",
    title: "Premium Qualität",
    text: "Professionelles Equipment, optimale Beleuchtung und sorgfältige Bearbeitung für beste Ergebnisse.",
  },
  {
    id: 6,
    icon: "map-pin",
    title: "Zentral in Möhringen",
    text: "Gut erreichbar in der Hechinger Straße - mit eigenem Parkplatz und ÖPNV-Anbindung.",
  },
];

// ============================================================
// Portfolio Carousel Images (Platzhalter - mit echten Fotos ersetzen)
// ============================================================
export const rahmenImages = [
  {
    id: 1,
    src: "rahmen02",
    alt: "Rahmen0",
    category: "Rahmen",
  },
  {
    id: 2,
    src: "rahmen03",
    alt: "Rahmen1",
    category: "Rahmen",
  },
  {
    id: 3,
    src: "rahmen04",
    alt: "Rahmen2",
    category: "Rahmen",
  },
  {
    id: 4,
    src: "rahmen05",
    alt: "Rahmen3",
    category: "Rahmen",
  },
  {
    id: 5,
    src: "rahmen06",
    alt: "Rahmen4",
    category: "Rahmen",
  },
  {
    id: 6,
    src: "rahmen07",
    alt: "Rahmen5",
    category: "Rahmen",
  },
  {
    id: 7,
    src: "rahmen08",
    alt: "Rahmen6",
    category: "Rahmen",
  },
  {
    id: 8,
    src: "rahmen09",
    alt: "Rahmen7",
    category: "Rahmen",
  },
];

export const portfolioImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop",
    alt: "Bewerbungsfoto Mann, professionell",
    category: "Bewerbung",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait Frau, klassisch",
    category: "Portrait",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop",
    alt: "Bewerbungsfoto Business",
    category: "Bewerbung",
  },
  {
    id: 4,
    src: "familie02",
    alt: "Familienfoto mit Kindern",
    category: "Familie",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=800&q=80&auto=format&fit=crop",
    alt: "Professionelles Portrait",
    category: "Portrait",
  },
  {
    id: 7,
    src: "familie03",
    alt: "Kinderfoto natürlich",
    category: "Kinderfoto",
  },
  {
    id: 8,
    src: "rahmenHeader02",
    alt: "Bilderrahmen Einrahmung",
    category: "Rahmen",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&auto=format&fit=crop",
    alt: "Business Portrait Mann",
    category: "Bewerbung",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80&auto=format&fit=crop",
    alt: "Portrait Frau modern",
    category: "Portrait",
  },
];

// ============================================================
// SEO Metadata pro Seite
// ============================================================
export const seoMeta = {
  home: {
    title: "foto-butik Stuttgart-Möhringen | Passbilder, Bewerbungsfotos & Portraits",
    description:
      "Ihr professionelles Fotostudio in Stuttgart-Möhringen. Biometrische Passbilder sofort, ePassbild QR-Code, Bewerbungsfotos, Portraits & Einrahmungen. ☎ 0711/71 28 28",
    keywords:
      "Fotostudio Stuttgart Möhringen, Passbilder Stuttgart, Bewerbungsfotos Stuttgart, Portraitfoto Stuttgart, ePassbild QR-Code, Einrahmung Stuttgart",
  },
  passbilder: {
    title: "Passbilder & ePassbild Stuttgart-Möhringen | foto-butik",
    description:
      "Biometrische Passbilder sofort zum Mitnehmen. ePassbild mit QR-Code, Visafotos & Sonderformate in Stuttgart-Möhringen. ☎ 0711/71 28 28",
    keywords: "Passbilder Stuttgart, biometrisches Passbild, ePassbild QR Stuttgart, Visafoto Stuttgart, Möhringen",
  },
  bewerbungsfotos: {
    title: "Bewerbungsfotos Stuttgart | foto-butik Möhringen",
    description:
      "Professionelle Bewerbungsfotos in Stuttgart-Möhringen. Persönliche Beratung, feine Retusche, sofort einsatzbereit. ☎ 0711/71 28 28",
    keywords: "Bewerbungsfotos Stuttgart, Bewerbungsfoto professionell, Business Portrait Stuttgart, Möhringen",
  },
  portrait: {
    title: "Portrait & Familienfoto Stuttgart | foto-butik Möhringen",
    description:
      "Klassische Portraits, Familienfotos & Kinderfotos in Stuttgart-Möhringen. Professionell, herzlich, unvergesslich. ☎ 0711/71 28 28",
    keywords: "Portrait Stuttgart, Familienfoto Stuttgart, Kinderfoto Stuttgart, Portraitfoto Möhringen",
  },
  rahmen: {
    title: "Bilderrahmen & Einrahmung Stuttgart | foto-butik Möhringen",
    description:
      "Maßgefertigte Bilderrahmen, Passepartouts, UV-Schutzglas & Leinwandbespannung in Stuttgart-Möhringen. ☎ 0711/71 28 28",
    keywords: "Einrahmung Stuttgart, Bilderrahmen Möhringen, Passepartout Stuttgart, UV-Schutzglas Stuttgart",
  },
  studio: {
    title: "Über uns | foto-butik Stuttgart-Möhringen",
    description:
      "Ihr Vertrauensstudio in Stuttgart-Möhringen. Alexander Schmid-Paetzold - professionelle Fotografie mit Leidenschaft.",
    keywords: "Fotostudio Stuttgart, Alexander Schmid-Paetzold, foto-butik Möhringen",
  },
  kontakt: {
    title: "Kontakt & Termin | foto-butik Stuttgart-Möhringen",
    description:
      "Termin vereinbaren, Anfahrt planen - foto-butik in der Hechinger Straße 5, 70567 Stuttgart-Möhringen. ☎ 0711/71 28 28",
    keywords: "Kontakt Fotostudio Stuttgart, Termin Passbilder Stuttgart, foto-butik Anfahrt",
  },
};
