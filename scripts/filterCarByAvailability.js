function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // Mengecek setiap mobil dalam array menggunakan for loop
  for (let i = 0; i < cars.length; i++) {
    // Memeriksa ketersediaan mobil menggunakan pengkondisian if
    if (cars[i].available == true) {
      // Menambahkan mobil ke array 'result' jika tersedia
      result.push(cars[i]);
    }
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
