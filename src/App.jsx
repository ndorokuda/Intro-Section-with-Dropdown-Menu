import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { useState } from 'react';

const App = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={
          <MainLayout
            isHamburgerMenuOpen={isHamburgerMenuOpen}
            setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
          />
        }
      >
        <Route index element={<HomePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
