export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  tag: string;
  name: string;
  price: string;
  description: string;
  category?: 'all' | 'mojitos' | 'chaat' | 'dahichaat';
  isVeg?: boolean;
  highlightBadge?: string;
  ingredients?: string[];
  detailedStory?: string;
  image?: string;
  images?: string[];
  flavors?: string[];
}

export interface MysteryCard {
  id: number;
  title: string;
  teaser: string;
  prizeHint?: string;
}

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    links: NavLink[];
    cta: NavLink;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    supportingLine: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
  };
  menu: {
    heading: string;
    subtitle: string;
    items: MenuItem[];
  };
  games: {
    badge: string;
    heading: string;
    subtitle: string;
    teaserTitle: string;
    teaserDescription: string;
    hamperImage: string;
    mysteryCards: MysteryCard[];
  };
  stall: {
    heading: string;
    subtitle: string;
    badge: string;
    cardTitle: string;
    stallNumber: string;
    venueLabel: string;
    venue: string;
    dateLabel: string;
    date: string;
    timingLabel: string;
    timing: string;
    landmark: string;
    mapUrl?: string;
  };
  footer: {
    brandName: string;
    tagline: string;
    instagram: string;
    note: string;
    copyright: string;
  };
}

export const siteContent: SiteContent;

