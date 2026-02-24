import './Color.css'
import Swatches from './Swatches';

const Color = ({products, onChange}) => {
  const allColors = [...new Set(products?.products?.flatMap(p => p.colors) || [])];

  return (
    <div className="color-wrapper">
        <div className='filter-name row'>Color</div>
        <ul className='color-options row row-cols-4' >
          {products?.products 
              ? allColors.map((color) => (
                <Swatches filterName={color} key={color} onChange={onChange} type="colors" />
                ))
              : <div className="no-category col">Please select a category.</div>
            }
        </ul>
    </div>
  )
}

export default Color