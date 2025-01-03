'use client'
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MenuList } from '../ui/MenuList';

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
            <div className='absolute bottom-[-12rem] right-2 rounded-lg shadow-lg bg-white'>
              <div className='px-3'>
                <MenuList />
              </div>
            </div>
          </>
        ) : (
          <Menu size={38} />
        )}
      </div>
      {windowWidth && windowWidth > 768 ? ( // Periksa apakah windowWidth sudah terisi
        <MenuList />
      ) : null}
    </div>
  );
};
