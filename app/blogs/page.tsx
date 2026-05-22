import type { Metadata } from "next";
import Blogs from "@/components/Blogs/Blogs";

export const metadata: Metadata = {
  title: "Blog | Nice Recruiting Agency",
  description:
    "Insights, tips and updates on manpower recruitment, Gulf employment, and workforce management from the Nice Recruiting Agency team.",
};

export default function BlogsPage() {
  return (
    <div>
      {/* <Hero /> */}
      <Blogs />
    </div>
  );
}
