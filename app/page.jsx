import Image from "next/image";
import {Hero} from "@/components/Hero";
import {About} from "@/components/About";
import {Gallery} from "@/components/Gallery";
import {Schedule} from "@/components/Schedule";
import {Booking} from "@/components/Booking";

export default function Home() {
  return (
      <main>
          <Hero/>
          <About/>
          <Gallery/>
          <Schedule/>
          <Booking/>
      </main>
  );
}
