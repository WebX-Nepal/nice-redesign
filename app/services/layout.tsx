import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Overseas Recruitment & Workforce Solutions",
  description:
    "Explore Nice Recruitment Agency's recruitment services including candidate sourcing, workforce placement, overseas recruitment, employer support, and documentation assistance.",

  keywords: [
    "recruitment services nepal",
    "manpower recruitment agency",
    "overseas recruitment services",
    "workforce placement",
    "candidate sourcing",
    "international recruitment",
    "foreign employment services",
    "manpower solutions nepal",
  ],

  alternates: {
    canonical: "https://nicerecruitment.org/services",
  },

  openGraph: {
    title: "Our Services | Nice Recruitment Agency",
    description:
      "Discover our overseas recruitment, workforce placement, candidate sourcing, and employer support services for international hiring needs.",
    url: "https://nicerecruitment.org/services",
    siteName: "Nice Recruitment Agency",
    images: [
      {
        url: "https://nicerecruitment.org/og/og-nice.jpg",
        width: 1200,
        height: 630,
        alt: "Nice Recruitment Agency Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Services | Nice Recruitment Agency",
    description:
      "Professional overseas recruitment and workforce solutions for employers and job seekers.",
    images: ["https://nicerecruitment.org/og/og-nice.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Our Services | Overseas Recruitment & Workforce Solutions",
  description:
    "Explore Nice Recruitment Agency's recruitment services including candidate sourcing, workforce placement, overseas recruitment, employer support, and documentation assistance.",
  url: "https://nicerecruitment.org/services",

  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Overseas Recruitment",
        description:
          "We connect skilled Nepali workers with international employers across various industries.",
        provider: {
          "@type": "Organization",
          name: "Nice Recruitment Agency",
        },
        publisher: {
          "@type": "Organization",
          name: "Nice Recruitment Agency",
          url: "https://nicerecruitment.org",
        },
      },
      {
        "@type": "Service",
        position: 2,
        name: "Candidate Sourcing & Screening",
        description:
          "We identify, screen, and shortlist qualified candidates for employer requirements.",
        provider: {
          "@type": "Organization",
          name: "Nice Recruitment Agency",
        },
      },
      {
        "@type": "Service",
        position: 3,
        name: "Workforce Placement",
        description:
          "End-to-end workforce placement services for international employers.",
        provider: {
          "@type": "Organization",
          name: "Nice Recruitment Agency",
        },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Documentation & Visa Assistance",
        description:
          "Support for visa processing, documentation, and compliance for overseas employment.",
        provider: {
          "@type": "Organization",
          name: "Nice Recruitment Agency",
        },
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />

      {children}
    </>
  );
}
