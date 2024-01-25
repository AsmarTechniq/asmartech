import React from 'react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <section id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-red-600'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-500 text-base lg:text-lg'>
            I am a self taught designer with experience
            In creating digital interfaces , websites, and social media design but I also have the ability t bring those concepts to life through creative front-end development.
          </p>
          <p className="text-base lg:text-lg py-2 leading-8 text-gray-500 dark:text-gray-500">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-red-600"> agencies </span>
            consulted for <span className="text-red-600">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p>
          <p className="text-base lg:text-lg py-2 leading-8 text-gray-500 dark:text-gray-500">
            I offer from a wide range of services, including brand design, programming and digital marketing.
          </p>
          <Link href='/#projects' legacyBehavior>
            <p className='py-2 text-red-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
