import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import KaryawanList from "./components/KaryawanList";
import AbsenList from "./components/AbsenList";
import AddKaryawan from "./components/AddKaryawan";
import EditKaryawan from "./components/EditKaryawan";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<><Navbar /><Dashboard /></>} />
        <Route path="/absensi" element={<><Navbar /><AbsenList /></>} />
        <Route path="/karyawan" element={<><Navbar /><KaryawanList /></>} />
        <Route path="/karyawan/add" element={<><Navbar /><AddKaryawan /></>} />
        <Route path="/karyawan/edit/:id" element={<><Navbar /><EditKaryawan /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
