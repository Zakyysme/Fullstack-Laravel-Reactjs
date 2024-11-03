import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/login"
import Register from "./pages/Auth/register"
import Product from "./pages/products"


export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/products" element={<Product/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

