
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

function App() {
  return (
    <di>
      <BrowserRouter>
      <Routes>
        <Route path="/" element= {<DaftarBarang/>}/>
        <Route path="/tambah" element={<TambahBarang/>}/>
      </Routes>
      </BrowserRouter>
    </di>
  )
}

export default App;