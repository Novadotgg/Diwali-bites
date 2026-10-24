// Content file for Diwali Bites
// Non-technical owners can edit any copy or price directly in this single file.

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
    badge: "College Diwali Mandi 2026",
    titleLine1: "DIWALI BITES",
    titleLine2: "Taste the Festive Magic!",
    supportingLine:
      "Handcrafted festive refreshments, tangy loaded street bites, and melt-in-mouth traditional delicacies — brought to life by students for the grand Diwali Mandi.",
    primaryCta: {
      label: "Explore Our Menu",
      href: "#menu",
    },
    secondaryCta: {
      label: "Find Stall No. 4",
      href: "#stall",
    },
  },
  menu: {
    heading: "Made for Festive Cravings",
    subtitle:
      "Handcrafted with love, festive joy, and authentic spices to make your celebration unforgettable.",
    items: [
      {
        id: "fresh-mojitos",
        category: "mojitos",
        tag: "Refreshing Sips",
        name: "Fresh Mojitos",
        price: "[PRICE]", // Edit here to set real price (e.g. "₹60") or leave as "[PRICE]"
        description:
          "Hand-muddled fresh garden mint, zesty lemons, chilled fizz, and signature festive syrup twists over crushed ice.",
        detailedStory:
          "Nothing beats the Mandi crowd heat like a freshly shaken, chilled mojito. Three festive twists made right in front of you with real fruits and aromatic herbs.",
        isVeg: true,
        highlightBadge: "Festival Bestseller",
        ingredients: ["Fresh Garden Mint", "Persian Lime", "Chilled Soda", "Festive Fruit Syrups", "Crushed Ice"],
        flavors: ["Crisp Mint", "Watermelon", "Kala Khatta"],
        images: ["/src/assets/mojito.jpeg", "/src/assets/mojito2.jpeg", "/src/assets/mojito3.jpeg"],
      },
      {
        id: "loaded-chips-chaat",
        category: "chaat",
        tag: "Crunchy & Savory",
        name: "Loaded Chips Chaat",
        price: "[PRICE]", // Edit here to set real price (e.g. "₹50") or leave as "[PRICE]"
        description:
          "Crisp golden potato wafers piled high with diced onions, juicy tomatoes, sweet date-tamarind chutney, spicy green mint sauce & crunchy sev.",
        detailedStory:
          "A modern Diwali spin on traditional street chaat. We take premium crunch chips, smother them in homemade sweet and tangy chutneys, and sprinkle special chaat masala.",
        isVeg: true,
        highlightBadge: "Must-Try Crunch",
        ingredients: ["Crispy Potato Wafers", "Tangy Imli Chutney", "Teekhi Hari Chutney", "Fresh Chopped Veggies", "Fine Nylon Sev"],
        image: "/src/assets/chaat.jpeg",
      },
      {
        id: "traditional-kharwas",
        category: "kharwas",
        tag: "Authentic Sweet",
        name: "Traditional Kharwas",
        price: "[PRICE]", // Edit here to set real price (e.g. "₹40") or leave as "[PRICE]"
        description:
          "Authentic Maharashtrian steamed colostrum milk pudding infused with aromatic green cardamom, pure saffron strands, and gentle sweetness.",
        detailedStory:
          "Prepared following a time-honored family recipe. Steamed to velvety perfection so each bite melts delicately on your tongue. The true taste of festive nostalgia.",
        isVeg: true,
        highlightBadge: "Pure Tradition",
        ingredients: ["Pure Colostrum Milk", "Cardamom (Elaichi)", "Kashmiri Saffron (Kesar)", "Organic Jaggery / Sugar", "Nutmeg Hint"],
        image: "/src/assets/kharbas.jpeg",
      },
    ],
  },
  games: {
    badge: "Carnival Fun & Prizes",
    heading: "Games & Festive Fun",
    subtitle: "Festival joy isn't complete without challenges, laughter, and bragging rights with your college crew!",
    teaserTitle: "Something Exciting is Being Unwrapped...",
    teaserDescription:
      "Our team is cooking up carnival stalls, festive challenge games, and celebration gift hampers loaded with Diwali goodies for you and your squad. Reveal coming on event morning!",
    hamperImage: "/src/assets/hamper.jpeg",
    mysteryCards: [
      {
        id: 1,
        title: "Mystery Game #1",
        teaser: "Test your lightning reflexes & aim",
        prizeHint: "Win instant sweet treats",
      },
      {
        id: 2,
        title: "Mystery Game #2",
        teaser: "Quick-fire festival showdown",
        prizeHint: "Double your game tokens",
      },
      {
        id: 3,
        title: "Grand Hamper Quest",
        teaser: "Score big to take home festive gift hampers",
        prizeHint: "Mega Diwali gift bundle",
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
    mapUrl: "https://maps.google.com/?q=S.B.+Patil+College+of+Architecture+Nigdi+Pune",
  },
  footer: {
    brandName: "Diwali Bites",
    tagline: "Taste the Festive Magic at College Diwali Mandi 2026",
    instagram: "", // intentionally empty string: renders only if non-empty
    note: "Proudly run by passionate students for the annual College Diwali Mandi. All food is freshly prepared with utmost care, authentic spices, and hygienic standards.",
    copyright: "© 2026 Diwali Bites. Wishing you a season of light, joy, and sweet memories!",
  },
};

