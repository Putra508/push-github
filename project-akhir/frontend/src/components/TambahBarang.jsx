//import React from 'react'

// const TambahBarang = () => {
//   return (
//     <div>
//         <form>
//             <div>
//                 <label>Nama barang:</label>
//                 <input type= "text"/>
//             </div>
//             <div>
//                 <label>Harga:</label>
//                 <input type='text'/>
//             </div>
//             <div>
//                 <label>Stok:</label>
//                 <input type='text'/>
//             </div>
//             <div>
//                 <button type='submit'>Simpan</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default TambahBarang;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahBarang = () => {
  // state untuk menampung input
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  const navigate = useNavigate();

  // fungsi simpan data ke backend
  const simpanBarang = async (e) => {
    e.preventDefault(); // supaya form tidak reload
    try {
      await axios.post("http://localhost:8000/barang", {
        nama_barang: namaBarang,
        harga: Number(harga),
        stok: Number(stok),
      });
      navigate("/"); // balik ke halaman utama setelah berhasil
    } catch (error) {
      console.error("Gagal menyimpan barang:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ➕ Tambah Barang
        </h2>

        {/* form dengan onSubmit */}
        <form onSubmit={simpanBarang} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nama Barang:</label>
            <input
              type="text"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Masukkan nama barang"
            />
          </div>

          <div>
            <label className="block text-gray-700">Harga:</label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Masukkan harga"
            />
          </div>

          <div>
            <label className="block text-gray-700">Stok:</label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Masukkan stok"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default TambahBarang;
