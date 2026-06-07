import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nice Recruitment Agency | Trusted Manpower Recruitment Agency in Nepal",
  description:
    "Learn about Nice Recruitment Agency, a trusted manpower recruitment agency in Nepal connecting skilled Nepali workers with international employers through ethical and reliable recruitment services.",

  keywords: [
    "about nice recruitment agency",
    "manpower recruitment agency nepal",
    "overseas recruitment nepal",
    "licensed recruitment agency nepal",
    "nepali manpower company",
    "international recruitment nepal",
    "foreign employment agency nepal",
    "recruitment company in nepal",
  ],

  alternates: {
    canonical: "https://www.nicerecruitment.org/about",
  },

  openGraph: {
    title: "About Nice Recruitment Agency",
    description:
      "Nice Recruitment Agency is a trusted manpower recruitment agency in Nepal, connecting qualified Nepali workers with reputable employers across international markets.",
    url: "https://www.nicerecruitment.org/about",
    siteName: "Nice Recruitment Agency",
    images: [
      {
        url: "https://www.nicerecruitment.org/logo/favicon.png",
        width: 1200,
        height: 630,
        alt: "Nice Recruitment Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Nice Recruitment Agency",
    description:
      "Learn about Nice Recruitment Agency and our commitment to ethical overseas recruitment and workforce placement services from Nepal.",
    images: ["https://www.nicerecruitment.org/og/about.png"],
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

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.nicerecruitment.org/about#aboutpage",
      url: "https://www.nicerecruitment.org/about",
      name: "About Nice Recruitment Agency",
      description:
        "Learn about Nice Recruitment Agency, a trusted manpower recruitment agency in Nepal connecting skilled Nepali workers with international employers.",
      isPartOf: {
        "@id": "https://www.nicerecruitment.org/#website",
      },
      about: {
        "@id": "https://www.nicerecruitment.org/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.nicerecruitment.org/#organization",
      name: "Nice Recruitment Agency",
      url: "https://www.nicerecruitment.org",
      logo: "https://www.nicerecruitment.org/logo/favicon.png",
      description:
        "Nice Recruitment Agency is a trusted manpower recruitment agency in Nepal providing overseas recruitment, workforce placement, and employer support services.",
      email: "info@nicerecruitment.org",
      telephone: ["+977 970-6414359","+977 970-4804825"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      sameAs: [
        "https://www.facebook.com",
        "https://www.linkedin.com",
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />
  {children}
  
  </>);
}