import React from 'react';

import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function Index() {
  return (
    <div className='relative bg-gray-900 overflow-hidden'>
      <div className='hidden sm:block sm:absolute sm:inset-0' aria-hidden='true'>
        <svg
          className='absolute bottom-0 right-0 transform translate-x-1/2 mb-48 text-gray-700 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0'
          width={364}
          height={384}
          viewBox='0 0 364 384'
          fill='none'>
          <defs>
            <pattern
              id='eab71dd9-9d7a-47bd-8044-256344ee00d0'
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits='userSpaceOnUse'>
              <rect x={0} y={0} width={4} height={4} fill='currentColor' />
            </pattern>
          </defs>
          <rect width={364} height={384} fill='url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)' />
        </svg>
      </div>
      <Header />
      <main>
        <div className='relative mx-auto max-w-7xl py-16'>
          <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
            <div className='px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center'>
              <div>
                <h1 className='mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl'>
                  <span className='md:block'>EV Charging Stations</span>{' '}
                  <span className='text-indigo-400 md:block'>Have Never Been Easier</span>
                </h1>
                <p className='mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
                  Our experts take care of all the hassles. You customers plug in and charge up.
                  It's that easy.
                </p>
                <p className='mt-20 text-sm text-white uppercase tracking-wide font-semibold sm:mt-20'>
                  We've Installed Stations For
                </p>
                <div className='mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0'>
                  <div className='flex flex-wrap items-start justify-between'>
                    <div className='flex justify-center px-1'>
                      <img
                        className='h-9 sm:h-10'
                        src='https://tailwindui.com/img/logos/tuple-logo-gray-400.svg'
                        alt='Tuple'
                      />
                    </div>
                    <div className='flex justify-center px-1'>
                      <img
                        className='h-9 sm:h-10'
                        src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                        alt='Workcation'
                      />
                    </div>
                    <div className='flex justify-center px-1'>
                      <img
                        className='h-9 sm:h-10'
                        src='https://tailwindui.com/img/logos/statickit-logo-gray-400.svg'
                        alt='StaticKit'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-16 sm:mt-24 lg:mt-0 lg:col-span-6'>
              <div className='bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden'>
                <div className='px-4 py-8 sm:px-10'>
                  <div className='text-center'>
                    <h2 className='text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl'>
                      Need More Info?
                    </h2>
                  </div>
                  <div className='mt-6'>
                    <form
                      action='#'
                      method='POST'
                      className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
                      <div className='sm:col-span-2'>
                        <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                          Name
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='name'
                            id='name'
                            autoComplete='name'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                          Work Email
                        </label>
                        <div className='mt-1'>
                          <input
                            id='email'
                            name='email'
                            type='email'
                            autoComplete='email'
                            className='py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <label
                          htmlFor='phone-number'
                          className='block text-sm font-medium text-gray-700'>
                          Phone Number
                        </label>
                        <div className='mt-1 relative rounded-md shadow-sm'>
                          <div className='absolute inset-y-0 left-0 flex items-center'>
                            <label htmlFor='country' className='sr-only'>
                              Country
                            </label>
                            <select
                              id='country'
                              name='country'
                              className='h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 focus:ring-indigo-500 focus:border-indigo-500 rounded-md'>
                              <option>US</option>
                              <option>CA</option>
                              <option>EU</option>
                            </select>
                          </div>
                          <input
                            type='text'
                            name='phone-number'
                            id='phone-number'
                            autoComplete='tel'
                            className='py-3 px-4 block w-full pl-20 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                            placeholder='+1 (555) 987-6543'
                          />
                        </div>
                      </div>

                      <div className='sm:col-span-2'>
                        <button
                          type='submit'
                          className='w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Talk with an EV Specialist
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/**
         * Content Start
         */}
        <div className='relative py-16 bg-white overflow-hidden'>
          <div className='hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full'>
            <div className='relative h-full text-lg max-w-prose mx-auto' aria-hidden='true'>
              <svg
                className='absolute top-12 left-full transform translate-x-32'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'>
                <defs>
                  <pattern
                    id='74b3fd99-0a6f-4271-bef2-e80eeafdf357'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)' />
              </svg>
              <svg
                className='absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'>
                <defs>
                  <pattern
                    id='f210dbf6-a58d-4871-961e-36d5016a0f49'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#f210dbf6-a58d-4871-961e-36d5016a0f49)' />
              </svg>
              <svg
                className='absolute bottom-12 left-full transform translate-x-32'
                width={404}
                height={384}
                fill='none'
                viewBox='0 0 404 384'>
                <defs>
                  <pattern
                    id='d3eb07ae-5182-43e6-857d-35c643af9034'
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits='userSpaceOnUse'>
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className='text-gray-200'
                      fill='currentColor'
                    />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill='url(#d3eb07ae-5182-43e6-857d-35c643af9034)' />
              </svg>
            </div>
          </div>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='text-lg max-w-prose mx-auto'>
              <h1>
                <span className='block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase'>
                  Introducing
                </span>
                <span className='mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  JavaScript for Beginners
                </span>
              </h1>
              <p className='mt-8 text-xl text-gray-500 leading-8'>
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui
                mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla
                orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
            </div>
            <div className='mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto'>
              <p>
                Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed{' '}
                <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
                <a href='#'>Mattis mauris semper</a> sed amet vitae sed turpis id.
              </p>
              <ul role='list'>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo
                sit viverra aliquam porttitor ultrices gravida eu. Tincidunt leo, elementum mattis
                elementum ut nisl, justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <h2>From beginner to expert in 30 days</h2>
              <p>
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis
                arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat
                vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris.
                Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                ipsum eu a sed convallis diam.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
                  consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu
                  morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
                penatibus risus viverra tellus varius sit neque erat velit.
              </p>
              <figure>
                <img
                  className='w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3'
                  alt=''
                  width={1310}
                  height={873}
                />
                <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
              </figure>
              <h2>Everything you need to get up and running</h2>
              <p>
                Purus morbi dignissim senectus mattis <a href='#'>adipiscing</a>. Amet, massa quam
                varius orci dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
                tristique. Tincidunt sed tempus ut viverra ridiculus non molestie. Gravida quis
                fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                congue erat ac. Cras fermentum convallis quam.
              </p>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio
                penatibus risus viverra tellus varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
