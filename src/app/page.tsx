"use client";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../components/home/Banner"));

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <main>
      <div>
        <Banner />
      </div>
    </main>
  );
}
