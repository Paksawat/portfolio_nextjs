"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src="/portrait.jpg"
            alt="David portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-32 w-32 rounded-full border-[0.35rem] border-white object-cover shadow-xl dark:border-gray-900"
          />
        </motion.div>
      </div>

      <motion.p
        className="mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello there! I&#39;m David</span>, a
        <span className="font-bold"> frontend developer </span>
        and an avid <span className="font-bold"> UI designer. </span> I really
        enjoy building, user friendly and awesome interfaces, diving into
        different
        <span className="font-bold"> frameworks and technologies.</span>
      </motion.p>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-small italic !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        In my spare time I enjoy helping local businesses creating an online
        presence. You should
        <a
          target="_blank"
          href="https://www.paksaweb.dk/"
          className="underline text-blue-950 ml-3 hover:text-cyan-900 dark:text-cyan-600"
        >
          Check it out!
        </a>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Let&apos;s talk!
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition dark:bg-slate-800"
          href="/CV_David_Paksawat.pdf"
          download
        >
          Download CV
          <HiDownload className=" opacity-60 group-hover:translate-y-0.5 transition" />
        </a>
        <a
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-110  active:scale-105 transition dark:bg-gray-700 dark:text-white"
          href="https://github.com/PaksawatDev?tab=repositories"
        >
          <BsLinkedin />
        </a>
        <a
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full hover:scale-110  active:scale-105 transition dark:bg-gray-700 dark:text-white"
          href="https://www.linkedin.com/in/david-paksawat-5698a5b9/"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
