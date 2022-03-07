import { LightningBoltIcon } from "@heroicons/react/solid";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex flex-row items-center justify-center text-center text-sm text-gray-400">
          <span className="pr-1">Made with</span>
          <LightningBoltIcon className="h-5 text-primary-500" />
          <span className="px-1">in New York.</span>
          <p>
            &copy; 2019 - {new Date().getFullYear()} Green Action Studio, LLC,
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
