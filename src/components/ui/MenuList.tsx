'use client'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import {cn} from '@/lib/utils'
import Button from './Button'


export type Menu = {
  name:string,
  href:string
}

  export const MenuList = ({menu,itemOnly,className}:{menu:Menu[],itemOnly?:boolean,className?:string}) => {
  const pathname = usePathname()
  const {data : session} = useSession()

  return (
    <ul className={cn(
      'flex flex-col justify-center md:items-center p-2 md:flex-row md:shadow-none gap-8',
      className
    )}>
        {menu.map((menu, index)=>(
          <li key={index}>
            <Link 
            href={menu.href} className={cn(
              'hover:text-primGreen my-auto',
              pathname === menu.href && "text-secGreen"
            )}
            >{menu.name}</Link>
          </li>
        ))}
        {!itemOnly && session &&(
          <li className='self-start'>
            <Button 
            className=''
              onClick={()=>signOut()}
              text='Logout' 
            />
          </li>
        )}

    </ul>
  )
}
