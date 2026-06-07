import { Metadata } from "next";
import { getOutletBySlug } from "@/lib/outlets";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const outlet = getOutletBySlug(slug);

  if (!outlet) return {};

  return {
    title: `${outlet.city} Office | Nice Recruitment Agency`,
    description: outlet.description,

    alternates: {
      canonical: `https://www.nicerecruitment.org/outlets/${slug}`,
    },

    openGraph: {
      title: `${outlet.city} Office | Nice Recruitment Agency`,
      description: outlet.description,
      url: `https://www.nicerecruitment.org/outlets/${slug}`,
      siteName: "Nice Recruitment Agency",
      type: "website",
      images: [
        {
          url: outlet.heroImage,
          width: 1200,
          height: 630,
          alt: `${outlet.city} Office`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${outlet.city} Office | Nice Recruitment Agency`,
      description: outlet.description,
      images: [outlet.heroImage],
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
}

// const outletSchema = (slug: string) => {
//   const outlet = getOutletBySlug(slug);
//   if(!outlet) return null;
//  return {
//    "@context": "https://schema.org",
//   "@type": "LocalBusiness",
//   name: `Nice Recruitment Agency - ${outlet.city} Office`,
//   url: `https://www.nicerecruitment.org/outlets/${slug}`,
//   description: outlet.description,

//   image: outlet.heroImage,

//   address: {
//     "@type": "PostalAddress",
//     streetAddress: outlet.address || "",
//     addressLocality: outlet.city,
//     addressCountry: "NP",
//   },

//   telephone: outlet.phone || ["+977 970-6414359","+977 970-4804825"],
//   email: outlet.email || "info@nicerecruitment.org",

//   parentOrganization: {
//     "@type": "Organization",
//     name: "Nice Recruitment Agency",
//     url: "https://www.nicerecruitment.org",
//     logo: "https://www.nicerecruitment.org/logo/favicon.png",
//   },

//   areaServed: "NP",

// }
// };

export default function OutletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
