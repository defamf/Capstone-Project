import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import Login from './components/Login';
// import Signup from './components/Signup';
import Header from "./components/Header";
import KonfirmasiPembayaran from "./components/konfirmasiPesanan/KonfirmasiPembayaran";

function App() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}

      <Header />
      <KonfirmasiPembayaran />
    </div>
  );
}

export default App;
