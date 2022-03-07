import { ChevronRightIcon } from "@heroicons/react/outline";
import React, { MouseEventHandler } from "react";
import Dashboard from "../../images/dashboard.png";
import ResellerTools from "../../images/reseller-tools.png";
import ExpandableApi from "../../images/expandable-api.png";
import {
  AcademicCapIcon,
  CalendarIcon,
  CogIcon,
  FireIcon,
  LightningBoltIcon,
  PuzzleIcon,
} from "@heroicons/react/solid";

type Props = {
  onDemoClick: MouseEventHandler<HTMLButtonElement>;
  onTechClick: MouseEventHandler<HTMLButtonElement>;
};
const PartnerSection: React.FC<Props> = ({ onDemoClick, onTechClick }) => {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="relative mt-16">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-40">
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500">
                For Charging Station Installers and Resellers - The Tools You
                Need to Scale
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our team has helped install over 1,000 charging stations, and
                we've learned plenty of things along the way. Now, we've taken
                that knowledge and are giving it to you! We've developed a
                fine-tuned tool suite specifically designed for installers and
                resellers that alleviates the biggest pain points with
                installation. We cover product acquisition, network onboarding,
                site payouts, and everything in between.
              </p>
              <div className="mt-6">
                <button
                  onClick={onTechClick}
                  className="inline-flex flex-row items-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-600"
                >
                  <CalendarIcon className="mr-2 h-5" aria-hidden="true" />
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={ResellerTools}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-32">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500">
                For Charging Networks - An All-In-One Solution
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Whether you're looking for a fully managed network solution or
                just want a foundation to build your network off of, we've got
                you covered. You can easily manage everything right from our
                feature-rich administration dashboards while your customers see
                a custom white-labeled solution. If that's not enough, we offer
                completely open APIs and real-time event webhooks that you can
                use to power any custom solution. For when things start to grow,
                we even offer tier-1 and tier-2 technical support so your
                customers never skip a beat.
              </p>
              <div className="mt-6">
                <button
                  onClick={onDemoClick}
                  className="inline-flex flex-row items-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-600"
                >
                  <LightningBoltIcon className="mr-2 h-5" aria-hidden="true" />
                  See It In Action
                </button>
              </div>
            </div>
            {/* <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <p className="text-base text-gray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                  diam. Sit orci risus aenean curabitur donec aliquet. Mi
                  venenatis in euismod ut.&rdquo;
                </p>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Marcia Hill, Digital Marketing Manager
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div> */}
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={Dashboard}
                alt="EV Management Dashboard"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-32">
        <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:px-0 lg:pt-24 lg:pb-40">
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-primary-500">
                For Software Developers and EVSE Manufacturers - Develop at Warp
                Speed
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Go to market in record time by saving over 1,000 development
                hours with our pre-built system. We have already handled the
                heavy lifting, which frees your team up to remained
                laser-focused on your core business logic. All the data you
                could ever need is available at your fingertips with our
                real-time event webhooks and robust REST API. We understand that
                each collaboration is unique, so we encourage you to speak with
                our in-house development team to see how we can help!
              </p>
              <div className="mt-6">
                <button
                  onClick={onTechClick}
                  className="inline-flex flex-row items-center rounded-md border border-transparent bg-primary-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-600"
                >
                  <CogIcon className="mr-2 h-5" aria-hidden="true" />
                  Speak With An Engineer
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
            <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                className="w-full lg:absolute lg:right-0 lg:top-1/2 lg:h-1/3 lg:w-auto lg:max-w-none lg:-translate-y-1/2 lg:transform"
                src={ExpandableApi}
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
