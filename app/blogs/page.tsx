import type { Metadata } from "next";
import Blogs from "@/components/Blogs/Blogs";
import Hero from "@/components/Blogs/Hero";

export const metadata: Metadata = {
  title: "Blog | Nice Recruiting Agency",
  description:
    "Insights, tips and updates on manpower recruitment, Gulf employment, and workforce management from the Nice Recruiting Agency team.",
};

export default function BlogsPage() {
  return (
    <div>
      <Hero />
      <Blogs />
    </div>
  );
}
