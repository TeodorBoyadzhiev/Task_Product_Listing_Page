import './PLP.css'
import ProductCounter from './Components/ProductCounter'
import Sorting from './Components/Sorting'
import ProductTile from './Components/ProductTile'
import LoadMoreButton from './Components/LoadMoreButton'
import tshirts from '../../../tshirts.json'

const PLP = () => {

    return (
    <div className="plp-container">
        <div className='plp-toolbar'>
            <ProductCounter />
            <Sorting />
        </div>
        <div className="plp-wrapper row row-cols-2">
            <div className="product-list-wrapper col-10">
                <div className="product-list row row-cols-4">
                    {tshirts.products.map((product) => (
                        <ProductTile product={product} key={product.id} />
                        ))
                    }   
                    {/* <div>
                        <div className="product-item col">Product 5</div>
                    </div>
                    <div>
                        <div className="product-item col">Product 6</div>
                    </div>
                    <div>
                        <div className="product-item col">Product 7</div>
                    </div>
                    <div>
                        <div className="product-item col">Product 8</div>
                    </div> */}
                </div>
                <div className="load-more-btn">
                    <LoadMoreButton />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PLP