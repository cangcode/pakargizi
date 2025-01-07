'use client'
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MenuList } from '../ui/MenuList';
import { routes } from '@/configs/routes';

export const Humburger = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number | undefined>(undefined); // Awalnya undefined

  // Menunda akses `window` sampai komponen dirender di klien
  useEffect(() => {
    // Mengecek apakah berada di sisi klien
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);

      // Set windowWidth saat pertama kali di-load
      setWindowWidth(window.innerWidth);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div onClick={() => setToggleNav(!toggleNav)}>
      <div className='md:hidden relative'>
        {toggleNav ? (
          <>
            <X size={38} />
            <div className='absolute top-full mt-2 right-2 rounded-lg shadow-lg bg-white'>
              <div className='px-3'>
                <MenuList menu={routes}/>
              </div>
            </div>
          </>
        ) : (
          <Menu size={38} />
        )}
      </div>
    </div>
  );
};
