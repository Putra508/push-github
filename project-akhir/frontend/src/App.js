
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//   )
// }
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DaftarBarang from "./components/DaftarBarang.jsx";
import TambahBarang from "./components/TambahBarang.jsx";
import EditBarang from "./components/EditSiswa.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<DaftarBarang/>}/>
        <Route path="/tambah" element={<TambahBarang/>}/>
        <Route path="/edit/:id" element= {<EditBarang/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;