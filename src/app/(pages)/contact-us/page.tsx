import type { Metadata } from "next";

import ContactUs from "@/components/blocks/contact-us/contact-us";

import { SITE_LANGUAGE_TAG, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us - ${SITE_NAME}`,
  description:
    `Contact ${SITE_NAME} for inquiries, reporting inaccuracies, partnerships, or feedback.`,
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: `Contact Us - ${SITE_NAME}`,
    description:
      `Contact page for questions, reporting inaccuracies, partnerships, and support related to ${SITE_NAME}.`,
    type: "website",
    url: `${SITE_URL}/contact-us`,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}#contact`,
      name: `Contact Us - ${SITE_NAME}`,
      description:
        `Contact ${SITE_NAME} for inquiries, partnerships, feedback, or reporting inaccurate content.`,
      url: `${SITE_URL}/contact-us`,
      inLanguage: SITE_LANGUAGE_TAG,
    },
  ],
};

const ContactPage = () => {
  return (
    <div>
      <ContactUs />
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
};

export default ContactPage;
