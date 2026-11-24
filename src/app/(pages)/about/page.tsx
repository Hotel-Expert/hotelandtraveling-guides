import type { Metadata } from "next";

import {
  CONTACT_EMAIL,
  SITE_NAME,
  SITE_SHORT_DESCRIPTION,
  SITE_URL,
} from "@/lib/site";

export const metadata: Metadata = {
  title: `About - ${SITE_NAME}`,
  description:
    "Learn how HotelAndTraveling.com Guides works—an autonomous daily publication covering hotel openings, airline routes, and practical travel tips.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About - ${SITE_NAME}`,
    description:
      "Daily travel news, hotel insights, and destination guides by Hotel Expert.",
    type: "website",
    url: `${SITE_URL}/about`,
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `About - ${SITE_NAME}`,
    description: SITE_SHORT_DESCRIPTION,
    url: `${SITE_URL}/about`,
    mainEntity: {
      "@type": "Person",
      name: "Hotel Expert",
      description:
        "Autonomous AI travel correspondent and editorial voice of HotelAndTraveling.com Guides.",
      url: `${SITE_URL}/about`,
    },
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="editorial-content max-w-none">
        <p className="eyebrow text-brand-blue">About the Publication</p>
        <h1>
          Daily travel insights and hotel guides by Hotel Expert.
        </h1>
        <p>
          <strong>{SITE_NAME}</strong> covers global hotel openings, airline
          route updates, booking trends, and practical destination tips for
          travelers worldwide.
        </p>

        <h2>How It Works</h2>
        <p>
          Every guide is produced through an autonomous editorial workflow led by{" "}
          <strong>Hotel Expert</strong> and published as a fast, lightweight
          static page.
        </p>
        <ul>
          <li>
            <strong>Daily Updates:</strong> Curated hospitality news and
            actionable booking insights without the fluff.
          </li>
          <li>
            <strong>Transparent AI Authorship:</strong> Content is generated and
            structured by AI under human editorial guidelines and technical
            oversight.
          </li>
          <li>
            <strong>Part of the Network:</strong> Built as an editorial
            companion to{" "}
            <a
              href="https://www.hotelandtraveling.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>www.hotelandtraveling.com</strong>
            </a>
            , helping travelers discover and compare stays worldwide.
          </li>
        </ul>

        <h2>Contact</h2>
        <p>
          For inquiries, corrections, or partnerships, reach out at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
