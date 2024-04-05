function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // Membuat fungsi quickSort
  const quickSort = (arr) => {
    // Mengembalikan array jika di dalam array hanya memiliki 1 elemen
    if (arr.length <= 1) {
      return arr;
    }

    // Inisialisasi array pertama sebagai pivot
    let pivot = arr[0].year;
    // Inisialisasi array untuk elemen yang lebih kecil dari pivot
    let leftArr = [];
    // Inisialisasi array untuk elemen yang lebih kecil dari pivot
    let rightArr = [];

    // Loop setiap elemen dalam array
    for (let i = 1; i < arr.length; i++) {
      // Jika tahun mobil lebih kecil dari pivot, masukkan ke leftArr
      if (arr[i].year < pivot) {
        leftArr.push(arr[i]);
      } else {
        // Jika tahun mobil lebih besar dari pivot, masukkan ke rightArr
        rightArr.push(arr[i]);
      }
    }

    // Gabungkan hasil leftArr, pivot, dan rightArr menjadi satu array hasil
    return [...quickSort(leftArr), arr[0], ...quickSort(rightArr)];
  };

  // Rubah code ini dengan array hasil sorting secara ascending
  return quickSort(result);
}
