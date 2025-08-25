/**
 * Fungsi untuk menentukan kategori kelulusan siswa
 * Author  : Nama Kamu
 * Versi   : 1.0.0
 * Tanggal : 12 Agustus 2025
 */

// Import data siswa
const siswa = require("../data/siswa");

// Fungsi menentukan kategori kelulusan
function tentukanKategoriKelulusan(tahunLulus) {
  // Jika tahun lulus sebelum 2019
  if (tahunLulus < 2019) {
    return "Lulus Sebelum Covid";
  }
  // Jika tahun lulus antara 2019 dan 2021 (termasuk)
  else if (tahunLulus >= 2019 && tahunLulus <= 2021) {
    return "Lulus Saat Covid";
  }
  // Jika tahun lulus setelah 2021
  else {
    return "Lulus Setelah Covid";
  }
}

console.log()

// Ekspor fungsi agar bisa digunakan di file lain
module.exports = tentukanKategoriKelulusan;