import React from 'react';

const DesktopLoginRegister = () => {
  return (
    <>
      {/* <!-- Login / Register (Auth) --> */}
      <div className='auth items-center space-x-12 hidden md:flex'>
        <a href='#' className='hover:text-almostBlack hover:font-semibold'>
          Login
        </a>
        <a
          href='#'
          className='border-2 px-7 py-3 rounded-2xl border-mediumGray hover:border-almostBlack hover:text-almostBlack hover:font-semibold'
        >
          Register
        </a>
      </div>
    </>
  );
};

export default DesktopLoginRegister;
