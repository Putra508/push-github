//fungsi untuk menghitung luas persegi
function hitungluas(sisi) {
    return sisi * sisi;
}

//function untuk menghitung keliling persegi
function hitungkeliling(sisi) {
    return 4 * sisi;
}

//fungsi utama untuk menampilkan hasil
function tampilkanPersegi(sisi) {
    console.log("============ persegi ========");
    console.log("sisi            :", sisi);
    console.log("Luas persegi    :", hitungluas(sisi));
    console.log("Keliling Persegi:", hitungkeliling(sisi));
    console.log("==============================\n");
}

//pemanggil fungsi
tampilkanPersegi(7);
tampilkanPersegi(23);
