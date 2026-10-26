// Content file for Diwali Bites
// Non-technical owners can edit any copy or price directly in this single file.
import mojitoImg from './assets/mojito.jpeg'
import chaatImg from './assets/chaat.jpeg'
import dahiChaatImg from './assets/dahichat.jpeg'
import bhelImg from './assets/bhel.jpeg'
import hamperImg from './assets/hamper.jpeg'

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
      label: "Find Our Stall",
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
      label: "Find Our Stall",
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
        description:
          "Hand-muddled fresh garden mint, zesty lemons, chilled fizz, and signature festive syrup twists over crushed ice.",
        detailedStory:
          "Nothing beats the Mandi crowd heat like a freshly shaken, chilled mojito. Refreshing festive twists made right in front of you with real fruits, aromatic mint, and bubbly soda.",
        isVeg: true,
        highlightBadge: "Festival Bestseller",
        ingredients: ["Fresh Garden Mint", "Persian Lime", "Chilled Soda", "Festive Fruit Syrups", "Crushed Ice"],
        flavors: ["Crisp Mint", "Blue Ocean", "Kala Khatta"],
        image: mojitoImg,
      },
      {
        id: "loaded-chips-chaat",
        category: "chaat",
        tag: "Crunchy & Savory",
        name: "Loaded Chips Chaat",
        description:
          "Crisp golden potato wafers piled high with diced onions, juicy tomatoes, sweet date-tamarind chutney, spicy green mint sauce & crunchy sev.",
        detailedStory:
          "A modern Diwali spin on traditional street chaat. We take premium crunch chips, smother them in homemade sweet and tangy chutneys, and sprinkle special chaat masala.",
        isVeg: true,
        highlightBadge: "Must-Try Crunch",
        ingredients: ["Crispy Potato Wafers", "Tangy Imli Chutney", "Teekhi Hari Chutney", "Fresh Chopped Veggies", "Fine Nylon Sev"],
        image: chaatImg,
      },
      {
        id: "dahi-chaat",
        category: "dahichaat",
        tag: "Crispy & Tangy",
        name: "Dahi Chaat",
        description:
          "Crispy golden hollow puris filled with spiced potatoes, chilled creamy sweet yogurt, tangy tamarind chutney, spicy green mint sauce & crunchy sev.",
        detailedStory:
          "An all-time festival favorite! Crisp puris crowned with velvety chilled dahi, tangy date-tamarind chutney, spicy mint sauce, fine nylon sev, and juicy ruby pomegranate seeds. Every single bite is a burst of sweet, tangy, and crunchy festive joy.",
        isVeg: true,
        highlightBadge: "Crowd Favorite",
        ingredients: ["Crispy Puris", "Chilled Creamy Dahi", "Tangy Imli Chutney", "Zesty Hari Chutney", "Fine Nylon Sev", "Ruby Pomegranate", "Chaat Masala"],
        image: dahiChaatImg,
      },
      {
        id: "special-bhel",
        category: "bhel",
        tag: "Tangy & Crunchy",
        name: "Special Bhel",
        description:
          "Crispy puffed rice tossed with golden sev, diced onions, fresh tomatoes, coriander, and sweet & spicy date-tamarind chutneys.",
        detailedStory:
          "The quintessential street sensation of Diwali Mandi! Light, crunchy puffed rice tossed fresh to order with savory sev, crunchy papdi, roasted peanuts, tangy lemon juice, and our special sweet-and-spicy homemade chutneys. Perfect to munch while exploring the festivities.",
        isVeg: true,
        highlightBadge: "Campus Favorite",
        ingredients: ["Crispy Puffed Rice (Murmura)", "Fine Nylon Sev", "Crunchy Papdi", "Sweet Tamarind Chutney", "Spicy Mint Chutney", "Fresh Chopped Onions & Tomatoes", "Roasted Peanuts", "Zesty Lemon Juice"],
        image: bhelImg,
      },
      {
        id: "diwali-gift-hamper",
        category: "hamper",
        tag: "Festive Special",
        name: "Festive Gift Hamper",
        description:
          "Exciting Hampers from Diwali Bites! Specially curated celebration hampers to bring festive joy, warmth, and memorable celebration moments to your Diwali.",
        detailedStory:
          "Exciting Hampers from Diwali Bites! Handcrafted with festive elegance and care, our celebration gift hamper is thoughtfully designed to spread festive smiles, appreciation, and sweet memories with professors, family, and friends.",
        highlightBadge: "Perfect for Gifting",
        image: hamperImg,
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
    hamperImage: hamperImg,
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
      "Come say hi, grab your treats, and soak in the festive cheer. Follow the fairy lights to our stall!",
    badge: "Event Coordinates",
    cardTitle: "Diwali Mandi 2026",
    stallNumber: "Diwali Bites Stall",
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

