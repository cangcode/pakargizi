'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import Swal from 'sweetalert2'
import { cn } from '@/lib/utils'

const FeatureCard = ({ 
  judul, 
  href, 
  className,
  icon 
}: { 
  judul: string, 
  href: string, 
  className?:string,
  icon: React.ReactElement 
}) => {
    const { data: session } = useSession()
    const router = useRouter(); 
    const handleOnClick = () => {
        if (!session) {
            Swal.fire({
                title: 'Silahkan login dulu!',
                text: 'Fitur ini hanya bisa di akses setelah login :>',
                icon: 'info',
                confirmButtonText: 'Okeh',
                confirmButtonColor: '#3E7B27',
                iconColor: '#3E7B27',
            })
        } else {
            router.push(href);
        }
    };

    return (
        <div 
          onClick={handleOnClick} 
          className={cn(
            'border-4 border-secGreen rounded-lg w-full md:w-40 p-2 py-5 flex gap-5 flex-col justify-center items-center cursor-pointer',
            className
          )
          }
        >
            <div>
                {icon}
            </div>
            <h1 className='font-semibold text-primGreen text-center'>{judul}</h1>
        </div>
    );
}

export default FeatureCard;
