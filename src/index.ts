import 'dotenv/config';
import { drizzle } from 'drizzle-orm/libsql';
import { menusTable } from './db/schema';

async function main() {
  const db = drizzle({ 
    connection: { 
      url: process.env.TURSO_DATABASE_URL!, 
      authToken: process.env.TURSO_AUTH_TOKEN!
    }
  });

  // Array data yang akan dimasukkan
  const menus: typeof menusTable.$inferInsert[] = [
    { name: 'Oatmeal Buah', deskripsi: 'Oatmeal dengan topping buah segar', program: 'menurunkan', kalori: 350, protein: 10.0, karbohidrat: 45.0, lemak: 8.0 },
    { name: 'Ayam Rebus + Sayur', deskripsi: 'Ayam rebus dengan sayuran segar', program: 'menjaga', kalori: 400, protein: 30.0, karbohidrat: 25.0, lemak: 10.0 },
    { name: 'Sup Sayur', deskripsi: 'Sup sayuran dengan sedikit minyak', program: 'menurunkan', kalori: 300, protein: 10.0, karbohidrat: 20.0, lemak: 5.0 },
    { name: 'Kacang Almond', deskripsi: 'Segenggam kacang almond panggang', program: 'menambah', kalori: 150, protein: 5.0, karbohidrat: 5.0, lemak: 10.0 },
    { name: 'Pancake Pisang', deskripsi: 'Pancake pisang dengan sirup maple', program: 'menambah', kalori: 500, protein: 10.0, karbohidrat: 70.0, lemak: 15.0 },
    { name: 'Nasi + Dada Ayam', deskripsi: 'Nasi putih dengan dada ayam panggang', program: 'menjaga', kalori: 600, protein: 40.0, karbohidrat: 55.0, lemak: 15.0 },
    { name: 'Nasi + Daging Tumis', deskripsi: 'Nasi putih dengan daging sapi tumis', program: 'menambah', kalori: 550, protein: 35.0, karbohidrat: 50.0, lemak: 12.0 },
    { name: 'Smoothie Alpukat', deskripsi: 'Smoothie dari alpukat segar dan susu rendah lemak', program: 'menurunkan', kalori: 300, protein: 5.0, karbohidrat: 25.0, lemak: 15.0 },
    { name: 'Sandwich Tuna', deskripsi: 'Roti gandum dengan isian tuna dan sayuran', program: 'menjaga', kalori: 350, protein: 25.0, karbohidrat: 30.0, lemak: 10.0 },
    { name: 'Salad Caesar', deskripsi: 'Salad dengan saus Caesar dan potongan ayam', program: 'menurunkan', kalori: 250, protein: 15.0, karbohidrat: 10.0, lemak: 15.0 },
    { name: 'Sushi Roll', deskripsi: 'Sushi roll dengan isian salmon dan alpukat', program: 'menjaga', kalori: 400, protein: 20.0, karbohidrat: 45.0, lemak: 10.0 },
    { name: 'Bakso Ayam', deskripsi: 'Bakso ayam dengan kuah kaldu dan sayuran', program: 'menurunkan', kalori: 300, protein: 20.0, karbohidrat: 25.0, lemak: 8.0 },
    { name: 'Roti Panggang Alpukat', deskripsi: 'Roti gandum panggang dengan topping alpukat', program: 'menurunkan', kalori: 200, protein: 5.0, karbohidrat: 20.0, lemak: 10.0 },
    { name: 'Burger Ayam', deskripsi: 'Burger ayam dengan roti gandum dan sayuran', program: 'menambah', kalori: 500, protein: 30.0, karbohidrat: 45.0, lemak: 15.0 },
    { name: 'Spaghetti Bolognese', deskripsi: 'Spaghetti dengan saus daging sapi', program: 'menjaga', kalori: 600, protein: 25.0, karbohidrat: 75.0, lemak: 15.0 },
    { name: 'Granola Bar', deskripsi: 'Granola bar dengan kacang dan madu', program: 'menurunkan', kalori: 200, protein: 5.0, karbohidrat: 30.0, lemak: 5.0 },
    { name: 'Telur Rebus', deskripsi: 'Dua butir telur rebus', program: 'menurunkan', kalori: 140, protein: 12.0, karbohidrat: 1.0, lemak: 10.0 },
    { name: 'Nasi Goreng Sehat', deskripsi: 'Nasi goreng dengan sedikit minyak dan sayuran', program: 'menjaga', kalori: 450, protein: 15.0, karbohidrat: 50.0, lemak: 10.0 },
    { name: 'Ikan Panggang', deskripsi: 'Ikan panggang dengan bumbu rempah', program: 'menurunkan', kalori: 350, protein: 25.0, karbohidrat: 5.0, lemak: 10.0 },
    { name: 'Yoghurt Buah', deskripsi: 'Yoghurt rendah lemak dengan buah segar', program: 'menurunkan', kalori: 180, protein: 8.0, karbohidrat: 20.0, lemak: 5.0 }
  ];
  

  // Insert data ke dalam tabel menusTable
  await db.insert(menusTable).values(menus);

  console.log('Data berhasil dimasukkan!');
}

main().catch((err) => {
  console.error('Terjadi kesalahan:', err);
});
