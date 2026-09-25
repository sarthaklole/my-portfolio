export const DIMENSIONS = {
  "earth-8086": {
    id: "earth-8086",
    name: "Earth-8086",
    hero: "Spider-Sarthak",
    tagline: "Silicon & Steel Maestro",
    badgeColor: "#FFC93C",
    accentColor: "#E8352B",
    highlightColor: "#00F0FF",
    quote: "With great code comes great responsibility — and zero uncaught exceptions.",
    sound: "*THWIP!*",
  },
  "earth-1610": {
    id: "earth-1610",
    name: "Earth-1610",
    hero: "Miles Morales",
    tagline: "Brooklyn's One and Only",
    badgeColor: "#CC2D20",
    accentColor: "#387DD0",
    highlightColor: "#9D2015",
    quote: "Anyone can wear the mask. You can wear the mask. If you didn't know that, now you do.",
    sound: "*ZAP!*",
  },
  "earth-65": {
    id: "earth-65",
    name: "Earth-65",
    hero: "Spider-Gwen",
    tagline: "Ghost-Spider Melody",
    badgeColor: "#FF4081",
    accentColor: "#00E5FF",
    highlightColor: "#E040FB",
    quote: "I'm Spider-Gwen. I play drums in the Mary Janes and I swing through the multiverse.",
    sound: "*THWAP!*",
  },
  "earth-928": {
    id: "earth-928",
    name: "Earth-928",
    hero: "Spider-Man 2099",
    tagline: "Nueva York Vanguard",
    badgeColor: "#FF0D42",
    accentColor: "#00C8FF",
    highlightColor: "#FF9100",
    quote: "You're a mistake! I'm trying to save the entire multiversal canon!",
    sound: "*SHING!*",
  },
};

