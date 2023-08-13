import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin, AiFillTwitterCircle, AiFillFacebook, AiFillBehanceCircle } from "react-icons/ai";


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-500'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-black'>
            Hi, I&#39;m <span className='text-red-600'>ᴍr.ᴀ</span>
          </h1>
          <h1 className='py-2 text-black'> Developer and designer.</h1>
          <p className='py-4 text-gray-500 sm:max-w-[70%] m-auto'>
            We turn ideas into reality. <br>
            </br>
            Let's build the brand that will represent you in the market... !
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/mr-asim/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillLinkedin />
              </div>
            </a>
            <a
              href='https://twitter.com/mra_studio'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillTwitterCircle />
              </div>
            </a>
            <Link href='https://www.facebook.com/mr3.io/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillFacebook />
              </div>
            </Link>
            <Link href='https://www.behance.net/mra_studio'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiFillBehanceCircle />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
