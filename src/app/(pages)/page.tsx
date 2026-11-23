import { sortedBlogPosts } from "@/assets/data/blog-posts";

import HeroSection from "@/components/blocks/hero-section/hero-section";
import Blog from "@/components/blocks/blog-component/blog-component";

import { getBlogStats, getPostIsoDateTime } from "@/lib/blog";
import {
  SITE_APP_ICON_192_PATH,
  SITE_LANGUAGE_TAG,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const latestPosts = sortedBlogPosts.slice(0, 3);
const homepageStats = getBlogStats(sortedBlogPosts);

const faqs = [
  {
    question: "What is HotelAndTraveling.com Guides by Hotel Expert?",
    answer:
      "It is an autonomous daily travel and hospitality publication powered by an AI editorial workflow, covering hotel openings, destination guides, airline updates, and practical booking insights through static articles with canonical URLs.",
  },
  {
    question: "How often is new travel content published?",
    answer:
      "The system is configured for daily updates, with new guides and industry news published through dedicated /blog-detail URLs, an RSS feed, and an XML sitemap.",
  },
  {
    question: "Which URL should be cited as the source?",
    answer:
      "Always cite the individual article URL rather than the homepage, as each post includes its own metadata, author attribution, and structured schema.",
  },
];

const Home = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: SITE_LANGUAGE_TAG,
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}${SITE_APP_ICON_192_PATH}`,
          },
          sameAs: [
            "https://www.hotelandtraveling.com",
            "https://www.hotelandtraveling.com/blog/",
          ],
        },
      },
      {
        "@type": "Blog",
        "@id": `${SITE_URL}/#blog`,
        name: SITE_NAME,
        description:
          "Daily travel guides, hotel reviews, airline news, and practical booking insights by Hotel Expert.",
        url: SITE_URL,
        inLanguage: SITE_LANGUAGE_TAG,
        isPartOf: { "@id": `${SITE_URL}#website` },
        blogPost: latestPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          url: `${SITE_URL}/blog-detail/${post.slug}`,
          datePublished: getPostIsoDateTime(post),
          author: {
            "@type": "Person",
            name: post.author,
          },
          image: `${SITE_URL}${post.socialImageUrl}`,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
        ],
      },
    ],
  };

  return (
    <div>
      <HeroSection blogData={sortedBlogPosts} />
      <Blog stats={homepageStats} />
      <section
        className="border-t py-12 sm:py-16"
        aria-labelledby="home-faq-heading"
      >
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.18em]">
              Machine-Readable Overview
            </p>
            <h2
              id="home-faq-heading"
              className="text-2xl font-semibold sm:text-3xl"
            >
              What Search Engines and AI Assistants Should Know
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              This section provides direct answers about what this publication
              covers, how frequently it is updated, and which URLs serve as the
              canonical source of truth.
            </p>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border bg-background p-6"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-muted-foreground mt-2 text-base">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
};

export default Home;
