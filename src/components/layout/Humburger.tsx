'use client'
import { X, Menu } from 'lucide-react';
import { useState } from 'react';
import { MenuList } from '../ui/MenuList';
import { routes } from '@/configs/routes';

export const Humburger = () => {
  const [toggleNav, setToggleNav] = useState(false);

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
