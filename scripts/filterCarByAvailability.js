function filterCarByAvailability(cars) {
    // Menampilkan daftar mobil sebelum disaring
    console.log("Daftar mobil sebelum disaring:");
    console.log(cars);

    // Array untuk menyimpan mobil yang tersedia
    const availableCars = [];

    // Iterasi melalui setiap mobil dalam array menggunakan forEach()
    cars.forEach(function(car) {
        if (car.available === true) {
            availableCars.push(car);
        }
    });

    // Menampilkan daftar mobil yang tersedia setelah disaring
    console.log("Daftar mobil yang tersedia:");
    console.log(availableCars);

    // Mengembalikan daftar mobil yang tersedia
    return availableCars;
}