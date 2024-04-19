function sortCarByYearDescendingly(cars) {
    // Sangat dianjurkan untuk console.log semua hal hehe
    console.log(cars);

    // Clone array untuk menghindari side-effect
    const result = [...cars];

    // Looping untuk mengurutkan mobil berdasarkan tahun secara descending dengan bubble sort
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < result.length - i - 1; j++) {
            if (result[j].year < result[j + 1].year) {
                // Tukar posisi mobil
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    // Menampilkan daftar mobil setelah diurutkan
    console.log("Daftar mobil setelah diurutkan secara descending:");
    console.log(result);

    // Mengembalikan daftar mobil yang sudah diurutkan dari tahun mobil paling muda
    return result;
}