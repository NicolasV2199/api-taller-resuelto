import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { RickAndMortyPage } from "./pages/RickAndMortyPage"
import { ProductsPage } from "./pages/ProductsPage"

export const ApiApp = () => {
  return (
    <>
      <NavBar/>


      <Routes>
        <Route path="/" element={<RickAndMortyPage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>


        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      
    </>
  )
}