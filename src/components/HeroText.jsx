import React from 'react';

const HeroText = () => {
  return (
    <>
      <section className='hero-text relative md:row-start-1'>
        <div className='title mt-16 md:mt-20'>
          <h1 className='leading-none font-bold text-[40px] text-center md:text-left md:text-[90px]'>
            Make <span className='md:block'>remote work</span>
          </h1>
        </div>
        <div className='motto mt-10 text-xl text-mediumGray leading-7 mb-7 lg:mb-12'>
          <p className='text-center px-2 md:hidden'>
            Get Your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <p className='hidden md:block'>
            Get Your team in sync, no matter your location.
            <span className='block'>
              Streamline processes, create team rituals, and
            </span>
            watch productivity soar
          </p>
        </div>
        <div className='learn-more flex justify-center md:block mb-14'>
          <button className='text-almostWhite bg-almostBlack py-3 px-6 rounded-xl font-bold border border-almostBlack hover:bg-transparent hover:text-almostBlack'>
            Learn More
          </button>
        </div>
        <div className='sponsors flex justify-center space-x-4 px-5 md:justify-start md:space-x-14 md:absolute bottom-0'>
          <img
            src='../src/assets/images/client-databiz.svg'
            alt='client-databiz'
          />
          <img
            src='../src/assets/images/client-audiophile.svg'
            alt='client-audiophile'
          />
          <img src='../src/assets/images/client-meet.svg' alt='client-meet' />
          <img src='../src/assets/images/client-maker.svg' alt='client-maker' />
        </div>
      </section>
    </>
  );
};

export default HeroText;
