import PropTypes from 'prop-types';

export const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card product-card">
        <h5 className="character-name">{product.title}</h5>
        <img src={product.images[0]} alt={product.title} />
        <p>
          Price: ${product.price} <br />
          Category: {product.category.name}
        </p>
      </div>
    </>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}