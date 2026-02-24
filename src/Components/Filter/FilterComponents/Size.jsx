import './Size.css'
import Swatches from './Swatches'

const Size = ({products, onChange}) => {
  const allSizes = [...new Set(products?.products?.flatMap(p => p.sizes) || [])];

  return (
    <div className="size-wrapper">
        <div className='filter-name row'>Size</div>
        <ul className='size-options row'>
            {products?.products 
              ? allSizes.map((size) => (
                <Swatches filterName={size} key={size} onChange={onChange} type="size" />
                ))
              : <div className="no-category col">Please select a category.</div>
            }
        </ul>
    </div>
  )
}

export default Size