import Hero from "@/components/Home/Hero";
import AboutNice from "@/components/Home/AboutNice";
import CtaSection from "@/components/Home/CtaSection";
import { Globe } from "@/components/Home/Globe";
import Process from "@/components/Home/Process";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Main from "../components/Home/Main";
import Outlets from "@/components/Home/Outlets";
export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nicerecruitment.org/#organization",
        name: "Nice Recruitment Agency",
        url: "https://nicerecruitment.org",
        logo: "https://nicerecruitment.org/og/og-nice.jpg",
        description:
          "Nice Recruitment Agency is a trusted manpower recruitment agency in Nepal connecting skilled Nepali workers with international employers.",
        email: "info@nicerecruitment.org",
        telephone: ["+977 970-6414359","+977 970-4804825"],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kathmandu",
          addressCountry: "NP",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://nicerecruitment.org/#website",
        url: "https://nicerecruitment.org",
        name: "Nice Recruitment Agency",
        publisher: {
          "@id": "https://nicerecruitment.org/#organization",
        },
      },
      {
        "@type": "Service",
        name: "Overseas Recruitment Services",
        provider: {
          "@id": "https://nicerecruitment.org/#organization",
        },
        serviceType: "Manpower Recruitment",
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <div className="font-fustat">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Hero />
      <AboutNice />
      <WhyChooseUs />
      <Globe />
      <Main />
      <Process />
      <Outlets />
      <Testimonials />
      <CtaSection />
    </div>
  );
}
