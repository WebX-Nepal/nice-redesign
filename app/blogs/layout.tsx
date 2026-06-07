import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Nice Recruiting Agency",
  description:
    "Insights, tips and updates on manpower recruitment, Gulf employment, and workforce management from the Nice Recruiting Agency team.",

  keywords: [
    "nice recruitment agency blog",
    "manpower recruitment agency nepal",
    "overseas recruitment nepal",
    "licensed recruitment agency nepal",
    "nepali manpower company",
    "international recruitment nepal",
    "foreign employment agency nepal",
    "recruitment company in nepal",
  ],

  alternates: {
    canonical: "https://www.nicerecruitment.org/blogs",
  },

  openGraph: {
    title: "Blogs by Nice Recruitment Agency",
    description:
      "Nice Recruitment Agency is a trusted manpower recruitment agency in Nepal, connecting qualified Nepali workers with reputable employers across international markets.",
    url: "https://www.nicerecruitment.org/blog",
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

const blogsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog | Overseas Employment & Recruitment Insights",
  description:
    "Read expert articles on overseas employment, international recruitment, career development, visa requirements, and workforce solutions from Nice Recruitment Agency.",
  url: "https://www.nicerecruitment.org/blogs",
  mainEntity: {
    "@type": "Blog",
    name: "Nice Recruitment Agency Blog",
  },
  publisher: {
    "@type": "Organization",
    name: "Nice Recruitment Agency",
    logo: {
      "@type": "ImageObject",
      url: "https://www.nicerecruitment.org/logo/favicon.png",
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return( 
  <>
  <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogsSchema),
        }}
      />
  {children}
  
  </>
  );
}