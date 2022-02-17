import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, ChevronRightIcon, MenuIcon, XIcon } from '@heroicons/react/solid';
import React, { Fragment } from 'react';
import Logo from '../images/logo';
import { OfficeBuildingIcon, ShieldCheckIcon, TruckIcon } from '@heroicons/react/outline';

const solutions = [
  {
    name: 'EV Charging Station Installation',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/solutions/ev-charging-stations',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'EV Network Software and Support',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/solutions/ev-network-management',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Fleet & Utility Management',
    description: "Your customers' data will be safe and secure.",
    href: '/solutions/fleet-utility-management',
    icon: TruckIcon,
  },
];

const resources = [
  {
    name: 'EV Charging Incentives',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Case Studies',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Header = () => (
  <Popover className='relative'>
    <div className='flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10'>
      <div>
        <a href='/' className='flex w-32 h-full'>
          <span className='sr-only'>Powor</span>
          <Logo fill='#4F46E5' />
        </a>
      </div>
      <div className='-mr-2 -my-2 md:hidden'>
        <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
          <span className='sr-only'>Open menu</span>
          <MenuIcon className='h-6 w-6' aria-hidden='true' />
        </Popover.Button>
      </div>
      <div className='hidden md:flex-1 md:flex md:items-center md:justify-between'>
        <nav className='flex space-x-10'>
          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-white' : 'text-gray-300',
                    'group rounded-md inline-flex items-center text-base font-medium hover:text-white'
                  )}>
                  <span>Solutions</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-white' : 'text-gray-300',
                      'ml-2 h-5 w-5 group-hover:text-white'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'>
                  <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in-out duration-150'>
                            <item.icon
                              className='flex-shrink-0 h-6 w-6 text-indigo-600'
                              aria-hidden='true'
                            />
                            <div className='ml-4'>
                              <p className='text-base font-medium text-gray-900'>{item.name}</p>
                              <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <Popover className='relative'>
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? 'text-white' : 'text-gray-300',
                    'group rounded-md inline-flex items-center text-base font-medium hover:text-white'
                  )}>
                  <span>Resources</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? 'text-white' : 'text-gray-300',
                      'ml-1 h-5 w-5 group-hover:text-white'
                    )}
                    aria-hidden='true'
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='opacity-0 translate-y-1'
                  enterTo='opacity-100 translate-y-0'
                  leave='transition ease-in duration-150'
                  leaveFrom='opacity-100 translate-y-0'
                  leaveTo='opacity-0 translate-y-1'>
                  <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0'>
                    <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                      <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                        {resources.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className='-m-3 p-3 block rounded-md hover:bg-gray-50'>
                            <p className='text-base font-medium text-gray-900'>{item.name}</p>
                            <p className='mt-1 text-sm text-gray-500'>{item.description}</p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </nav>

        <div className='flex items-center md:ml-12'>
          <a
            href='#'
            className='text-base font-medium group text-gray-300 hover:text-white inline-flex items-center'>
            Management Portal
            <ChevronRightIcon className='text-gray-500 ml-0.5 h-5 w-5 group-hover:text-gray-300' />
          </a>
          <a
            href='#'
            className='ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
            Let's Talk!
          </a>
        </div>
      </div>
    </div>

    <Transition
      as={Fragment}
      enter='duration-200 ease-out'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='duration-100 ease-in'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'>
      <Popover.Panel
        focus
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50'>
        <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
          <div className='pt-5 pb-6 px-5'>
            <div className='flex items-center justify-between'>
              <div>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                  alt='Workflow'
                />
              </div>
              <div className='-mr-2'>
                <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='h-6 w-6' aria-hidden='true' />
                </Popover.Button>
              </div>
            </div>
            <div className='mt-6'>
              <nav className='grid gap-6'>
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                    <div className='ml-4 text-base font-medium text-gray-900'>{item.name}</div>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className='py-6 px-5'>
            <div className='grid grid-cols-2 gap-4'>
              <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Pricing
              </a>

              <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Docs
              </a>

              <a href='#' className='text-base font-medium text-gray-900 hover:text-gray-700'>
                Enterprise
              </a>
              {resources.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-base font-medium text-gray-900 hover:text-gray-700'>
                  {item.name}
                </a>
              ))}
            </div>
            <div className='mt-6'>
              <a
                href='#'
                className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700'>
                Sign up
              </a>
              <p className='mt-6 text-center text-base font-medium text-gray-500'>
                Existing customer?{' '}
                <a href='#' className='text-indigo-600 hover:text-indigo-500'>
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>
);

export default Header;
