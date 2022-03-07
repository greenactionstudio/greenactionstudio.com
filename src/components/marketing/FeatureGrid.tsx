import React from "react";
import {
  HeartIcon,
  ShareIcon,
  ChartBarIcon,
  BookOpenIcon,
  GlobeIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  DesktopComputerIcon,
  CreditCardIcon,
  ClockIcon,
  UserGroupIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "OCPP and OCPI Compatibility",
    icon: BookOpenIcon,
  },
  {
    name: "Smart Charging and OpenADR Integration",
    icon: ChartBarIcon,
  },
  {
    name: "Plug & Charge™ Support",
    icon: GlobeIcon,
  },
  {
    name: "24 / 7 EVSE Monitoring",
    icon: HeartIcon,
  },
  {
    name: "Tier 1 & 2 Technical Support Team",
    icon: ShieldCheckIcon,
  },
  {
    name: "Installer Project Management Tool Suite",
    icon: AcademicCapIcon,
  },
  {
    name: "Fleet Management and Pricing Groups",
    icon: UserGroupIcon,
  },
  {
    name: "Branded Self-Service Management Portal",
    icon: DesktopComputerIcon,
  },
  {
    name: "Integrated Payment Processing",
    icon: CreditCardIcon,
  },
  {
    name: "Robust REST API Ecosystem",
    icon: ShareIcon,
  },
  {
    name: "Real-Time Event Webhooks",
    icon: ClockIcon,
  },
  {
    name: "In-House US Based Software Team",
    icon: AdjustmentsIcon,
  },
];

export default function FeatureGrid() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-4">
      <h2 className="text-5xl font-extrabold tracking-tight text-white">
        EV Charging Software Built For Tomorrow, That You Can Access Today
      </h2>
      <p className="mt-4 max-w-5xl text-lg text-gray-50">
        Our team works closely with EV drivers, station manufacturers, site
        hosts, 3rd party tools, and more to provide a platform that they love.
        We're extremely proud of what we've accomplished so far, and cannot wait
        to continue to add new things to make the experience even better.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        {features.map((feature, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-white bg-opacity-10">
                <feature.icon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div className="mt-6">
              <h3 className="text-center text-lg font-medium text-white">
                {feature.name}
              </h3>
              {/* <p className="mt-2 text-center text-base text-primary-200">
                {feature.description}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
