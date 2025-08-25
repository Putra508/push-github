import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import Navbar from '../componenst/Navbar';
import DataPeserta from '../pages/peserta/DataPeserta';
import FormPeserta from '../pages/peserta/FormPeserta';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Layout from '../componenst/layout';
import Footer from '../componenst/Footer';

export default function App() {
  const { user } = useContext(AuthContext);

  const LoginRoute = ({ children }) => {
    if (user === null) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  };

  const PrivateRoute = ({ children }) => {
    if (user === null) {
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peserta" element={<PrivateRoute><DataPeserta /></PrivateRoute>} />
          <Route path="/peserta/tambah" element={<PrivateRoute><FormPeserta mode="create" /></PrivateRoute>} />
          <Route path="/peserta/edit/:id" element={<PrivateRoute><FormPeserta mode="edit" /></PrivateRoute>} />
          <Route path="/peserta/view/:id" element={<PrivateRoute><FormPeserta mode="view" /></PrivateRoute>} />
          <Route path="/login" element={<LoginRoute><Login /></LoginRoute>} />
          <Route path="/register" element={<LoginRoute><Register /></LoginRoute>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
}