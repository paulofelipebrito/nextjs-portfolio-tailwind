import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
          In order to become a machine programmer through industrial automation, I entered the Mechanical Engineering course at Universidade Federal de Pernambuco, where I had my first contact with actual programming. During the course, I got the opportunity to join a junior company where I did my first project with web programming, but at the moment I did not realized that this would be the direction of my professional life. 

          In 2021 I joined the IT job market as a Full Stack Web Developer with the following languages: Typescript, C# and front end framework libraries such as ReactJs and Angular. 


          </p>
          <p className='py-2 text-gray-600'>
          I’m always looking for new challenges and have currently been improving my knowledge in the technologies that I already master.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
