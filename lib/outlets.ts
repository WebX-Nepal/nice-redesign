export interface Outlet {
  slug: string;
  city: string;
  country: string;
  flag: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  mapEmbed: string;
  heroImage: string;
  description: string;
  longDescription: string;
  services: string[];
  gallery: { src: string; caption: string }[];
  stats: { value: string; label: string }[];
}

export const outlets: Outlet[] = [
  {
    slug: "kathmandu",
    city: "Kathmandu",
    country: "Nepal",
    flag: "twemoji:flag-nepal",
    role: "Head Office",
    address: "Samakhusi, Kathmandu, Nepal",
    phone: "+977 970-6414359",
    email: "info@nicerecruitment.org",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6!2d85.3!3d27.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzAwLjAiTiA4NcKwMTgnMDAuMCJF!5e0!3m2!1sen!2snp!4v1",
    heroImage: "/office/nepal.jpg",
    description:
      "Our founding headquarters where every recruitment journey begins.",
    longDescription:
      "Established in 2005, our Kathmandu head office is the heart of Nice Recruiting Agency. Located in Samakhusi, this is where we source, screen, train, and prepare every worker before deployment to the Gulf. Our team of experienced recruiters, documentation specialists, and training coordinators work together to ensure every placement is seamless — for both the employer and the worker.\n\nThe Kathmandu office maintains direct relationships with the Department of Foreign Employment (DoFE) and all relevant government bodies, ensuring full legal compliance for every overseas placement. We also run our pre-departure training program from this facility, covering trade skills, safety, language basics, and Gulf workplace culture.",
    services: [
      "Candidate sourcing & screening",
      "Pre-departure training program",
      "Visa & documentation processing",
      "Government compliance & DoFE clearance",
      "Worker welfare & support",
      "Employer coordination",
    ],
    gallery: [
      { src: "/office/office.jpg", caption: "Our Kathmandu Office" },
      { src: "/office/about_girl.jpg", caption: "Recruitment Team" },
      { src: "/office/hands.jpg", caption: "Worker Briefing Session" },
      { src: "/office/workers.jpg", caption: "Pre-Departure Training" },
      {
        src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
        caption: "Classroom Training",
      },
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        caption: "Team Meeting",
      },
    ],
    stats: [
      { value: "2005", label: "Year Founded" },
      { value: "2,000+", label: "Workers Deployed" },
      { value: "20+", label: "Staff Members" },
      { value: "7+", label: "Gulf Countries Served" },
    ],
  },
  {
    slug: "dubai",
    city: "Dubai",
    country: "UAE",
    flag: "twemoji:flag-united-arab-emirates",
    role: "Gulf Branch",
    address: "Dubai, United Arab Emirates",
    phone: "+971 50 000 0000",
    email: "dubai@nicerecruitment.org",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.2!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA1NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sae!4v1",
    heroImage: "/office/dubai.jpg",
    description:
      "Our Gulf-facing branch handling employer relations and on-ground worker support.",
    longDescription:
      "Opened to better serve our growing base of Gulf employers, the Dubai branch acts as our on-the-ground presence in the UAE and wider Gulf region. Our Dubai team works directly with hiring companies, HR departments, and project managers to understand workforce requirements and ensure smooth worker integration.\n\nThe Dubai office also provides post-deployment support for workers already placed in the Gulf — handling any issues, coordinating with employers, and ensuring worker welfare standards are maintained. Being physically present in Dubai allows us to respond quickly to employer needs and build the kind of long-term relationships that keep our clients coming back.",
    services: [
      "Employer relations & account management",
      "On-ground worker support",
      "Post-deployment welfare monitoring",
      "Gulf market recruitment consulting",
      "Emergency worker assistance",
      "Contract & compliance review",
    ],
    gallery: [
      { src: "/office/dubai.jpg", caption: "Dubai Branch Office" },
      {
        src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
        caption: "Dubai Skyline",
      },
      {
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
        caption: "Gulf Construction Site",
      },
      {
        src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
        caption: "Client Meeting",
      },
      {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
        caption: "Worker Deployment",
      },
      {
        src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
        caption: "Security Briefing",
      },
    ],
    stats: [
      { value: "2015", label: "Branch Opened" },
      { value: "100+", label: "Gulf Employers" },
      { value: "6+", label: "Countries Covered" },
      { value: "24h", label: "Response Time" },
    ],
  },
];

export function getOutletBySlug(slug: string): Outlet | undefined {
  return outlets.find((o) => o.slug === slug);
}

export function getAllOutletSlugs(): string[] {
  return outlets.map((o) => o.slug);
}