export const NAV = [
  { id: "origin", label: "Origin" },
  { id: "powers", label: "Powers & Arsenal" },
  { id: "experience", label: "Experience" },
  { id: "missions", label: "Missions & Issues" },
  { id: "feats", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export const MARVEL_HERO_STATS = [
  {
    key: "intelligence",
    name: "INTELLIGENCE",
    score: 6,
    max: 7,
    percentage: 92,
    desc: "B.Tech Electronics & Telecom Engineering, Full-Stack Architecture, REST API Design.",
    icon: "🧠",
  },
  {
    key: "strength",
    name: "STRENGTH & ENDURANCE",
    score: 7,
    max: 7,
    percentage: 98,
    desc: "National Record Holder in Mardani Khel unbroken weapon performance.",
    icon: "💪",
  },
  {
    key: "speed",
    name: "SPEED & AGILITY",
    score: 6,
    max: 7,
    percentage: 90,
    desc: "High-velocity web slinging with React 19, Vite, and ultra-fast Django servers.",
    icon: "⚡",
  },
  {
    key: "durability",
    name: "SYSTEM DURABILITY",
    score: 6,
    max: 7,
    percentage: 94,
    desc: "Resilient error handling, unit-tested components, and fault-tolerant APIs.",
    icon: "🛡️",
  },
  {
    key: "combat",
    name: "COMBAT MASTERY",
    score: 7,
    max: 7,
    percentage: 100,
    desc: "State Gold Medalist in Weapon Rolling & Inter-State Combat Championship.",
    icon: "⚔️",
  },
  {
    key: "energy",
    name: "ENERGY PROJECTION",
    score: 6,
    max: 7,
    percentage: 88,
    desc: "Circuitry engineering, signal processing, and full-stack cloud data streams.",
    icon: "🔮",
  },
];

export const SKILLS = [
  {
    group: "Core Languages & Logic",
    items: ["C", "C++", "Java", "Python", "JavaScript (ES6+)"],
    level: "MASTER",
  },
  {
    group: "Backend Engine & Web",
    items: ["Django", "REST APIs", "SQL", "Database Schemas"],
    level: "EXPERT",
  },
  {
    group: "Frontend Web-Slinging",
    items: ["React", "HTML5", "CSS3 / Custom Styling", "Bootstrap", "Responsive Design"],
    level: "EXPERT",
  },
  {
    group: "Gadgets & Arsenal",
    items: ["IoT", "Embedded Systems", "Git", "GitHub", "Vite", "VS Code", "Terminal"],
    level: "OPERATIONAL",
  },
];

export const EXPERIENCES = [
  {
    issue: "MISSION LOG #01",
    role: "IoT & Embedded Systems Intern",
    company: "Qualitas Techno Solutions",
    location: "Kolhapur, Maharashtra",
    type: "IoT & Embedded Systems Internship",
    badge: "OPERATIONAL FIELDWORK",
    stamp: "VERIFIED RECORD",
    summary:
      "Engineered IoT firmware, embedded system hardware interfaces, and sensor telemetry pipelines connected with full-stack server architectures.",
    highlights: [
      "Designed and deployed embedded microcontrollers and IoT sensor modules for real-time telemetry data collection.",
      "Engineered robust REST API bridges linking hardware sensor streams to backend databases and web monitoring dashboards.",
      "Optimized low-power firmware logic, C/C++ hardware drivers, and system communication protocols.",
      "Applied agile software engineering principles, circuit debugging, and version control (Git) across production hardware.",
    ],
    tech: ["IoT", "Embedded Systems", "C", "C++", "Python", "Django", "Sensors", "REST APIs", "Git"],
  },
];

export const PROJECTS = [
  {
    id: "civil-inventory",
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
    pages: [
      {
        pageTitle: "COVER & RESEARCH VERIFICATION",
        content: "Published in IJIRCCE Journal. Solves critical inventory tracking, material dispatch, and audit trail bottlenecks in large-scale civil construction operations.",
      },
      {
        pageTitle: "TECHNICAL ARCHITECTURE",
        content: "Built on Django MVC architecture with relational SQL backend, custom session management, and automated stock deficit notifications.",
      },
      {
        pageTitle: "IMPACT & RESULTS",
        content: "Reduced site record discrepancy by 85%, accelerated material audit reporting, and provided real-time stock dashboards for project engineers.",
      },
    ],
  },
  {
    id: "amazon-clone",
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
    pages: [
      {
        pageTitle: "SUPER-STOREFRONT COVER",
        content: "Pixel-perfect clone of Amazon's frontend architecture featuring responsive navigation, multi-column megamenus, and dynamic product grids.",
      },
      {
        pageTitle: "UI/UX HIGHLIGHTS",
        content: "Pure custom CSS layout engine with glassmorphic modals, smooth image carousels, and responsive breakpoint optimizations across mobile and desktop.",
      },
      {
        pageTitle: "INTERACTIVE CODE PREVIEW",
        content: "Clean, semantic HTML5 structure with zero third-party UI framework bloat for maximum performance and fast DOM rendering.",
      },
    ],
  },
];

export const FEATS = [
  {
    title: "National Record Holder",
    badge: "NATIONAL RECORD",
    category: "Mardani Khel",
    detail: "Longest unbroken duration performing traditional Maharashtrian weapon martial arts (Mardani Khel).",
    sound: "*KRAA-SH!*",
    icon: "🏆",
  },
  {
    title: "National Martial Arts Festival",
    badge: "STATE REPRESENTATIVE",
    category: "Inter-State Combat",
    detail: "Proudly represented Maharashtra at the National Martial Arts Championship held in Kerala.",
    sound: "*THWAP!*",
    icon: "🥊",
  },
  {
    title: "State Gold Medalist",
    badge: "GOLD MEDAL",
    category: "Weapon Rolling",
    detail: "Awarded 1st Place State Gold Medal for flawless speed, precision, and weapon rotation mastery.",
    sound: "*SHING!*",
    icon: "🥇",
  },
  {
    title: "State Silver Medalist",
    badge: "SILVER MEDAL",
    category: "Stick Rotation",
    detail: "Secured State Silver Medal demonstrating traditional high-velocity lathi combat techniques.",
    sound: "*WHIRL!*",
    icon: "🥈",
  },
];

export const VARIANT_BADGES = {
  origin: { code: "VAR-001", name: "Prime", ring: "#2F5FFF" },
  powers: { code: "VAR-002", name: "Circuit", ring: "#FFC93C" },
  experience: { code: "VAR-003", name: "Deploy", ring: "#00F0FF" },
  missions: { code: "VAR-004", name: "Ops", ring: "#FF3377" },
  feats: { code: "VAR-005", name: "Iron-Vine", ring: "#2F5FFF" },
  contact: { code: "VAR-006", name: "Echo", ring: "#FFC93C" },
};
