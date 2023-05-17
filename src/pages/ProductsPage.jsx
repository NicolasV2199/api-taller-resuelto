import { useEffect } from "react";
import { usePagination } from "../Hooks/usePagination";
import { useProducts } from "../Hooks/useProducts";
import { ProductsList } from "../Components/ProductsList";

const apiUrl = "https://api.escuelajs.co/api/v1/products";
const pageSize = 20;

export const ProductsPage = () => {

  const { pagination, decrement, increment } = usePagination();
  const { products, getProducts, isLoading } = useProducts();
 
  let offset = (pagination) * pageSize;
  const url = `${apiUrl}?offset=${offset}&limit=${pageSize}`;

  useEffect(() => {
    getProducts(url);
  }, [pagination]);


  return (
    <>
      <div className="main-container products-container">
        <h1>Platzi fake store Api</h1>
        {isLoading && (<p>Cargando...</p>)}

        <div className="pagination">
          <button className="custom-button" onClick={decrement}>Previous</button>
          <span>Page: {pagination}</span>
          <button className="custom-button" onClick={increment}>Next</button>
        </div>

        <ProductsList products={products} />

        {!isLoading && (
          <div className="pagination">
            <button className="custom-button" onClick={decrement}>Previous</button>
            <span>Page: {pagination}</span>
            <button className="custom-button" onClick={increment}>Next</button>
          </div>
        )}
      </div>
    </>
  )
}