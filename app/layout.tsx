import type { Metadata } from "next";
import { Fustat, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LenisWrapper from "@/components/LenisWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const fustat=Fustat({
  subsets:["latin"],
  weight:["200","300","400","500","600","700","800"],
  variable:"--font-fustat"
})
export const metadata: Metadata = {
  title: "Nice Recruiting Agency | Trusted Manpower from Nepal to the Gulf",
  description:
    "Nepal's government-licensed manpower recruitment agency. We connect skilled, verified Nepali workers with top employers across UAE, Qatar, Saudi Arabia, Kuwait, Oman, and Bahrain.",
  keywords:"Nice Recruitment Agency,Manpower Agency Nepal, Foreign Employment Agency Nepal, Recruitment Agency in Nepal, Job Consultancy Nepal",
  alternates:{
    canonical: "https://nicerecruitment.org"
  },
  openGraph:{
    title: "Nice Recruitment Agency | Trusted Manpower from Nepal to the Gulf",
    description: "Nepal's government-licensed manpower recruitment agency. We connect skilled, verified Nepali workers with top employers across UAE, Qatar, Saudi Arabia, Kuwait, Oman, and Bahrain.",
    url: "https://nicerecruitment.org",
    siteName: "Nice Recruitment Agency",
    images: [
      {
        url: "https://nicerecruitment.org/logo/favicon.png",
        width: 1200,
        height: 630,
        alt: "Nice Recruitment Agency | Trusted Manpower from Nepal to the Gulf"
      }
    ],
    locale: "en_US",
    type: "website",
  },

  twitter:{
    card: "summary_large_image",
    title: "Nice Recruitment Agency | Trusted Manpower from Nepal to the Gulf",
    description:
      "Nepal's government-licensed manpower recruitment agency. We connect skilled, verified Nepali workers with top employers across UAE, Qatar, Saudi Arabia, Kuwait, Oman, and Bahrain.",
    images: ["https://nicerecruitment.org/logo/favicon.png"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${fustat.variable} antialiased bg-white `}
        suppressHydrationWarning={true}
      >
        <LenisWrapper>
          <Navbar />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
