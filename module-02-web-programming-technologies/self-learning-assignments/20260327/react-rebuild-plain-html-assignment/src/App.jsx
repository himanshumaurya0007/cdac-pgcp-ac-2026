import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/ui/Header";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AboutUs from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
