'use client'
import React, { useState } from 'react';
import { hitungKebutuhanKalori } from '@/lib/kaloriKalkulator';
import Button from '../ui/Button';
import { cn } from '@/lib/utils';

const FormHitungKalori: React.FC = () => {
  const [usia, setUsia] = useState<number | string>('');
  const [berat, setBerat] = useState<number | string>('');
  const [tinggi, setTinggi] = useState<number | string>('');
  const [aktivitas, setAktivitas] = useState<'sedentary' | 'light' | 'moderate' | 'active' | 'very active'>('sedentary');
  const [tujuan, setTujuan] = useState<'menurunkan' | 'menjaga' | 'menambah'>('menjaga');
  const [hasilKalori, setHasilKalori] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (usia && berat && tinggi && aktivitas && tujuan) {
      const kalori = hitungKebutuhanKalori({
        gender: 'perempuan',
        usia: +usia,
        berat: +berat,
        tinggi: +tinggi,
        aktivitas,
        tujuan
      });

      setHasilKalori(parseFloat(kalori.toFixed(2)));
    } else {
      alert('Harap lengkapi semua data!');
    }
  };

  const handleReset = () => {
    setUsia('');
    setBerat('');
    setTinggi('');
    setAktivitas('sedentary');
    setTujuan('menjaga');
    setHasilKalori(null);
  };

  const getKaloriMessage = () => {
    if (!hasilKalori) return '';

    switch (tujuan) {
      case 'menurunkan':
        return `Hmm, buat nurunin berat badan, kamu cukup makan makanan setara ${hasilKalori} kalori sehari. Jangan khawatir, masih bisa ngemil kok, asal nggak berlebihan! `;

      case 'menjaga':
        return `Kalau kamu mau berat badan tetap segini-gini aja, cukup makan sekitar ${hasilKalori} kalori sehari. Jangan lupa olahraga, biar nggak cuma rebahan doang!`;

      case 'menambah':
        return `Misi tambah massa tubuh dimulai! Kamu butuh sekitar ${hasilKalori} kalori per hari. Tapi plis, makan sehat, jangan fast food melulu!`;
      
      default:
        return '';
    }
  };

  return (
    <div className='p-4'>
      <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-96 gap-3 mx-auto my-10'>
        <label className='font-semibold text-primGreen' htmlFor="usia">Usia (tahun):</label>
        <input
          className='-mt-2 ring-2 ring-secGreen px-2 py-1 rounded-md text-secGreen'
          type="number"
          placeholder="Usia (tahun)"
          value={usia}
          id='usia'
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

        <label className='font-semibold text-primGreen' htmlFor="aktivitas">Aktifitas :</label>
        <select id='aktivitas' className='-mt-3 px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={aktivitas} onChange={(e) => setAktivitas(e.target.value as 'sedentary' | 'light' | 'moderate' | 'active' | 'very active')}>
          <option value="sedentary">Pemalas</option>
          <option value="light">Aktifitas Ringan</option>
          <option value="moderate">Aktifitas Sedang</option>
          <option value="active">Aktifitas Berat</option>
          <option value="very active">Sangat Aktif</option>
        </select>

        <label className='font-semibold text-primGreen' htmlFor="program">Program :</label>
        <select id='program' className='-mt-3 px-2 py-1 rounded-md border-2 border-secGreen text-secGreen' value={tujuan} onChange={(e) => setTujuan(e.target.value as 'menurunkan' | 'menjaga' | 'menambah')}>
          <option value="menurunkan">Menurunkan Berat Badan</option>
          <option value="menjaga">Menjaga Berat Badan</option>
          <option value="menambah">Menambah Berat Badan</option>
        </select>

        <div className='flex gap-4'>
          <Button type="submit" text="Hitung Kebutuhan Kalori" />
          <Button type="button" text="Reset" className={cn('bg-red-500 border-red-500 hover:text-red-500 hover:border-red-500')} onClick={handleReset} />
        </div>
      </form>

      {hasilKalori && (
        <div className='bg-primGreen w-full p-2 rounded-md'>
          <h3 className='text-white'>{getKaloriMessage()}</h3>
        </div>
      )}
    </div>
  );
};

export default FormHitungKalori;
