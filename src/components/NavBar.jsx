import logo from '../assets/images/logo.svg';
import DesktopLoginRegister from './DesktopLoginRegister';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen }) => {
  const [dropDownOpenFeatures, setDropDownOpenFeatures] = useState(false);
  const [dropDownOpenCompany, setDropDownOpenCompany] = useState(false);

  return (
    <nav className='flex justify-between relative items-center px-4 py-2 text-mediumGray'>
      <div className='menu flex gap-20'>
        <div className='logo'>
          <Link to='#' className='block'>
            <img src={logo} alt='logo' />
          </Link>
        </div>
        <div className='menu-items hidden md:flex md:space-x-16'>
          <div
            className='menu-item relative hover:text-almostBlack hover:font-semibold'
            onClick={(e) => setDropDownOpenFeatures((prevState) => !prevState)}
          >
            <Link to='#'>Features</Link>
            <img
              className='inline-block ml-2'
              src={
                dropDownOpenFeatures
                  ? '../src/assets/images/icon-arrow-up.svg'
                  : '../src/assets/images/icon-arrow-down.svg'
              }
              alt=''
            />
            <div
              className={`${
                dropDownOpenFeatures ? 'block' : 'hidden'
              } bg-white shadow-md space-y-2 p-5 rounded-md w-[150px] absolute -left-16 top-11`}
            >
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img src='../src/assets/images/icon-todo.svg' alt='icon-todo' />
                <p>Todo List</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-calendar.svg'
                  alt='icon-calendar'
                />
                <p>Calender</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-reminders.svg'
                  alt='icon-reminders'
                />
                <p>Reminders</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-planning.svg'
                  alt='icon-planning'
                />
                <p>Planning</p>
              </Link>
            </div>
          </div>
          <div
            className='menu-item relative hover:text-almostBlack hover:font-semibold'
            onClick={(e) => setDropDownOpenCompany((prevState) => !prevState)}
          >
            <Link to='#'>Company</Link>
            <img
              className='inline ml-2'
              src={
                dropDownOpenCompany
                  ? '../src/assets/images/icon-arrow-up.svg'
                  : '../src/assets/images/icon-arrow-down.svg'
              }
              alt=''
            />
            <div
              className={`${
                dropDownOpenCompany ? 'block' : 'hidden'
              } bg-white shadow-md space-y-2 p-5 rounded-md w-[120px] absolute top-11`}
            >
              <Link to='#'> History </Link>
              <Link to='#'> Our Team </Link>
              <Link to='#'> Blog </Link>
            </div>
          </div>
          <div className='menu-item hover:text-almostBlack hover:font-semibold'>
            <Link to='#'>Careers</Link>
          </div>
          <div className='menu-item hover:text-almostBlack hover:font-semibold'>
            <Link to='#'>About</Link>
          </div>
        </div>
      </div>

      <DesktopLoginRegister />

      {/* <!-- Hamburger Menu --> */}
      <div
        className='hamburger-menu z-[6] md:hidden'
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
      >
        <button>
          <img src='../src/assets/images/icon-menu.svg' alt='' />
        </button>
      </div>

      {/* <!-- Hamburger Menu Side-Bar --> */}
      <div
        className={`${
          isHamburgerMenuOpen ? 'block' : 'hidden'
        } text-mediumGray hamburger-menu-items h-screen absolute top-0 right-0 bg-almostWhite w-[70%] z-10 font-semibold md:hidden`}
      >
        <div
          className='menu-close self-end absolute top-3 right-5'
          onClick={() =>
            setIsHamburgerMenuOpen((prev) => {
              !prev;
              setDropDownOpenFeatures(false);
              setDropDownOpenCompany(false);
            })
          }
        >
          <img
            src='../src/assets/images/icon-close-menu.svg'
            alt='icon-close-menu'
          />
        </div>
        <div className='menu-items space-y-5 px-10 py-5 text-xl mt-14'>
          <div
            className='menu-item'
            onClick={(e) => setDropDownOpenFeatures((prevState) => !prevState)}
          >
            <Link className='mr-2' to='#'>
              Features
            </Link>
            <img
              className='inline'
              src={
                dropDownOpenFeatures
                  ? '../src/assets/images/icon-arrow-up.svg'
                  : '../src/assets/images/icon-arrow-down.svg'
              }
              alt='icon-arrow-down'
            />
            <div
              className={`${
                dropDownOpenFeatures ? 'block' : 'hidden'
              } feature-items p-5 space-y-5`}
            >
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img src='../src/assets/images/icon-todo.svg' alt='icon-todo' />
                <p>Todo List</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-calendar.svg'
                  alt='icon-calendar'
                />
                <p>Calender</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-reminders.svg'
                  alt='icon-reminders'
                />
                <p>Reminders</p>
              </Link>
              <Link
                to='#'
                className='flex items-center space-x-3 cursor-pointer'
              >
                <img
                  src='../src/assets/images/icon-planning.svg'
                  alt='icon-planning'
                />
                <p>Planning</p>
              </Link>
            </div>
          </div>
          <div className='menu-item'>
            <Link
              className='mr-2'
              to='#'
              onClick={(e) => setDropDownOpenCompany((prevState) => !prevState)}
            >
              Company
            </Link>
            <img
              className='inline'
              src={
                dropDownOpenCompany
                  ? '../src/assets/images/icon-arrow-up.svg'
                  : '../src/assets/images/icon-arrow-down.svg'
              }
              alt=''
            />
            <div
              className={`${
                dropDownOpenCompany ? 'block' : 'hidden'
              }  company-items p-5`}
            >
              <Link to='#'>
                <p className='mb-3'>History</p>
              </Link>
              <Link to='#'>
                <p className='mb-3'>Our Team</p>
              </Link>
              <Link to='#'>
                <p>Blog</p>
              </Link>
            </div>
          </div>
          <div className='menu-item'>
            <Link className='mr-3' to='#'>
              Careers
            </Link>
          </div>
          <div className='menu-item'>
            <Link className='mr-3' to='#'>
              About
            </Link>
          </div>
        </div>

        {/* <!-- Mobile Auth (Login / Register) --> */}
        <div className='flex flex-col text-xl text-center space-y-5 px-10 py-5'>
          <Link to='#'>Login</Link>
          <Link to='#' className='border-2 py-3 rounded-2xl border-mediumGray'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
