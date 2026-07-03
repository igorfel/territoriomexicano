import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { About } from "@/components/sections/About";
import { Story } from "@/components/sections/Story";
import { FeaturedDishes } from "@/components/sections/FeaturedDishes";
import { Experience } from "@/components/sections/Experience";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { HappyHour } from "@/components/sections/HappyHour";
import { ReservationBanner } from "@/components/sections/ReservationBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Location } from "@/components/sections/Location";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Tacos de barbacoa",
          "Margaritas artesanais",
          "Rodízio mexicano",
          "Tortillas feitas na casa",
          "Tequila 100% agave",
          "¡Buen provecho!",
        ]}
      />
      <About />
      <Story />
      <FeaturedDishes />
      <Experience />
      <GalleryPreview />
      <EventsPreview />
      <HappyHour />
      <ReservationBanner />
      <Testimonials />
      <InstagramFeed />
      <Location />
    </>
  );
}
