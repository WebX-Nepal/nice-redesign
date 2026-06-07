import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Nice Recruitment Agency | Manpower Recruitment Nepal",
  description:
    "Get in touch with Nice Recruiting Agency. Submit a hiring inquiry or reach us directly via phone, email, or WhatsApp.",

  keywords: [
    "contact nice recruitment agency",
    "nice recruitment contact",
    "manpower agency contact nepal",
    "recruitment agency nepal contact",
    "overseas recruitment nepal",
    "foreign employment agency nepal",
    "workforce recruitment nepal",
    "employer inquiries nepal",
  ],

  alternates: {
    canonical: "https://www.nicerecruitment.org/contact",
  },

  openGraph: {
    title: "Contact Nice Recruitment Agency",
    description:
      "Get in touch with Nice Recruitment Agency for manpower recruitment services, workforce solutions, and international hiring inquiries.",
    url: "https://www.nicerecruitment.org/contact",
    siteName: "Nice Recruitment Agency",
    images: [
      {
        url: "https://www.nicerecruitment.org/logo/favicon.png",
        width: 1200,
        height: 630,
        alt: "Contact Nice Recruitment Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Nice Recruitment Agency",
    description:
      "Reach out to Nice Recruitment Agency for overseas recruitment and workforce placement services.",
    images: ["https://www.nicerecruitment.org/logo/favicon.png"],
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

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.nicerecruitment.org/contact#contactpage",
      url: "https://www.nicerecruitment.org/contact",
      name: "Contact Nice Recruitment Agency",
      description:
        "Get in touch with Nice Recruitment Agency for overseas recruitment, manpower services, and workforce solutions in Nepal.",
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
      email: "info@nicerecruitment.org",
      telephone: ["+977 970-6414359","+977 970-4804825"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: ["+977 970-6414359","+977 970-4804825"],
          contactType: "customer service",
          availableLanguage: ["en", "ne"],
        },
      ],
    },
  ],
};


export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return( 
  <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

  {children}
  
  </>
);
}