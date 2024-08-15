"use client";

import Image from "next/image";

// import { useGSAP } from "@gsap/react"
// import { useGsap}
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CardsAndMachine() {
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  // useGSAP(() => {
  //     const timeline = gsap.timeline({
  //         scrollTrigger: {
  //             trigger: 'img[alt="slot machine"]',
  //             markers: true,
  //             start: () => `top ${document.querySelector('img[alt="slot machine"]')?.getBoundingClientRect().top}`,
  //             scrub: 1,
  //             snap: {
  //                 snapTo: [0, 1],
  //                 ease: 'power2.inOut',
  //                 duration: 2
  //             }
  //         }
  //     })

  //     timeline
  //         .to('img[alt="slot machine"]', {
  //             xPercent: 80
  //         })

  // }, {})
  return (
    <Image
      src="/slotmachine.png"
      alt="slot machine"
      width={449.65}
      height={669.1}
    />
  );
}
