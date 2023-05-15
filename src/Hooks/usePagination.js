import { useState } from "react"

export const usePagination = () => {
  
  const [pagination, setPagination] = useState(1);

  const increment = () => {
    setPagination(pagination + 1);
  }

  const decrement = () => {
    if(pagination <= 1) return;
    setPagination(pagination - 1);
  }
  
  return {
    pagination,
    decrement,
    increment,
  }
}

