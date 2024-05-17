import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import DarkWrapper from '../components/DarkWrapper';

const MainLayout = ({ isHamburgerMenuOpen, setIsHamburgerMenuOpen }) => {
  return (
    <div className='relative'>
      <NavBar
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
      />
      <Outlet />
      <DarkWrapper isHamburgerMenuOpen={isHamburgerMenuOpen} />
    </div>
  );
};

export default MainLayout;
