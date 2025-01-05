'use client'
import { HeartHandshake } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react"
import Swal from 'sweetalert2'

const FeatureCard = ({ judul, href }: { judul: string, href: string }) => {
    const { data: session } = useSession()
    const router = useRouter(); // Menambahkan useRouter
    const handleOnClick = () => {
        if (!session) {
            Swal.fire({
                title: 'Silahkan login dulu!',
                text: 'Fitur ini hanya bisa di akses setelah login :>',
                icon: 'info',
                confirmButtonText: 'Okeh',
                confirmButtonColor: '#3E7B27',
                iconColor:'#3E7B27',
              })
        }else{
            router.push(href); // Melakukan redirect jika session tidak ada
        }
    };

    return (
        <div onClick={handleOnClick} className='border-4 border-primGreen rounded-md w-40 p-2 flex gap-5 flex-col justify-center items-center'>
            <div>
                <HeartHandshake color='#3E7B27' size={100} />
            </div>
            <h1 className='font-semibold text-secGreen text-center'>{judul}</h1>
        </div>
    );
}

export default FeatureCard;
