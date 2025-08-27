// import React from 'react';
// import { Link } from 'react-router-dom';
// import axios from "axios";
// import useSWR from 'swr';

// const fetcher = async ()=>{
//     const response = await axios.get('http://localhost:8000/barang', {
//         header:{Accept: 'aplication/json'}
//     })
//     return response.data
// }

// const DaftarBarang = () => {
//     const {data, error}= useSWR('http://localhost:8000/barang', fetcher)
//     if(error) return <h1>Gagal memuat data</h1>;
//     if(!data) return <h1>Loading...</h1>;
//   return (
//     <div>
//         <div>Daftar barang</div>
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>No</th>
//                         <th>Nama barang</th>
//                         <th>Harga</th>
//                         <th>Stok</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data && data.map((barang, idx)=>(
//                         <tr key= {barang.id}>
//                             <td>{idx+1}</td>
//                             <td>{barang.nama_barang}</td>
//                             <td>{barang.harga}</td>
//                             <td>{barang.stok}</td>
//                         </tr>

//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     </div>
    
//   )
// }

// export default DaftarBarang;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

// Fungsi fetcher untuk ambil data dari API
const fetcher = async () => {
  const response = await axios.get("http://localhost:8000/barang", {
    headers: { Accept: "application/json" },
  });
  return response.data;
};

const DaftarBarang = () => {
  const { data, error } = useSWR("http://localhost:8000/barang", fetcher);

  // State untuk modal hapus
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  // Jika error
  if (error)
    return (
      <h1 className="text-red-600 text-center mt-10 text-lg font-semibold">
        Gagal memuat data ❌
      </h1>
    );

  // Jika loading
  if (!data)
    return (
      <h1 className="text-gray-600 text-center mt-10 text-lg font-medium">
        Loading...
      </h1>
    );

  // Fungsi hapus barang
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/barang/${selectedId}`);
      setShowModal(false); // tutup modal setelah hapus
      window.location.reload(); // refresh data
    } catch (err) {
      console.error("Gagal menghapus barang:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        
        {/* Header judul + tombol tambah */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            📦 Daftar Barang
          </h1>
          <Link
            to="/tambah"
            className="px-5 py-2 bg-blue-500 hover:bg-green-600 text-white rounded-lg shadow-md transition transform hover:scale-105"
          >
            + Tambah Barang
          </Link>
        </div>

        {/* Table wrapper */}
        <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
          <table className="w-full text-sm text-left">
            <thead className="bg-gradient-to-r from-green-600 to-blue-500 text-white">
              <tr>
                <th className="px-6 py-4">No</th>
                <th className="px-6 py-4">Nama Barang</th>
                <th className="px-6 py-4">Harga</th>
                <th className="px-6 py-4">Stok</th>
                <th className="px-6 py-4 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {data.map((barang, idx) => (
                <tr
                  key={barang.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 text-gray-700 font-medium">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">
                    {barang.nama_barang}
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    Rp {barang.harga.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{barang.stok}</td>
                  <td className="px-6 py-4 flex gap-3 justify-center">
                    <Link
                      to={`/edit/${barang.id}`}
                      className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-xs font-semibold shadow-md transition"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedId(barang.id);
                        setShowModal(true);
                      }}
                      className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold shadow-md transition"
                    >
                      🗑️ Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Konfirmasi Hapus */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-xl shadow-xl w-96 p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Konfirmasi Hapus
              </h2>
              <p className="text-gray-600 mb-6">
                Apakah kamu yakin ingin menghapus barang ini? <br />
                <span className="font-medium text-red-500">
                  Tindakan ini tidak bisa dibatalkan.
                </span>
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition"
                >
                  Batal
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition"
                >
                  Ya, Hapus
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DaftarBarang;

