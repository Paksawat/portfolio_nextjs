"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      className="text-center leading-8 sm:mb-40 max-w-[50rem] scroll:mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="contact"
    >
      <SectionHeading>Contact</SectionHeading>

      <h3 className="font-bold text-4xl">Let&#39;s work together!</h3>
      <p className="mb-8">
        I&#39;m looking for new adventures, so let&#39;s grab a coffee and talk!
      </p>
      <div className="flex flex-wrap gap-16 justify-center">
        <div>
          <p className="font-bold">Telefon</p>
          <a className="underline text-cyan-500" href="tel:+4542770526">
            +(45) 42770526
          </a>
        </div>
        <div>
          <p className="font-bold">E-mail</p>
          <a
            className="underline text-cyan-500"
            href="mailto:paksawat@gmail.com"
          >
            Paksawat@gmail.com
          </a>
        </div>
      </div>
    </motion.section>
  );
}
