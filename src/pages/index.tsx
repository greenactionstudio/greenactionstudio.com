import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/solid';
import {
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  SupportIcon,
  AdjustmentsIcon,
  ShareIcon,
  ChartBarIcon,
  LightningBoltIcon,
} from '@heroicons/react/outline';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FeatureGrid from '../components/marketing/FeatureGrid';
import PartnerSection from '../components/marketing/PartnerSection';

const features = [
  {
    name: 'OCPP and OCPI Compatibility',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ShareIcon,
  },
  {
    name: 'Smart Charging and OpenADR Integration',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChartBarIcon,
  },
  {
    name: 'ISO15118 Plug and Charge Support',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Installation and Onboarding Tool Suite',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: SupportIcon,
  },

  {
    name: 'Self-Healing EVSE Monitoring',
    description: `We're able to solve 95% of issues remotly without any human intervention.`,
    icon: HeartIcon,
  },
  {
    name: 'Utility and Incentive Compliance Assistance',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: DocumentReportIcon,
  },
  {
    name: 'Full-Service Technical Support',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ChatAltIcon,
  },
  {
    name: 'Intuiative Self-Service Management Portal',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: AdjustmentsIcon,
  },
];

export default function Index() {
  return (
    <div className='relative overflow-hidden'>
      <div className='bg-gray-900'>
        <Header />
      </div>

      <main>
        <div className='relative pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-48 lg:overflow-hidden'>
          <div className='mx-auto max-w-7xl lg:px-8'>
            <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
                <div className='lg:py-24'>
                  <a
                    href='#'
                    className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'>
                    <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full'>
                      We're hiring
                    </span>
                    <span className='ml-4 text-sm'>Visit our careers page</span>
                    <ChevronRightIcon className='ml-2 w-5 h-5 text-gray-500' aria-hidden='true' />
                  </a>
                  <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 lg:mt-6'>
                    <span className='block'>Let's Change the World,</span>
                    <span className='block sm:text-6xl xl:text-6xl text-indigo-400'>
                      One Charge at a Time
                    </span>
                  </h1>
                  <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                    Join us in building the most affordable EVSE management software that used by EV
                    drivers every single day.
                  </p>
                  <div className='mt-10 sm:mt-12'>
                    <a
                      href='#'
                      className='py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900 inline-flex items-center'>
                      Schedule Time with a Specialist
                      <ChevronRightIcon className='ml-1 w-5 h-5 text-white' aria-hidden='true' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative text-center'>
                <img
                  className='w-full lg:h-full lg:w-auto lg:max-w-none m-x-auto'
                  src='https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>

        <div className='relative transform -mr-10 -mt-28 h-56 -rotate-6 bg-indigo-700 z-0'></div>

        <div className='relative -mt-28 z-50'>
          <FeatureGrid features={features} />
        </div>

        <PartnerSection />

        {/* Testimonial */}
        <div className='bg-white py-16 lg:py-24'>
          <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='relative py-24 px-8 bg-indigo-500 rounded-xl shadow-2xl overflow-hidden lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8'>
              <div className='absolute inset-0 opacity-50 filter saturate-0 mix-blend-multiply'>
                <img
                  src='https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80'
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='relative lg:col-span-1'>
                <img
                  className='h-12 w-auto'
                  src='https://tailwindui.com/img/logos/workcation-logo-white.svg'
                  alt=''
                />
                <blockquote className='mt-6 text-white'>
                  <p className='text-xl font-medium sm:text-2xl'>
                    Workflow has completely transformed how we interact with customers. We've seen
                    record bookings, higher customer satisfaction, and reduced churn.
                  </p>
                  <footer className='mt-6'>
                    <p className='flex flex-col font-medium'>
                      <span>Marie Chilvers</span>
                      <span>CEO, Workcation</span>
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
