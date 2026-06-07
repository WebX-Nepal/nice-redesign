import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Talents | Foreign Employment Jobs from Nepal",
  description:
    "Explore overseas job opportunities through Nice Recruitment Agency. Find vacancies with trusted international employers across various industries and destinations.",

  keywords: [
    "overseas jobs nepal",
    "foreign employment jobs",
    "job vacancies abroad",
    "international jobs for nepali workers",
    "gulf jobs from nepal",
    "recruitment agency jobs",
    "manpower agency vacancies",
    "overseas recruitment nepal",
  ],

  alternates: {
    canonical: "https://nicerecruitment.org/jobs",
  },

  openGraph: {
    title: "Overseas Job Vacancies | Nice Recruitment Agency",
    description:
      "Browse overseas job vacancies and employment opportunities with trusted international employers through Nice Recruitment Agency.",
    url: "https://nicerecruitment.org/jobs",
    siteName: "Nice Recruitment Agency",
    images: [
      {
        url: "https://nicerecruitment.org/og/jobs.png",
        width: 1200,
        height: 630,
        alt: "Overseas Job Vacancies",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Overseas Job Vacancies | Nice Recruitment Agency",
    description:
      "Discover international job opportunities and foreign employment vacancies through Nice Recruitment Agency.",
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

const jobsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Overseas Job Vacancies | Nice Recruitment Agency",
  description:
    "Explore overseas job opportunities through Nice Recruitment Agency. Find vacancies with trusted international employers across various industries and destinations.",
  url: "https://nicerecruitment.org/jobs",

  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "JobPosting",
          title: "Construction Worker",
          description:
            "Overseas construction job opportunity for skilled workers.",
          hiringOrganization: {
            "@type": "Organization",
            name: "Nice Recruitment Agency",
            url: "https://nicerecruitment.org",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "QA",
            },
          },
          employmentType: "FULL_TIME",
          url: "https://nicerecruitment.org/jobs/construction-worker",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "JobPosting",
          title: "Warehouse Assistant",
          description: "Warehouse job opportunity in Gulf countries.",
          hiringOrganization: {
            "@type": "Organization",
            name: "Nice Recruitment Agency",
          },
          jobLocation: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressCountry: "UAE",
            },
          },
          employmentType: "FULL_TIME",
          url: "https://nicerecruitment.org/jobs/warehouse-assistant",
        },
      },
    ],
  },
};

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return( 
  <>
   <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jobsSchema),
        }}
      />
      
  {children}
  </>);
}