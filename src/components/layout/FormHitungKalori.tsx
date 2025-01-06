'use client'
import React, { useState } from 'react';
import { hitungKebutuhanKalori } from '@/lib/kaloriKalkulator';
import Button from '../ui/Button';
import {cn} from '@/lib/utils'
import Swal from 'sweetalert2';
const FormHitungKalori: React.FC = () => {
  const [usia, setUsia] = useState<number | string>('');
  const [berat, setBerat] = useState<number | string>('');
  const [tinggi, setTinggi] = useState<number | string>('');
  
  // Perbaiki state aktivitas dengan tipe yang lebih tepat
  const [aktivitas, setAktivitas] = useState<'sedentary' | 'light' | 'moderate' | 'active' | 'very active'>('sedentary');
  const [tujuan, setTujuan] = useState<'menurunkan' | 'menjaga' | 'menambah'>('menjaga');
  const [gender, setGender] = useState<'perempuan' | 'pria'>('perempuan');
  
  const [hasilKalori, setHasilKalori] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(Number(tinggi) > 252) {
      setTinggi('')
      return (
        Swal.fire({
          title: 'Serius tinggimu segitu?',
          text: 'kamu ini titan atau apa? :o',
          icon: 'question',
          confirmButtonText: 'Okeh',
          confirmButtonColor: '#3E7B27',
        })
      )
    }
    // Validasi input
    else if (gender && usia && berat && tinggi && aktivitas && tujuan) {
      const kalori = hitungKebutuhanKalori({
        gender,
        usia: +usia,
        berat: +berat,
        tinggi: +tinggi,
        aktivitas,
        tujuan
      });

      // Membulatkan angka kalori ke 2 angka desimal
      const kaloriTerpotong = kalori.toFixed(2);

      setHasilKalori(parseFloat(kaloriTerpotong)); // Mengubah string ke number
    } else {
      alert('Harap lengkapi semua data!');
    }
  };

  const handleReset = () => {
    setUsia('');
    setGender('pria');
    setBerat('');
    setTinggi('');
    setAktivitas('sedentary');
    setTujuan('menjaga');
    setHasilKalori(null);
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-96 gap-3 mx-auto my-10'>

        <label className='font-semibold text-primGreen' htmlFor="gender">Gender :</label>
        <select id='gender' className='-mt-3  px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={gender} onChange={(e) => setGender(e.target.value as 'pria' | 'perempuan')}>
          <option value="perempuan">Perempuan</option>
          <option value="pria">Pria</option>
        </select>

        <label className='font-semibold text-primGreen' htmlFor="bb">Usia (tahun):</label>
        <input
          className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen'
          type="number"
          placeholder="Berat Badan (Kg)"
          value={usia}
          id='bb'
          onChange={(e) => setUsia(e.target.value)}
        />
        <label className='font-semibold text-primGreen' htmlFor="bb">Berat Badan (kg):</label>
        <input
          className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen'
          type="number"
          placeholder="Berat Badan (Kg)"
          value={berat}
          id='bb'
          onChange={(e) => setBerat(e.target.value)}
        />
        <label className='font-semibold text-primGreen' htmlFor="tb">Tinggi Badan (cm):</label>
        <input
          className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen'
          type="number"
          id='tb'
          placeholder="Tinggi Badan (Cm)"
          value={tinggi}
          onChange={(e) => setTinggi(e.target.value)}
        />

        {/* Memastikan nilai yang dipilih adalah sesuai dengan tipe 'Aktivitas' */}
        <label className='font-semibold text-primGreen' htmlFor="aktivitas">Aktifitas :</label>
        <select id='aktivitas' className='-mt-3  px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={aktivitas} onChange={(e) => setAktivitas(e.target.value as 'sedentary' | 'light' | 'moderate' | 'active' | 'very active')}>
          <option value="sedentary">Pemalas</option>
          <option value="light">Aktifitas Ringan</option>
          <option value="moderate">Aktifitas Sedang</option>
          <option value="active">Aktifitas Berat</option>
          <option value="very active">Sangat Aktif</option>
        </select>

        {/* Pilihan tujuan */}
        <label className='font-semibold text-primGreen' htmlFor="program">Program :</label>
        <select id='program' className='-mt-3  px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={tujuan} onChange={(e) => setTujuan(e.target.value as 'menurunkan' | 'menjaga' | 'menambah')}>
          <option value="menurunkan">Menurunkan Berat Badan</option>
          <option value="menjaga">Menjaga Berat Badan</option>
          <option value="menambah">Menambah Berat Badan</option>
        </select>

        {/* Tombol Submit */}
        <div className='flex gap-4'>
        <Button type="submit" text="Hitung kebutuhan Kalori" />
        <Button type="button" text="Reset" className={cn('bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500')} onClick={handleReset}/>
        </div>

      </form>

      {hasilKalori && (
        <div className='bg-primGreen w-full p-2 rounded-md'>
          <h3 className='text-white'>Halo, pejuang sehat! 🚀 Berdasarkan data yang kamu masukkan, kebutuhan kalori harianmu adalah <span className='font-bold'>{hasilKalori}</span> kalori, Ini adalah jumlah energi yang kamu butuhkan untuk {tujuan} berat badan kamu!, tetap semangat dan jangan lupa bahagia!</h3>
        </div>
      )}
    </div>
  );
};

export default FormHitungKalori;
