import React from 'react';

const HeroImage = () => {
  return (
    <>
      <section className='hero-img md:col-start-2'>
        <img
          className='md:hidden'
          src='../src/assets/images/image-hero-mobile.png'
          alt=''
        />
        <img
          src='../src/assets/images/image-hero-desktop.png'
          alt='image-hero-desktop'
          className='hidden md:block'
        />
      </section>
    </>
  );
};

export default HeroImage;
