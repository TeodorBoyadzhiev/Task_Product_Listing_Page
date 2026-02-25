import './ProductTile.css'

const ProductTile = ({ product, handleAddToCart }) => {
  return (
    <article className="product-card" key={product.id}>
      <div className="product-image-wrapper">
        <img
          src={product.image ? product.image : 'https://fdcdn.akamaized.net/m/310x465/products/113…b8a028daa90a6f90a7aac50f3144fe.jpg?s=71e1diczRlcq'}
          alt={product.name}
          className="product-image"
        />
      </div>

      <div className="product-content">
        <h3 className="product-title">{product.name}</h3>

        <p className="product-description">
          {product.shortDescription}
        </p>

        <div className="product-rating">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="rating-number">{product.rating}</span>
        </div>

        <div className="product-price">
          {product.price.discounted ? (
            <>
              <span className="price-discounted">
                ${product.price.discounted}
              </span>
              <span className="price-original">
                ${product.price.original}
              </span>
            </>
          ) : (
            <span className="price-normal">
              ${product.price.original}
            </span>
          )}
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  )
}

export default ProductTile