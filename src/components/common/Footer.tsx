import { LightningBoltIcon } from '@heroicons/react/solid';
import React from 'react';

const navigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Us', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a href={item.href} className='text-base text-gray-500 hover:text-gray-900'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='flex flex-row mt-8 justify-center items-center text-center text-sm text-gray-400'>
          <span className='pr-1'>Made with</span>
          <LightningBoltIcon color={'#6366F1'} height={20} />
          <span className='px-1'>in New York.</span>
          <p>
            &copy; 2019 - {new Date().getFullYear()} Green Action Studio, LLC, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
