import React from 'react';

type Props = {
  features: {
    name: string;
    description: string;
    icon?: (props: React.ComponentProps<'svg'>) => JSX.Element;
    comingSoon?: boolean;
  }[];
};

export default function FeatureGrid({ features }: Props) {
  return (
    <div className='bg-indigo-700'>
      <div className='max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-white tracking-tight'>
          An EV Charging Solution Built For Tomorrow, That You Can Use Today.
        </h2>
        <p className='mt-4 max-w-3xl text-lg text-indigo-200'>
          We work with EV drivers everyday to bring them a platform they love to use. We're
          confident that you'll feel the same way.
        </p>
        <div className='mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16'>
          {features.map((feature, index) => (
            <div key={index}>
              <div className='flex justify-center'>
                {feature.comingSoon ? (
                  <span className='inline-flex items-center my-1.5 px-3 py-2 rounded-full text-sm font-medium bg-white bg-opacity-10 text-white'>
                    Coming Soon
                  </span>
                ) : (
                  <span className='flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10'>
                    <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
                  </span>
                )}
              </div>
              <div className='mt-6'>
                <h3 className='text-center text-lg font-medium text-white'>{feature.name}</h3>
                <p className='text-center mt-2 text-base text-indigo-200'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
