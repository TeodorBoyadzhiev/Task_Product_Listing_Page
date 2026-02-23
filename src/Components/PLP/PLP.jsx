// styles
import './PLP.css'
// components
import ProductCounter from './Components/ProductCounter'
import Sorting from './Components/Sorting'
import Filter from '../Filter'
import ProductTile from './Components/ProductTile'
import LoadMoreButton from './Components/LoadMoreButton'
// helper functions
import {categoryProducts} from './helperFuntions'
// router
import { useLocation } from 'react-router'
import { useEffect, useState } from 'react'

const PLP = () => {
    const [products, setProducts] = useState(null);
    const [displayLimit, setDisplayLimit] = useState(7);

    const location = useLocation();
    const cat = location.pathname.split('/')[1];

    useEffect(() => {
        setProducts(null);

        const newProducts = categoryProducts(cat);
        setProducts(newProducts);
        setDisplayLimit(7)
    }, [location.pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleLoadMore = () => {
        setDisplayLimit(prev => prev + 7);
    };

    return (
    <div className="plp-container">
        <div className='plp-toolbar'>
            <ProductCounter />
            <Sorting />
        </div>
        <div className="plp-wrapper row row-cols-2">
            <div className="filter col-2">
                <Filter />
            </div>
            <div className="product-list-wrapper col-10">
                <div className="product-list row row-cols-4">
                    {cat ? products?.products?.slice(0, displayLimit).map((product) => (
                        <ProductTile product={product} key={product.id} />
                        ))
                        : <div className="no-category col">Please select a category.</div>
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
                   {products?.products?.length > displayLimit && <LoadMoreButton handleLoadMore={handleLoadMore} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PLP