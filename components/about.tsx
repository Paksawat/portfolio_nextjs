"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.6);

  return (
    <motion.section
      ref={ref}
      className="text-center leading-8 mb-[8rem] max-w-[50rem] scroll:mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me </SectionHeading>
      <p className="mb-3">
        While studying for my Bachelor in
        <span className="font-medium"> Web Development</span>, I worked
        with&nbsp;
        <span className="font-medium">Angular</span> as a student worker and as
        an intern. Have already been a part of a larger company for 8 months, I
        have the fire and drive, as a new developer but the approach of a&nbsp;
        <span className="font-medium">professional</span>. What really drives me
        is solving user needs with a&nbsp;
        <span className="font-medium">beautiful and functional UI</span>. To do
        this i like diving into new technologies to fit the need of the problem.
        Having this mindset have made me work with&nbsp;
        <span className="font-medium">
          Vue, React, Astro, TypeScript, Cypress and UI design in Figma&nbsp;
        </span>
        - to name a few.
      </p>
      <p className="italic">
        When im not coding, I enjoy reading, playing video games, see whats new
        on Netflix and recently picked up gardening, where i now have a small
        herb garden.
      </p>
    </motion.section>
  );
}
