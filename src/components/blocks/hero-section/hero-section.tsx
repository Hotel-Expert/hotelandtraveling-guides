import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CalendarDaysIcon, GlobeIcon } from "lucide-react";

import type { BlogPost } from "@/lib/blog";
import { formatPostDisplayDate } from "@/lib/blog";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = ({ blogData }: { blogData: BlogPost[] }) => {
  const latestPosts = blogData.slice(0, 3);

  return (
    <section id="home" className="bg-muted -mt-16 pt-28 pb-8 sm:pb-10">
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col items-center gap-3 self-center text-center">
          <Badge
            variant="outline"
            className="flex items-center gap-1.5 text-sm font-normal"
          >
            <Image
              src="/shteflogo.svg"
              alt="HotelAndTraveling.com Guides logo"
              width={16}
              height={16}
              className="h-4 w-4 rounded-sm transition-[filter] dark:brightness-0 dark:invert"
            />
            Travel News &amp; Guides • Updated Daily
          </Badge>
          <h1 className="text-2xl leading-tight font-semibold text-balance sm:text-3xl lg:text-4xl">
            Daily travel news, hotel insights, and destination guides by Hotel Expert.
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base">
            HotelAndTraveling.com Guides turns hotel openings, airline route
            updates, booking trends, and destination tips into clear, practical
            articles for travelers around the world.
          </p>
          <ul className="text-muted-foreground flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <li>Daily travel coverage</li>
            <li>Curated hotel &amp; destination guides</li>
            <li>
              <a
                href="https://www.hotelandtraveling.com"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <GlobeIcon className="size-4 shrink-0" />
                <span>Compare hotels at www.hotelandtraveling.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {latestPosts.map((item) => (
            <Link
              key={item.id}
              href={`/blog-detail/${item.slug}`}
              className="block"
            >
              <Card className="group cursor-pointer border py-0 shadow-none transition-colors hover:border-primary/40">
                <CardContent className="flex items-center gap-3 px-4 py-3">
                  <div className="min-w-0 flex-1 flex flex-col gap-1">
                    <div className="text-muted-foreground flex items-center gap-1.5 text-xs">
                      <CalendarDaysIcon className="size-3.5 shrink-0" />
                      <time dateTime={item.publishedOn}>
                        {formatPostDisplayDate(item)}
                      </time>
                    </div>
                    <h2 className="line-clamp-2 text-sm leading-snug font-medium transition-colors group-hover:text-primary">
                      {item.title}
                    </h2>
                  </div>
                  <ArrowUpRightIcon className="text-muted-foreground size-4 shrink-0 transition-colors group-hover:text-primary" />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
