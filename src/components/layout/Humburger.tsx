'use client'
import { X, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import { MenuList } from '../ui/MenuList';

export const Humburger = () => {
  const [toggleNav,setToggleNav] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div onClick={()=>setToggleNav(!toggleNav)}>
      <div className='md:hidden relative'>
      {toggleNav ? (
        <>
          <X size={38}/>
          <div className='absolute bottom-[-10rem] right-2'>
            <MenuList/>
          </div>
        </>
      ):(
        <Menu size={38}/>
      )}
      </div>
      {windowWidth > 768 ? (
          <MenuList/>
      ):null}
    </div>
  )
}
