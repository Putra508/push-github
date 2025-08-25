import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config/Constants";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import Input from "../componenst/input";
import Button from "../componenst/Button";

function Login({ onSwitchToRegister, onClose }) {
  const [form, setForm] = useState({ email: "", password: "" });
  const [status, setStatus] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("memperoses...");
    try {
      const res = await axios.post(`${baseUrl}/auth/login`, form);
      const { accessToken } = res.data;
      const dataLogin = { accessToken, email: form.email };

      localStorage.setItem("user", JSON.stringify(dataLogin));
      setUser(dataLogin);
      setStatus("Login Berhasil!");
      if (onClose) onClose();
      navigate("/");
    } catch (err) {
      setStatus("Email atau password salah");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600 text-center">
        Form Login
      </h2>
      <form action={handleSubmit} className="">
        <Input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" id="" required />
        <Input type="password" name="" value={form.password} onChange={handleChange} placeholder="Password" id="" required />
        <Button type="submit" variant="primary">Kirim</Button>
        {status && <p className="text-sm text-center text-gray-700">{status}</p>}
        <div className="text-center mt-4">
            <p className="text-sm">
                Belum punya akun?
                <button type="button" onClick={onSwitchToRegister} className="text-blue-600 hover:underline ml-1">
                    Registrasi disini
                </button>
            </p>
        </div>

      </form>
    </div>
  );
}


export default Login;