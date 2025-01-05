'use client'
import Swal from 'sweetalert2'
import Link from 'next/link'
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'

const handleNotReadyFeature = ()=>{
  Swal.fire({
    title: 'Fitur belum berfungsi.',
    text: 'Maaf, fitur ini masih dalam tahap pengembangan :>',
    icon: 'warning',
    confirmButtonText: 'Okeh',
    confirmButtonColor: '#3E7B27',
  })
}


export const MenuList = () => {
  const { data: session } = useSession()
  const router = useRouter();
const handleOnClick = ()=>{
  if (!session) {
    Swal.fire({
        title: 'Silahkan login dulu!',
        text: 'Fitur ini hanya bisa di akses setelah login :>',
        icon: 'info',
        confirmButtonText: 'Okeh',
        confirmButtonColor: '#3E7B27',
        iconColor:'#3E7B27',
      })
    }else {
      router.push('/kalkulator-kalori')
    }
  }
  

  return (
    <div className='flex flex-col md:flex-row md:shadow-none gap-2'>
        <Link href={'/'} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Beranda</Link>
        <Link href={'/'} onClick={handleNotReadyFeature} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Konsultasi</Link>
        <button onClick={handleOnClick} className='text-start hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Kalkulator Kebutuhan Kalori</button>
        <Link href={'/'} onClick={handleNotReadyFeature} className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 '>Kalkulator BMI</Link>
        {session ? <button className='hover:border-2 md:hover:border-none border-primGreen hover:text-primGreen w-fit p-2 ' onClick={() => {
        signOut()
        router.push('/')
        }}>Logout</button> : null}
    </div>
  )
}
