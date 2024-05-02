import React from "react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-slate-900 text-gray-300 flex justify-center flex-col text-center py-8 px-4"
    >
      <small>&copy; 2024 David. All rights reserved.</small>
      <p className="mt-2">
        <span className="font-bold">About this website:</span>&nbsp; build with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS
        & Framer Motion.
      </p>
    </footer>
  );
}
