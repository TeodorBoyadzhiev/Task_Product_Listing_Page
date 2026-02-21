import './PLP.css'
import LoadMoreButton from './Components/LoadMoreButton'
import products from '../../../products.json'

const PLP = () => {

    return (
    <div className="plp-container">
        <div className="plp-wrapper row row-cols-2">
            <div className="product-list-wrapper col-10">
                <div className="product-list row row-cols-4">
                    {products.products.map((product) => (
                        <div key={product.id}>
                            <div className="product-item col">{product.name}</div>
                        </div>
                        ))
                    }   
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