import { Metadata } from "next";
import { getBlogBySlug, getAllSlugs, blogs } from "@/lib/blogs";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) return {};

  return {
    title: `${blog.title} | Nice Recruitment Agency Blog`,
    description: blog.description,
    alternates: {
      canonical: `https://nicerecruitment.org/blogs/${slug}`,
    },

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://nicerecruitment.org/blogs/${slug}`,
      siteName: "Nice Recruitment Agency",
      type: "article",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.image],
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

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
