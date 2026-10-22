// Content file for Diwali Bites
// Non-technical owners can edit any copy directly in this file.

export const siteContent = {
  brand: {
    name: "Diwali Bites",
    tagline: "Taste the Festive Magic!",
  },
  nav: {
    links: [
      { label: "Home", href: "#hero" },
      { label: "Menu", href: "#menu" },
      { label: "Games & Fun", href: "#games" },
      { label: "Find Stall", href: "#stall" },
    ],
    cta: {
      label: "Visit Stall No. 4",
      href: "#stall",
    },
  },
  hero: {
    badge: "College Diwali Mandi",
    titleLine1: "DIWALI BITES",
    titleLine2: "Taste the Festive Magic!",
    supportingLine:
      "Handcrafted festive refreshments, tangy loaded street bites, and melt-in-mouth traditional delicacies — brought to life by students for the grand Diwali Mandi.",
    primaryCta: {
      label: "Explore Our Menu",
      href: "#menu",
    },
    secondaryCta: {
      label: "Discover the Fun",
      href: "#games",
    },
  },
  menu: {
    heading: "Made for festive cravings",
    subtitle:
      "Handcrafted with love, festive joy, and authentic spices to make your celebration unforgettable.",
    items: [
      {
        id: "fresh-mojitos",
        tag: "Refreshing Sips",
        name: "Fresh Mojitos",
        price: "", // Keep empty to hide price pill until real prices are set
        description: "",
        flavors: ["Crisp Mint", "Watermelon", "Kala Khatta"],
        images: ["/src/assets/mojito.jpeg", "/src/assets/mojito2.jpeg", "/src/assets/mojito3.jpeg"],
      },
      {
        id: "loaded-chips-chaat",
        tag: "Crunchy & Savory",
        name: "Loaded Chips Chaat",
        price: "", // Keep empty to hide price pill
        description: "",
        image: "/src/assets/chaat.jpeg",
      },
      {
        id: "traditional-kharwas",
        tag: "Authentic Sweet",
        name: "Traditional Kharwas",
        price: "", // Keep empty to hide price pill
        description: "",
        image: "/src/assets/kharbas.jpeg",
      },
    ],
  },
  games: {
    badge: "Coming Soon",
    heading: "Games & Fun",
    subtitle: "Festival joy isn't complete without challenges and prizes!",
    teaserTitle: "Something Exciting is Being Unwrapped...",
    teaserDescription:
      "Our team is cooking up carnival stalls, festive challenge games, and celebration gift hampers loaded with goodies for you and your college crew. Reveal coming on event morning!",
    hamperImage: "/src/assets/hamper.jpeg",
    mysteryCards: [
      {
        id: 1,
        title: "Mystery Game #1",
        teaser: "Test your lightning reflexes & aim",
      },
      {
        id: 2,
        title: "Mystery Game #2",
        teaser: "Quick-fire festival showdown",
      },
      {
        id: 3,
        title: "Grand Hamper Quest",
        teaser: "Score big to take home festive gift hampers",
      },
    ],
  },
  stall: {
    heading: "Find Our Stall",
    subtitle:
      "Come say hi, grab your treats, and soak in the festive cheer. Follow the fairy lights to Stall No. 4!",
    badge: "Event Coordinates",
    cardTitle: "Diwali Mandi 2026",
    stallNumber: "Stall No. 4",
    venueLabel: "Venue",
    venue: "PCET, S.B. Patil Architecture Building",
    dateLabel: "Date",
    date: "27th October 2026",
    timingLabel: "Timing",
    timing: "9 AM – 5 PM",
    landmark: "Look for the warm golden fairy lights and the Diwali Bites banner!",
  },
  footer: {
    brandName: "Diwali Bites",
    tagline: "Taste the Festive Magic at College Diwali Mandi 2026",
    instagram: "", // intentionally empty string: renders only if non-empty
    note: "Proudly run by passionate students for the annual College Diwali Mandi. All food is freshly prepared with utmost care and hygiene.",
    copyright: "© 2026 Diwali Bites. Wishing you a season of light, joy, and sweet memories!",
  },
};
