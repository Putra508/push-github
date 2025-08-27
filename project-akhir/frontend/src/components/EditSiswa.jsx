import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBarang = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");

  const navigate = useNavigate();
  const {id}=useParams()

  const UpdateBarang = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8000/barang/${id}`, {
        nama_barang: namaBarang,
        harga: harga,
        stok:parseInt(stok),
      });
      navigate("/");
    } catch (error) {
      console.error("Gagal menyimpan barang:", error);
    }
  };

  useEffect(()=>{
    const getBarangById= async()=>{
        const response=await axios.get(`http://localhost:8000/barang/${id}`)
    setNamaBarang(response.data.nama)
    setHarga(response.data.harga)
    setStok(response.data.stok)
    }
    getBarangById()

  },[id])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Tambah Barang
        </h2>

        <form onSubmit={UpdateBarang} className="space-y-5">
          {/* Nama Barang */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Nama Barang
            </label>
            <input
              type="text"
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Masukkan nama barang"
            />
          </div>

          {/* Harga */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Harga
            </label>
            <input
              type="number"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Masukkan harga"
            />
          </div>

          {/* Stok */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Stok
            </label>
            <input
              type="number"
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none transition"
              placeholder="Masukkan stok"
            />
          </div>

          {/* Tombol */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 shadow-md transition transform hover:scale-[1.02]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBarang;
