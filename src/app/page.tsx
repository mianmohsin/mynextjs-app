'use client';

import { useState } from 'react';
import Image from 'next/image';
import heroImage from '../assets/bv.png';
import missionIcon from '../assets/mission-icon.png';
import coreImage1 from '../assets/integrity-icon.svg';
import coreImage2 from '../assets/inclusivity-icon.svg';
import coreImage3 from '../assets/empathy-icon.svg';
import coreImage4 from '../assets/innovation-icon.svg';
import founderImage from '../assets/boy-img.png';
import startImage from '../assets/online-dating-panal.png'; 
import Accordion from './accordion';

const mystyle = {
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  padding: '70px 0'
}
export default function Home() {

  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: 'What is Webflow and why is it the best website builder?',
      data: `Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas utphasellus elit.`,
      isOpen: false
    },
    {
      key: 2,
      title: 'What is your favorite template from BRIX Templates?',
      data: `your favorite template from BRIX Templates Content here`,
      isOpen: false
    },
    {
      key: 3,
      title: 'What is your favorite template from BRIX Templates?',
      data: `your favorite template from BRIX Templates Content here`,
      isOpen: false
    },
  ]);

  const toggleAccordion = (accordionkey: any) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };
  return (
    <div>
      <div style={{
        backgroundImage: `url(../assets/hero-pattern.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', 
      }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center py-20">
            <div className='text-center md:text-left'>
              <span className='text-gray-500 text-xs uppercase'>About us</span>
              <h1 className='text-3xl text-indigo-950 font-semibold mb-3 mt-3 md:text-5xl'>Our Journey Towards Creating Lasting Connections</h1>
              <p className='text-md'>
                At Vaishakhi Matromony, we understand that every love story is unique. That's why we focus on creating a supportive and inclusive community where everyone can find their special someone.
              </p>
            </div>
            <div className='m-auto md:me-1'>
              <Image src={heroImage} alt="" width={336} height={401} />
            </div>
          </div>
        </div>
      </div>
      <div style={mystyle}>
        <div className="container max-w-3xl m-auto px-4">
          <div className='text-center'>
            <Image src={missionIcon} width={100} height={50} alt='' className='m-auto' />
            <span className='text-gray-500 text-xs uppercase mt-6 mb-6 block'>Mission & vision</span>
            <h2 className='text-3xl text-indigo-950 font-semibold mb-3'>To create a world where meaningful relationships thrive by aligning individuals with shared values, interests, and life goals.</h2>
            <p className='text-sm max-w-2xl m-auto'>
              We strive to make love more accessible through innovative matchmaking technology and a personalized approach, ensuring every user feels valued and connected.
            </p>
          </div>
        </div>
      </div>
      <div style={mystyle}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 mb-3 text-center md:text-left">
            <span className='text-gray-500 text-xs uppercase'>core values</span>
            <h2 className='text-3xl text-indigo-950 font-bold mb-3'>Our Guiding Principles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className='border rounded-2xl p-8 text-center'>
              <Image src={coreImage1} width={100} height={50} alt='' className='mb-3 m-auto' />
              <h5 className='text-xl text-indigo-950 font-semibold mb-2'>Integrity</h5>
              <p className='text-sm'>We prioritize honesty, transparency, and ethics in every interaction.</p>
            </div>
            <div className='border rounded-2xl p-8 text-center'>
              <Image src={coreImage2} width={100} height={50} alt='' className='mb-3 m-auto' />
              <h5 className='text-xl text-indigo-950 font-semibold mb-2'>Inclusivity</h5>
              <p className='text-sm'>We embrace diversity and aim to foster respect and value for all.</p>
            </div>
            <div className='border rounded-2xl p-8 text-center'>
              <Image src={coreImage3} width={100} height={50} alt='' className='mb-3 m-auto' />
              <h5 className='text-xl text-indigo-950 font-semibold mb-2'>Empathy</h5>
              <p className='text-sm'>We focus on understanding & compassion.</p>
            </div>
            <div className='border rounded-2xl p-8 text-center'>
              <Image src={coreImage4} width={100} height={50} alt='' className='mb-3 m-auto' />
              <h5 className='text-xl text-indigo-950 font-semibold mb-2'>Innovation</h5>
              <p className='text-sm'>We aim to improve our platform with new technologies and ideas.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={mystyle}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-4 mb-3 text-center md:text-left">
            <span className='text-gray-500 text-xs uppercase'>Founder</span>
            <h2 className='text-3xl text-indigo-950 font-semibold mb-3'>Meet Our Founder</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[35%_65%] items-center bg-orange-500 rounded-e-3xl">
            <div className='bg-white'>
              <Image src={founderImage} width={435} height={518} alt='' />
            </div>
            <div className='bg-orange-500 py-10 px-10 text-center md:text-left'>
              <h4 className='font-semibold text-white text-2xl'>Anthony Bahringer</h4>
              <span className='text-white text-md'>Founder af Vaishkahi Matrimony</span>
              <p className='text-white font-semibold mt-3 text-xl'>Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Elit enim massa etiam. Elit enim massa etiam. Lorem ipsum dolor sit amet consectetur. Consequat auctor consectetur.</p>
            </div>
          </div>
        </div></div>

      <div style={mystyle}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="mb-3 text-center">
            <span className='text-gray-500 text-xs uppercase'>Frequently Asked Questions</span>
            <h2 className='text-3xl text-indigo-950 font-semibold mb-3'>Curious? Find Out More Here</h2>
          </div>
          <div className="mb-3 mt-9">
            {accordions.map((accordion) => (
              <Accordion
                key={accordion.key}
                title={accordion.title}
                data={accordion.data}
                isOpen={accordion.isOpen}
                toggleAccordion={() => toggleAccordion(accordion.key)}
              />
            ))}
          </div>
        </div></div>

      <div style={{
        backgroundImage: `url(../assets/hero-pattern.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '70px 0'
      }}>
        <div className="container mx-auto p-8 bg-white-100 rounded-2xl border">
          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-4 items-center">
            <div className='text-center md:text-left'>
              <span className='text-gray-500 text-xs uppercase'>Start Now</span>
              <h1 className='text-4xl text-indigo-950 font-bold mb-8 mt-1'>Ready to find your perfect match?</h1>
              <a href='' className='btn bg-orange-500 rounded-full py-3 px-7 text-sm text-white font-semibold'>Signup now</a>
            </div>
            <div className='justify-self-center md:justify-self-end'>
              <Image src={startImage} alt="" width={336} height={401} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
