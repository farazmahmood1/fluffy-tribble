
import React from 'react';
import { Experience, SkillCategory, Review, Project } from './types';

export const REVIEWS: Review[] = [
  {
    name: "Jonathan Reeves",
    role: "CEO, HomeScan USA",
    content: "Faysal transformed our lead generation engine. Our CPL dropped by 35% within the first month while the lead quality reached an all-time high. His understanding of performance architectures is unparalleled.",
    platform: "LinkedIn",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Growth Lead, AquaFlow DTC",
    content: "Scalability was our biggest bottleneck. With Faysal's custom Google Ads architectures, we've 3x'd our monthly ad spend while actually increasing our ROAS. A true data-driven specialist.",
    platform: "Upwork",
    rating: 5
  },
  {
    name: "Mark Thompson",
    role: "Director of Marketing, ESS",
    content: "The level of detail in the attribution tracking Faysal built for us is incredible. We finally have a clear picture of our full-funnel performance. He doesn't just run ads; he builds systems.",
    platform: "LinkedIn",
    rating: 5
  },
  {
    name: "David Sterling",
    role: "Founder, Sterling Dental Supplies",
    content: "Our Amazon PPC ACOS dropped from 45% to 18% under Faysal's management. His strategic approach to keyword research and bid management has been a game-changer for our B2B growth.",
    platform: "Direct",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Growth Manager, Nexa Solutions",
    content: "Faysal's ability to interpret complex data into actionable campaign pivots is incredible. Our conversion rate increased by 22% in the first quarter of working together. Highly recommended.",
    platform: "Clutch",
    rating: 5
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Performance Marketing Specialist",
    company: "Digilatics",
    location: "Lahore",
    period: "Sep 2025 – Present",
    description: [
      "Manage paid media campaigns across Google Ads, Microsoft Bing Ads, and Meta Ads for 65+ Home Inspection companies across the United States.",
      "Drive qualified lead generation with an average CPL of $40–$45, delivering 8–10x revenue return through performance-driven optimization.",
      "Oversee $50K–$90K monthly ad budgets per account, ensuring efficient spend allocation and lead quality.",
      "Launch and optimize RSA, Performance Max, and Demand Gen campaigns, prioritizing conversion efficiency and scale."
    ]
  },
  {
    role: "Digital Marketing Manager",
    company: "Expert System Solution",
    location: "Lahore",
    period: "Sep 2024 – Sep 2025",
    description: [
      "Led paid growth initiatives for international B2B, and Service-based brands, owning strategy and execution.",
      "Built and optimized full-funnel acquisition and follow-up systems using GoHighLevel.",
      "Drove consistent CPL improvements and scalable lead volume across multiple accounts.",
      "Implemented end-to-end tracking and attribution frameworks using Meta Pixel and GA4."
    ]
  },
  {
    role: "Digital Marketing Executive",
    company: "Alliance Investments Management LLC",
    location: "Lahore",
    period: "Oct 2023 – Jan 2024",
    description: [
      "Owned paid acquisition strategy for DTC and B2B eCommerce brands.",
      "Scaled paid media for a Shopify DTC brand to six-figure monthly revenue with high ROAS.",
      "Led Amazon PPC growth for a B2B dental supplies brand.",
      "Used behavioral analytics (GA4) to inform targeting and funnel optimization."
    ]
  },
  {
    role: "Digital Marketing Executive",
    company: "Royal Bathrooms.co.uk",
    location: "Lahore",
    period: "Jan 2020 – Sep 2023",
    description: [
      "Managed and scaled multi-channel PPC campaigns on Google, Bing, Meta, Amazon, and eBay Ads for the UK market.",
      "Conducted in-depth keyword research leading to high-performing long-tail campaigns.",
      "Created and optimized landing pages resulting in improved conversion rates.",
      "Monitored and managed bids and budgets based on ROI and seasonal trends."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "DTC Growth Scaling",
    category: "eCommerce",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
    description: "Scaled a Shopify store to 6-figure monthly revenue through multi-channel attribution and creative testing.",
    client: "AquaFlow DTC",
    year: "2025",
    duration: "6 Months",
    tools: ["Google Ads", "Meta Ads", "Shopify", "GA4", "Looker Studio", "GTM"],
    results: [
      "Scaled monthly revenue from $18K to $142K in 6 months",
      "Achieved 4.8x ROAS across Google and Meta channels",
      "Reduced customer acquisition cost (CAC) by 38%",
      "Built multi-touch attribution model connecting 12+ touchpoints"
    ],
    overview: "AquaFlow, a premium DTC water filtration brand, needed to break past a revenue ceiling. I designed a full-funnel acquisition strategy combining Google Shopping, Meta prospecting, and retargeting layers. By implementing server-side tracking via GTM and building a custom Looker Studio dashboard, we gained real-time visibility into ROAS by channel, creative, and audience segment — enabling rapid scaling with confidence.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "02",
    title: "Lead Gen Engine",
    category: "Real Estate & Home Services",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    description: "Automated lead flow for 65+ companies with GoHighLevel and custom Google Ads architectures.",
    client: "HomeScan USA",
    year: "2025",
    duration: "Ongoing",
    tools: ["Google Ads", "Bing Ads", "GoHighLevel", "WhatConverts", "GA4", "GTM"],
    results: [
      "Manages $50K–$90K monthly ad spend across 65+ accounts",
      "Average CPL of $40–$45 with 8–10x revenue return",
      "Automated lead routing and follow-up via GoHighLevel",
      "98% call tracking attribution accuracy with WhatConverts"
    ],
    overview: "HomeScan USA operates a network of 65+ home inspection franchises across the United States. I built a scalable Google Ads architecture using location-specific RSA campaigns, Performance Max for local services, and automated lead routing through GoHighLevel. Each franchise receives qualified leads with full attribution — from keyword to closed deal — enabling data-driven budget allocation at scale.",
    gallery: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "03",
    title: "SaaS Performance Dashboard",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    description: "Custom Looker Studio reporting suite connecting Meta Pixel, GTM, and CRM data for real-time ROI tracking.",
    client: "Nexa Solutions",
    year: "2024",
    duration: "3 Months",
    tools: ["Looker Studio", "GA4", "GTM", "Meta CAPI", "BigQuery", "Google Sheets"],
    results: [
      "Unified 5 data sources into a single real-time dashboard",
      "Reduced weekly reporting time from 8 hours to 15 minutes",
      "Identified $22K/month in wasted ad spend through attribution gaps",
      "Conversion rate increased 22% through data-driven optimizations"
    ],
    overview: "Nexa Solutions, a B2B SaaS platform, had fragmented data across Meta Ads Manager, Google Analytics, and their CRM. I built a comprehensive Looker Studio reporting suite that pulls real-time data from all channels, maps the full customer journey from first click to closed deal, and highlights exactly where budget should be allocated for maximum impact.",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "04",
    title: "Amazon PPC Expansion",
    category: "B2B Strategy",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b566?auto=format&fit=crop&q=80&w=1200",
    description: "Optimized 500+ SKU catalogs for high-intent dental supply brands, reducing ACOS by 25%.",
    client: "Sterling Dental Supplies",
    year: "2024",
    duration: "8 Months",
    tools: ["Amazon PPC", "Helium 10", "SEMrush", "Google Sheets", "Amazon Brand Analytics"],
    results: [
      "Reduced ACOS from 45% to 18% across 500+ SKUs",
      "Increased monthly revenue by 165% through keyword expansion",
      "Built automated bid management system for seasonal trends",
      "Captured 12 new category-level #1 rankings"
    ],
    overview: "Sterling Dental Supplies, a B2B dental equipment distributor, was bleeding margin on Amazon with a 45% ACOS. I restructured their entire PPC architecture — segmenting campaigns by product category, match type, and funnel stage. Combined with aggressive keyword harvesting via Helium 10 and bid automation based on day-parting and seasonal trends, we drove ACOS down to 18% while scaling revenue 165%.",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553729459-afe8f2e2ed65?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "05",
    title: "UK eCommerce Overhaul",
    category: "Multi-Channel PPC",
    image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=1200",
    description: "Revamped multi-channel paid strategy for a UK bathroom retailer across Google, Bing, Meta, and eBay.",
    client: "Royal Bathrooms UK",
    year: "2023",
    duration: "3 Years",
    tools: ["Google Ads", "Bing Ads", "Meta Ads", "eBay Ads", "GA4", "Microsoft Clarity"],
    results: [
      "Managed £200K+ monthly ad spend across 4 platforms",
      "Improved conversion rate by 34% through landing page optimization",
      "Built long-tail keyword strategy capturing 2,400+ new search terms",
      "Reduced CPC by 28% through Quality Score improvements"
    ],
    overview: "Royal Bathrooms is one of the UK's leading online bathroom retailers. Over a 3-year engagement, I managed their entire paid media ecosystem — from Google Shopping and Search to Bing, Meta retargeting, and eBay Promoted Listings. My approach centered on granular keyword research, seasonal bid strategies, and continuous landing page CRO using Microsoft Clarity heatmaps to align ad spend with high-converting user behavior.",
    gallery: [
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "06",
    title: "Full-Funnel B2B Growth",
    category: "B2B & SaaS",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    description: "Designed end-to-end acquisition and nurture system for international B2B brands using paid media and CRM automation.",
    client: "Expert System Solutions",
    year: "2025",
    duration: "12 Months",
    tools: ["Google Ads", "Meta Ads", "GoHighLevel", "GA4", "Meta CAPI", "Zapier"],
    results: [
      "Generated 3,200+ qualified leads in 12 months",
      "Built automated 7-step email nurture sequence with 42% open rate",
      "Reduced CPL by 52% through audience refinement and creative testing",
      "Implemented full server-side tracking with Meta CAPI and GA4"
    ],
    overview: "Expert System Solutions serves international B2B and service-based brands. I designed a complete acquisition engine — from top-of-funnel awareness campaigns on Meta to high-intent Google Search and Demand Gen campaigns, all feeding into GoHighLevel for automated lead nurturing. By implementing server-side tracking via Meta CAPI and GA4, we achieved full-funnel attribution clarity and continuously optimized toward revenue, not just leads.",
    gallery: [
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

export const SERVICES = [
  {
    id: "01",
    title: "Performance Marketing",
    description: "Building scalable and high-performance ad campaigns across Google, Meta, and Bing. Focusing on ROI, CAC optimization, and high-intent targeting to drive revenue.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20V10" /><path d="M18 20V4" /><path d="M6 20v-4" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Growth Strategy & CRO",
    description: "Designing end-to-end conversion funnels with GoHighLevel and custom landing pages. Creating intuitive experiences with clean design systems and pixel-perfect tracking.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
      </svg>
    )
  },
  {
    id: "03",
    title: "Analytics & Attribution",
    description: "Developing robust tracking architectures using GTM, GA4, and CAPI. Ensuring scalability and secure data flow to connect paid media with real business impact.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Search & SEO Strategy",
    description: "In-depth keyword research and competitive analysis using SEMrush and Optmyzr. Captured the long tail of the market to boost low-cost traffic and increase total revenue.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Platforms & Campaigns",
    items: ["Google Ads", "Meta Ads", "Bing Ads", "Yelp Ads", "TikTok Ads", "Pinterest Ads", "Amazon PPC", "eBay Ads"]
  },
  {
    title: "Analytics & Tracking",
    items: ["GA4", "GTM", "Looker Studio", "Meta Pixel", "CAPI", "WhatConverts", "CRM Integration", "Microsoft Clarity", "GoHighLevel"]
  },
  {
    title: "Growth Strategy",
    items: ["Full-Funnel Strategy", "Paid Acquisition", "Demand Capture", "Retargeting", "Budget Scaling", "KPI Frameworks"]
  },
  {
    title: "Optimization & Tools",
    items: ["A/B Testing", "CRO", "UTM Structuring", "SEMrush", "Optmyzr", "Clickup", "Asana", "Canva", "Photoshop"]
  }
];
