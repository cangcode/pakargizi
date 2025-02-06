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
    BMR = 66 + (13.7 * berat) + (5 * tinggi) - (6.8 * usia);
  } else {
    BMR = 655 + (9.6 * berat) + (1.8 * tinggi) - (4.7 * usia);
  }

  // Kalkulasi TDEE berdasarkan tingkat aktivitas
  let faktorAktivitas: number;
  switch (aktivitas) {
    case 'sedentary': 
      faktorAktivitas = 1.2; 
      break;
  case 'light': 
      faktorAktivitas = 1.3; 
      break;
    case 'moderate': 
      faktorAktivitas = gender === 'pria' ? 1.65 : 1.55; 
      break;
    case 'active': 
      faktorAktivitas = gender === 'pria' ? 1.76 : 1.7; 
      break;
    case 'very active': 
      faktorAktivitas = gender === 'pria' ? 2.1 : 2.0; 
      break;
    default: 
      faktorAktivitas = 1.3; // Default ke 'sangat ringan'
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
