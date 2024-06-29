import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import aqmishaImg from '../public/assets/projects/aqmisha.jpg';
import murwajImg from '../public/assets/projects/murwaj.jpg';
import ProjectItem from './ProjectItem';
import ProjectTag from './ProjectTag';

// const projectData = [
//   {
//     id: 1,
//     title: 'Fashion & City',
//     backgroundImg: { propertyImg },
//     tags: ['All', 'Web'],
//     projectUrl: '/Fashion&City',
//     tech: 'Ui/Ux'
//   },
//   {
//     id: 2,
//     title: 'Hongo Shop',
//     backgroundImg: { cryptoImg },
//     tags: ['All', 'Web'],
//     projectUrl: '/hongo',
//     tech: 'Hero Section'
//   },
//   {
//     id: 3,
//     title: 'Landing Page',
//     backgroundImg: { netflixImg },
//     tags: ['All', 'Web'],
//     projectUrl: '/LandingPage',
//     tech: 'HTML'
//   },
//   {
//     id: 4,
//     title: 'Novemberfurniture',
//     backgroundImg: { twitchImg },
//     tags: ['All', 'Web'],
//     projectUrl: '/Novemberfurniture',
//     tech: 'Wordpress'
//   },
// ];

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-red-600'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        {/* <div className='flex flex-row justify-center items-center gap-2 py-6'>
          <button className='rounded-full border-2 border-red-500 px-6 py-3 text-xl cursor-pointer'>All</button>
          <button className='rounded-full border-2 border-slate-600 hover:border-white px-6 py-3 text-xl cursor-pointer'>Web</button>
        </div> */}
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {/* {projectData.map((project) =>
          (<ProjectItem
            key={project.id}
            title={project.title}
            backgroundImg={project.backgroundImg}
            projectUrl={project.projectUrl}
            tags={project}
            tech={project.tech}
          />
          ))} */}
          <ProjectItem
            title='Fashion & City'
            backgroundImg={propertyImg}
            projectUrl='/Fashion&City'
            tech='Ui/Ux'
          />
          <ProjectItem
            title='Hongo Shop'
            backgroundImg={cryptoImg}
            projectUrl='/hongo'
            tech='Hero Section'

          />
          <ProjectItem
            title='Landing Page'
            backgroundImg={netflixImg}
            projectUrl='/LandingPage'
            tech='HTML'

          />
          <ProjectItem
            title='Novemberfurniture'
            backgroundImg={twitchImg}
            projectUrl='/Novemberfurniture'
            tech='Wordpress'

          />
          <ProjectItem
            title='Alaqmisha'
            backgroundImg={aqmishaImg}
            projectUrl='/Alaqmisha'
            tech='Ui/Ux'

          />
          <ProjectItem
            title='Murwaj'
            backgroundImg={murwajImg}
            projectUrl='/Murwaj'
            tech='JavaScript/PHP'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
