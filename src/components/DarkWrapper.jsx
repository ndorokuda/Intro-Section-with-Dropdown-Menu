import React from 'react';

const DarkWrapper = ({ isHamburgerMenuOpen }) => {
  return (
    <div
      className={`${
        isHamburgerMenuOpen ? 'opacity-70' : 'opacity-0'
      } bg-almostBlack h-screen w-screen z-[5] md:hidden absolute top-0`}
    ></div>
  );
};

export default DarkWrapper;
