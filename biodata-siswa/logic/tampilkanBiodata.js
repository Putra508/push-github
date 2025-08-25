/**
 * Fungsi untuk menampilkan biodata siswa beserta kategori kelulusan
 * Author  : Nama Kamu
 * Versi   : 1.0.0
 * Tanggal : 12 Agustus 2025
 */

// Import modul yang dibutuhkan
const siswa = require("../data/siswa"); // Mengambil data siswa
const tentukanKategoriKelulusan = require("./logikaKategori"); // Fungsi kategori kelulusan
const { APP_VERSION, APP_AUTHOR } = require("../config/aplikasi"); // Konstanta aplikasi

// Fungsi untuk menampilkan biodata
function tampilkanBiodata() {
  // Menampilkan biodata siswa
  console.log("=== BIODATA SISWA ===");
  console.log(`Nama          : ${siswa.nama}`);
  console.log(`Umur          : ${siswa.umur}`);
  console.log(`Asal          : ${siswa.asal}`);
  console.log(`Sekolah       : ${siswa.sekolah}`);
  console.log(`Tahun Lulus   : ${siswa.tahunlulus}`);

  // Menentukan kategori kelulusan berdasarkan tahun lulus
  const kategori = tentukanKategoriKelulusan(siswa.tahunLulus);

  // Menampilkan kategori kelulusan
  console.log(`Kategori      : ${kategori}`);

  // Menampilkan informasi aplikasi
  console.log("\n=== INFORMASI APLIKASI ===");
  console.log(`Versi         : ${APP_VERSION}`);
  console.log(`Penanggung Jawab : ${APP_AUTHOR}`);
}

// Ekspor fungsi
module.exports = tampilkanBiodata;