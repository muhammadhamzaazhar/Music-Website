"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

const featuredWebinars = [
  {
    id: 1,
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    id: 2,
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },

  {
    id: 5,
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    id: 6,
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const UpcomingWebinars = () => {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            Featured Webinars
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl ">
            Enhnace Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          {featuredWebinars.map((webinar) => (
            <HoverEffect
              key={webinar.id}
              items={[
                {
                  title: webinar.title,
                  description: webinar.description,
                  link: "/",
                },
              ]}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white
               border-neutral-200 dark:border-slate-800"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpcomingWebinars;
