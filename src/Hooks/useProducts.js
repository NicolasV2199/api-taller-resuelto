import { useState } from "react"

export const useProducts = () => {
  
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getProducts = async (url) => {

    const resp = await fetch(url);
    const results = await resp.json();

    setProducts(results);
    setIsLoading(false);
  }
  
  return {
    products,
    getProducts,
    isLoading,
  }
}