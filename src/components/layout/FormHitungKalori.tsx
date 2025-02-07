'use client'
import React, { useState } from 'react';
import { hitungKebutuhanKalori } from '@/lib/kaloriKalkulator';
import Button from '../ui/Button';
import { cn } from '@/lib/utils'
import Swal from 'sweetalert2';
import { distributeCalories } from '@/lib/utils';

interface Menu {
  id: number;
  name: string;
  deskripsi: string;
  kalori: number;
  karbohidrat: number;
  lemak: number;
  protein: number;
}

type distributeCaloriesProps = {
  sarapan: number;
  makanSiang: number;
  makanMalam: number;
  cemilan: number;
}

const FormHitungKalori: React.FC = () => {
  const [usia, setUsia] = useState<number | string>(''); 
  const [berat, setBerat] = useState<number | string>(''); 
  const [tinggi, setTinggi] = useState<number | string>(''); 

  // Perbaiki state aktivitas dengan tipe yang lebih tepat
  const [aktivitas, setAktivitas] = useState<'sedentary' | 'light' | 'moderate' | 'active' | 'very active'>('light');
  const [tujuan, setTujuan] = useState<'menurunkan' | 'menjaga' | 'menambah'>('menjaga');
  const [gender, setGender] = useState<'perempuan' | 'pria'>('perempuan');
  const [menus, setMenus] = useState<Menu[]>([]);
  const [distributedCalories, setDistributedCalories] = useState<distributeCaloriesProps | null>(null); 
  const [hasilKalori, setHasilKalori] = useState<number | null>(null);
  const [beratIdeal, setBeratIdeal] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Cek jika ada data yang valid
    if (Number(tinggi) > 252) {
      setTinggi('');
      return Swal.fire({
        title: 'Serius tinggimu segitu?',
        text: 'Kamu ini titan atau apa? :o',
        icon: 'question',
        confirmButtonText: 'Okeh',
        confirmButtonColor: '#3E7B27',
      });
    }

    if (gender && usia && berat && tinggi && aktivitas && tujuan) {
      const kalori = hitungKebutuhanKalori({
        gender,
        usia: +usia,
        berat: +berat,
        tinggi: +tinggi,
        aktivitas,
        tujuan
      });

      const kaloriTerpotong = kalori.toFixed(2);
      setHasilKalori(parseFloat(kaloriTerpotong));

      // Menyebarkan kalori setelah mendapatkan hasil
      const newDistributedCalories = distributeCalories(parseFloat(kaloriTerpotong));
      setDistributedCalories(newDistributedCalories);

      if (tinggi) {
        if(gender == 'pria') {
         setBeratIdeal(tinggi as number - 100)
        } else {
         setBeratIdeal(tinggi as number - 104)
        }
      }

      // Ambil data menu
      const response = await fetch(`/api/menus?tujuan=${encodeURIComponent(tujuan)}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Gagal mengambil data!');
      }

      const data = await response.json();
      setMenus(data);
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
    setDistributedCalories(null);
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-96 gap-3 mx-auto my-10'>
        <label className='font-semibold text-primGreen' htmlFor="gender">Gender :</label>
        <select id='gender' className='-mt-3 px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={gender} onChange={(e) => setGender(e.target.value as 'pria' | 'perempuan')}>
          <option value="perempuan">Perempuan</option>
          <option value="pria">Pria</option>
        </select>

        <label className='font-semibold text-primGreen' htmlFor="bb">Usia (tahun):</label>
        <input className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen' type="number" placeholder="Usia (tahun)" value={usia} id='usia' onChange={(e) => setUsia(e.target.value)} />

        <label className='font-semibold text-primGreen' htmlFor="bb">Berat Badan (kg):</label>
        <input className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen' type="number" placeholder="Berat Badan (Kg)" value={berat} id='berat' onChange={(e) => setBerat(e.target.value)} />

        <label className='font-semibold text-primGreen' htmlFor="tb">Tinggi Badan (cm):</label>
        <input className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen' type="number" id='tinggi' placeholder="Tinggi Badan (Cm)" value={tinggi} onChange={(e) => setTinggi(e.target.value)} />

        <label className='font-semibold text-primGreen' htmlFor="aktivitas">Aktifitas :</label>
        <select id='aktivitas' className='-mt-3 px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={aktivitas} onChange={(e) => setAktivitas(e.target.value as 'sedentary' | 'light' | 'moderate' | 'active' | 'very active')}>
          {/* <option value="sedentary">Hanya Rebahan</option> */}
          <option value="light">Sangat Ringan</option>
          <option value="moderate">Ringan</option>
          <option value="active">Sedang</option>
          <option value="very active">Berat</option>
        </select>

        <label className='font-semibold text-primGreen' htmlFor="program">Program :</label>
        <select id='program' className='-mt-3 px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={tujuan} onChange={(e) => setTujuan(e.target.value as 'menurunkan' | 'menjaga' | 'menambah')}>
          <option value="menurunkan">Menurunkan Berat Badan</option>
          <option value="menjaga">Menjaga Berat Badan</option>
          <option value="menambah">Menambah Berat Badan</option>
        </select>

        <div className='flex gap-4'>
          <Button type="submit" text="Hitung kebutuhan Kalori" />
          <Button type="button" text="Reset" className={cn('bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500')} onClick={handleReset} />
        </div>
      </form>

      {hasilKalori && (
        <>
          <div className='bg-primGreen w-full p-2 rounded-md text-white flex flex-col justify-center'>
            <h1 className='font-semibold text-xl'>berat badan ideal : </h1>
            <div className='text-7xl text-center pb-5 pt-3 font-semibold'>{beratIdeal} kg</div>
            <p className='text-white'>Berdasarkan data yang kamu masukkan, kebutuhan kalori harianmu adalah <span className='font-bold'>{hasilKalori}</span> kalori, Ini adalah jumlah energi yang kamu butuhkan untuk {tujuan} berat badan kamu!</p>       
          </div>

          {distributedCalories && (
            <div className='bg-primGreen w-full p-2 rounded-md mt-5 text-white'>
              <h1 className='font-bold text-xl'>Distribusi kebutuhan kalori</h1>
              <h2>Sarapan (07.00 - 09.00) : <span className='font-bold'>{distributedCalories.sarapan} kkal</span></h2>
              <h2>Makan Siang (12.00 - 14.00) : <span className='font-bold'>{distributedCalories.makanSiang} kkal</span></h2>
              <h2>Makan Malam (18.00 - 20.00) : <span className='font-bold'>{distributedCalories.makanMalam} kkal</span></h2>
              <h2>Cemilan (10.00 - 11.00) : <span className='font-bold'>{distributedCalories.cemilan} kkal</span></h2>
            </div>
          )}

          <div className='bg-primGreen w-full p-2 rounded-md mt-5'>
            <h1 className='font-bold text-white text-xl'>Rekomendasi menu makanan</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center'>
              {menus.map((item, index) => (
                <div key={index} className='text-white mt-4 border-2 border-white gap-x-2 p-2'>
                  <h2 className='font-semibold underline'>{item.name}</h2>
                  <p>Kalori : {item.kalori} kkal</p>
                  <p>Protein : {item.protein} g</p>
                  <p>Karbo : {item.karbohidrat} g</p>
                  <p>Lemak : {item.lemak} g</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FormHitungKalori;
