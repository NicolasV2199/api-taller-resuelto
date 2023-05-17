import PropTypes from 'prop-types';
import { ProductCard } from "./ProductCard";

export const ProductsList = ({ products }) => {
  return (
    <>
      <div className="cards-container">
        {
          products.map(prod => (
            <ProductCard key={prod.id} product={prod} />
          ))
        }
      </div>
    </>
  )
}

ProductsList.propTypes = {
  products: PropTypes.array.isRequired,
}