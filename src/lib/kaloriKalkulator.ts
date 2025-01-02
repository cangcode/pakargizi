// kaloriCalculator.ts

type Aktivitas = 'sedentary' | 'light' | 'moderate' | 'active' | 'very active';
type Tujuan = 'menurunkan' | 'menjaga' | 'menambah';
type Gender = 'pria' | 'perempuan';

interface KalkulasiKaloriInput {
  gender: Gender;
  usia: number;
  berat: number;
  tinggi: number;
  aktivitas: Aktivitas;
  tujuan: Tujuan;
}

export function hitungKebutuhanKalori({
  gender,
  usia,
  berat,
  tinggi,
  aktivitas,
  tujuan
}: KalkulasiKaloriInput): number {
  // Kalkulasi BMR
  let BMR: number;
  if (gender === 'pria') {
    BMR = 88.362 + (13.397 * berat) + (4.799 * tinggi) - (5.677 * usia);
  } else {
    BMR = 447.593 + (9.247 * berat) + (3.098 * tinggi) - (4.330 * usia);
  }

  // Kalkulasi TDEE berdasarkan tingkat aktivitas
  let faktorAktivitas: number;
  switch (aktivitas) {
    case 'sedentary': faktorAktivitas = 1.2; break;
    case 'light': faktorAktivitas = 1.375; break;
    case 'moderate': faktorAktivitas = 1.55; break;
    case 'active': faktorAktivitas = 1.725; break;
    case 'very active': faktorAktivitas = 1.9; break;
    default: faktorAktivitas = 1.2; break;
  }

  let TDEE = BMR * faktorAktivitas;

  // Sesuaikan dengan tujuan
  if (tujuan === 'menurunkan') {
    TDEE -= 500; // Defisit kalori
  } else if (tujuan === 'menambah') {
    TDEE += 500; // Surplus kalori
  }

  return TDEE;
}
