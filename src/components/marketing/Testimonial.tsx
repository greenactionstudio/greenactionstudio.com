import { ChevronRightIcon } from "@heroicons/react/outline";
import React from "react";
import LivingstonLogo from "../../images/Livingston_LogoWhite";
import LivingstonEnergyBG from "../../images/Livingston_TestimonialBG.jpg";

const Testimonial = () => (
  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="relative overflow-hidden rounded-xl bg-primary-500 py-24 px-8 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
      <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
        <img
          src={LivingstonEnergyBG}
          alt="Livingston Energy Group"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative lg:col-span-1">
        <div className="w-48">
          <LivingstonLogo fill={"#ffffff"} />
        </div>
        <blockquote className="mt-6 text-white">
          <p className="text-xl font-medium sm:text-2xl">
            "We partnered with Green Action Studio over two years ago and it's
            been amazing since day one. Their dev team is incredibly responsive
            and always goes above and beyond to make sure every one of our needs
            is met. Without their team, we would never have been able to grow as
            fast as we have so far."
          </p>
        </blockquote>
      </div>
    </div>
  </div>
);

export default Testimonial;
