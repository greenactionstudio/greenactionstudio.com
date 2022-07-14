import React, { MouseEventHandler } from "react";
import { ChatAlt2Icon } from "@heroicons/react/solid";

import Logo from "../../images/logo.svg";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const statistics = [
  { number: "5,000", description: "Station Subscriptions" },
  { number: "50,000", description: "kWhs Delivered Monthly" },
  { number: "3,500", description: "Monthly Sessions" },
];

const HomepageHero: React.FC<Props> = ({ onClick }) => (
  <div className="relative bg-gray-900 pt-10 pb-32 sm:pt-16 lg:overflow-hidden lg:pb-20 lg:pt-20">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 sm:text-center lg:flex lg:items-center lg:justify-center lg:px-0">
        <div className="lg:py-24">
          <a href="/" className="mx-auto flex h-36 w-36">
            <span className="sr-only">Green Action Studio</span>
            <img src={Logo} alt="Green Action Studio" />
          </a>
          <h1 className="pt-6 text-2xl font-extrabold tracking-tight text-gray-100 sm:mt-5 lg:mt-6 lg:text-4xl">
            <span className="block">The EV Charging</span>
            <span className="block text-4xl text-primary-500 lg:text-6xl">
              Software Solution
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            We're Green Action Studio (GAS for short 😉) and we make managing EV
            charging easy. Whether you have a single plug or a nationwide
            charging network, we provide the tools you need to get things done.
            From a fully managed service to a robust foundation for your next EV
            business, we'd love to help!
          </p>
          <div className="mt-10 sm:mt-12">
            <button
              onClick={onClick}
              className="inline-flex items-center rounded-md bg-primary-500 py-3 px-4 font-medium text-white shadow hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              <ChatAlt2Icon
                className="mr-2 hidden h-5 lg:block"
                aria-hidden="true"
              />
              Speak with Our EV Charging Team
            </button>
          </div>
          <div className="grid grid-cols-1 gap-16 pt-20 text-center lg:grid-cols-3 lg:gap-24">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col text-lg font-light text-white"
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="text-5xl font-extralight">
                    {stat.number}
                  </span>
                  <span className="ml-2 font-medium">+</span>
                </div>
                <span>{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomepageHero;
