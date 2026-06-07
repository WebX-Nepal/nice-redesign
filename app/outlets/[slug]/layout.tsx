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
      canonical: `https://nicerecruitment.org/outlets/${slug}`,
    },

    openGraph: {
      title: `${outlet.city} Office | Nice Recruitment Agency`,
      description: outlet.description,
      url: `https://nicerecruitment.org/outlets/${slug}`,
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


export default function OutletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
