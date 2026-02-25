import './ProductCounter.css'

const ProductCounter = ({products, displayLimit}) => {
  const currectProdcutsShown = Math.min(displayLimit, products?.length || 0);
  
  return (
    <div className='product-counter row'>{currectProdcutsShown} out of {products?.length || 0} products displayed</div>
  )
}

export default ProductCounter