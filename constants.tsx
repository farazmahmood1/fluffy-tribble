
import React from 'react';
import { Experience, SkillCategory } from './types';

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

export const PROJECTS = [
  {
    id: "01",
    title: "DTC Growth Scaling",
    category: "eCommerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    description: "Scaled a Shopify store to 6-figure monthly revenue through multi-channel attribution and creative testing."
  },
  {
    id: "02",
    title: "Lead Gen Engine",
    category: "Real Estate & Home Services",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200",
    description: "Automated lead flow for 65+ companies with GoHighLevel and custom Google Ads architectures."
  },
  {
    id: "03",
    title: "SaaS Performance Dashboard",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    description: "Custom Looker Studio reporting suite connecting Meta Pixel, GTM, and CRM data for real-time ROI tracking."
  },
  {
    id: "04",
    title: "Amazon PPC Expansion",
    category: "B2B Strategy",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b566?auto=format&fit=crop&q=80&w=1200",
    description: "Optimized 500+ SKU catalogs for high-intent dental supply brands, reducing ACOS by 25%."
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
