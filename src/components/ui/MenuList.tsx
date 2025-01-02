import Link from 'next/link'

export const MenuList = () => {
  return (
    <div className='flex flex-col md:flex-row md:shadow-none shadow-md gap-2'>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Beranda</Link>
        <Link href={'/dashboard'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Dasboard</Link>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-full p-2 '>Beranda</Link>
    </div>
  )
}
