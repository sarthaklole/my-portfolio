export const DIMENSIONS = {
  "earth-8086": {
    id: "earth-8086",
    name: "Earth-8086",
    hero: "Spider-Sarthak",
    tagline: "Silicon & Steel Maestro",
    badgeColor: "#FFC93C",
    accentColor: "#E8352B",
    highlightColor: "#00F0FF",
  },
  "earth-1610": {
    id: "earth-1610",
    name: "Earth-1610",
    hero: "Miles Morales",
    tagline: "Brooklyn's One and Only",
    badgeColor: "#E8352B",
    accentColor: "#2F5FFF",
    highlightColor: "#FFC93C",
  },
  "earth-65": {
    id: "earth-65",
    name: "Earth-65",
    hero: "Spider-Gwen",
    tagline: "Ghost-Spider Melody",
    badgeColor: "#FF4081",
    accentColor: "#00E5FF",
    highlightColor: "#E040FB",
  },
  "earth-928": {
    id: "earth-928",
    name: "Earth-928",
    hero: "Spider-Man 2099",
    tagline: "Nueva York Vanguard",
    badgeColor: "#FF0D42",
    accentColor: "#00C8FF",
    highlightColor: "#FF9100",
  },
};

export const NAV = [
  { id: "origin", label: "01 Origin" },
  { id: "powers", label: "02 Powers" },
  { id: "missions", label: "03 Missions" },
  { id: "feats", label: "04 Feats" },
  { id: "contact", label: "05 Contact" },
];

export const SKILLS = [
  {
    group: "Core Languages",
    level: "Lv. 95 Master",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    group: "Backend Engine",
    level: "Lv. 88 Advanced",
    items: ["Django", "REST APIs", "SQL"],
  },
  {
    group: "Frontend Web-Slinging",
    level: "Lv. 92 Expert",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    group: "Gadgets & Arsenal",
    level: "Lv. 90 Utility",
    items: ["Git", "GitHub", "Vite", "VS Code", "Terminal"],
  },
];

export const PROJECTS = [
  {
    issue: "ISSUE #01",
    price: "$0.75",
    date: "AUG 2024",
    title: "Civil Construction Inventory System",
    badge: "IJIRCCE PUBLISHED",
    body:
      "A high-impact inventory tracking & management platform built for heavy civil engineering projects. Engineered to eliminate on-site material chaos and paperwork delays. Research published in the International Journal of Innovative Research in Computer and Communication Engineering (IJIRCCE).",
    tags: ["Research Paper", "Full-Stack", "Django", "Database"],
    link: null,
    barcode: "||| | |||| | | |||||",
  },
  {
    issue: "ISSUE #02",
    price: "$0.75",
    date: "OCT 2024",
    title: "Amazon Super-Storefront Clone",
    badge: "FRONTEND REPLICA",
    body:
      "A pixel-accurate, ultra-responsive e-commerce storefront replicating Amazon's modern catalog grids, navigation architecture, and smooth interactive product flows built from the ground up.",
    tags: ["HTML5", "CSS3", "UI/UX", "Responsive"],
    link: "https://github.com",
    barcode: "|||| | | ||| || ||||",
  },
];

export const FEATS = [
  {
    title: "National Record Holder",
    badge: "NATIONAL RECORD",
    category: "Mardani Khel",
    detail: "Longest unbroken duration performing traditional Maharashtrian weapon martial arts (Mardani Khel).",
    sound: "*KRAA-SH!*",
  },
  {
    title: "National Martial Arts Festival",
    badge: "STATE REPRESENTATIVE",
    category: "Inter-State Combat",
    detail: "Proudly represented Maharashtra at the National Martial Arts Championship held in Kerala.",
    sound: "*THWAP!*",
  },
  {
    title: "State Gold Medalist",
    badge: "GOLD MEDAL",
    category: "Weapon Rolling",
    detail: "Awarded 1st Place State Gold Medal for flawless speed, precision, and weapon rotation mastery.",
    sound: "*SHING!*",
  },
  {
    title: "State Silver Medalist",
    badge: "SILVER MEDAL",
    category: "Stick Rotation",
    detail: "Secured State Silver Medal demonstrating traditional high-velocity lathi combat techniques.",
    sound: "*WHIRL!*",
  },
];

export const BADGE_PALETTE = {
  ".": "transparent",
  "B": "#21211E", // Black outline & spider glyph
  "R": "#EE4745", // Spider-Man red circle
  "P": "#F7A1A9", // Pink highlight
  "L": "#FCE1E4", // Light pink shine
};

export const SPIDER_BADGE_GRID = [
  ".....BBBBBB.....",
  "...BBLLLLLLBB...",
  "..BLLRRRRRRRPB..",
  ".BLRRRRRRRRRRRP.",
  ".BLRRB.BB.RRPB..",
  "BLRRRB.BB.RRRPB.",
  "BPRRBBBBBBBBRRPB",
  "BRRRBRBBBBRBRRRB",
  "BRRRBRBBBBRBRRRB",
  "BRRRBBBBBBBBRRRB",
  "BRRRRBRBBRBRRRRB",
  ".BRRRBRRRRBRRRB.",
  ".BRRRRRRRRRRRRB.",
  "..BRRRRRRRRRB...",
  "...BBRRRRRRBB...",
  ".....BBBBBB.....",
];

export const VARIANT_BADGES = {
  origin: { code: "VAR-001", name: "Prime", ring: "#2F5FFF" },
  powers: { code: "VAR-002", name: "Circuit", ring: "#FFC93C" },
  feats: { code: "VAR-004", name: "Iron-Vine", ring: "#2F5FFF" },
  contact: { code: "VAR-005", name: "Echo", ring: "#FFC93C" },
};
