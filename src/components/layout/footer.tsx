import Link from "next/link";
import { GlobeIcon, LeafIcon, RssIcon } from "lucide-react";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

const FooterTop = () => (
  <div className="flex items-center justify-between gap-4 max-md:flex-col">
    <Link href="/#home">
      <div className="flex items-center gap-3">
        <Logo className="gap-3" />
      </div>
    </Link>

    <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 whitespace-nowrap sm:gap-5">
      <span className="text-muted-foreground text-sm">
        Written by <strong>Hotel Expert</strong> with an autonomous workflow
      </span>
    </div>

    <div className="flex items-center gap-3">
      <Button variant="outline" asChild>
        <a href="https://www.hotelandtraveling.com">
          <GlobeIcon className="size-4" />
          HotelAndTraveling.com
        </a>
      </Button>
      <Link
        href="/rss.xml"
        className="text-muted-foreground hover:text-foreground"
      >
        <RssIcon className="size-5" />
        <span className="sr-only">RSS</span>
      </Link>
    </div>
  </div>
);

const colorStyles = {
  blue: "border-blue-100 bg-blue-50/50 hover:border-blue-300 hover:shadow-blue-500/10 dark:border-blue-900/50 dark:bg-blue-950/20 dark:hover:border-blue-700/50",
  purple: "border-purple-100 bg-purple-50/50 hover:border-purple-300 hover:shadow-purple-500/10 dark:border-purple-900/50 dark:bg-purple-950/20 dark:hover:border-purple-700/50",
};

const accentStyles = {
  blue: "bg-blue-500",
  purple: "bg-purple-500",
};

const textStyles = {
  blue: "text-blue-700 dark:text-blue-400",
  purple: "text-purple-700 dark:text-purple-400",
};

const NetworkCard = ({
  href,
  colorScheme,
  icon,
  title,
  description,
}: {
  href: string;
  colorScheme: "blue" | "purple";
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <a href={href} className="group block">
      <div
        className={`relative overflow-hidden rounded-xl border p-4 transition-all duration-300 hover:shadow-lg ${colorStyles[colorScheme]}`}
      >
        <div
          className={`absolute top-0 left-0 h-full w-1 rounded-l-xl ${accentStyles[colorScheme]}`}
        />
        <div
          className={`mb-1.5 flex items-center gap-2 pl-2 font-bold ${textStyles[colorScheme]}`}
        >
          <span className="text-lg">{icon}</span> {title}
        </div>
        <p className="text-muted-foreground pl-2 text-xs leading-relaxed transition-colors group-hover:text-foreground">
          {description}
        </p>
      </div>
    </a>
  );
};

const FooterMiddle = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <div className="flex flex-col gap-4">
      <h3 className="text-muted-foreground mb-1 text-sm font-bold uppercase tracking-wider">
        HotelAndTraveling Network
      </h3>

      <NetworkCard
        href="https://www.hotelandtraveling.com"
        colorScheme="blue"
        icon="🏨"
        title="HotelAndTraveling.com"
        description="Compare hotel prices worldwide, explore top destinations, and book verified stays."
      />

      <NetworkCard
        href="https://www.hotelandtraveling.com/blog/"
        colorScheme="purple"
        icon="✈️"
        title="Travel Blog"
        description="Classic destination stories, hotel spotlights, and travel inspiration from our archive."
      />
    </div>

    <div className="flex md:col-span-1 lg:col-span-2">
      <Link
        href="/responsible-ai-usage"
        className="mt-7 block h-full w-full lg:mt-0"
      >
        <div className="group relative flex h-full flex-col justify-center overflow-hidden rounded-xl border border-green-100 bg-green-50/50 p-6 transition-all duration-300 hover:border-green-300 hover:shadow-lg hover:shadow-green-500/10 dark:border-green-900/50 dark:bg-green-950/20 dark:hover:border-green-700/50">
          <div className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-green-500" />
          <div className="mb-3 flex items-center gap-2 pl-2 text-lg font-bold text-green-700 dark:text-green-400">
            <LeafIcon className="h-6 w-6" />
            Responsible AI Usage
          </div>
          <p className="text-muted-foreground max-w-2xl pl-2 text-sm leading-relaxed transition-colors group-hover:text-foreground">
            This publication is committed to transparent, reliable, and
            responsible AI journalism. Read our editorial guidelines on how
            autonomous AI assists our daily travel and hospitality reporting.
          </p>
        </div>
      </Link>
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-8 border-t bg-muted/20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 md:py-12 lg:px-8">
        <FooterTop />

        <Separator />

        <FooterMiddle />

        <Separator />

        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

const FooterBottom = () => (
  <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
    <p className="text-sm text-muted-foreground">
      {`©${new Date().getFullYear()} `}{" "}
      <Link
        href="/#home"
        className="text-foreground font-medium hover:underline"
      >
        {SITE_NAME}
      </Link>{" "}
      — smart hotel insights and daily travel guides.
      <br />
      <span className="block pt-1 text-xs">
        Part of{" "}
        <a
          href="https://www.hotelandtraveling.com"
          className="hover:text-primary underline underline-offset-2"
        >
          www.hotelandtraveling.com
        </a>
      </span>
    </p>

    <div className="max-w-xl text-left text-xs text-muted-foreground">
      <strong>Note:</strong> articles on this portal are produced through an
      autonomous AI editorial workflow. If you notice any inaccuracy or issue,
      please contact{" "}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="hover:text-primary underline underline-offset-2"
      >
        {CONTACT_EMAIL}
      </a>
      .
    </div>
  </div>
);
