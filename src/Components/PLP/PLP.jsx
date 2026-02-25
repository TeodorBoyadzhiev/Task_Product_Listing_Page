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
// hooks
import { useEffect, useMemo, useState } from 'react'

const PLP = () => {
    const [products, setProducts] = useState(null);
    const [shortDescription, setShortDescription] = useState('');
    const [displayLimit, setDisplayLimit] = useState(7);
    const [sort, setSort] = useState('asc');
    const [filters, setFilters] = useState({});
    const [showToast, setShowToast] = useState(false);

    const location = useLocation();
    const cat = location.pathname.split('/')[1];

    useEffect(() => {
        setProducts(null);
        setSort('asc');

        const {newProducts, shortDescription} = categoryProducts(cat);
        setProducts(newProducts);
        setFilters({});
        setShortDescription(shortDescription);
        setDisplayLimit(7)
    }, [location.pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    const handleAddToCart = () => {
        setShowToast(true);
    
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleLoadMore = () => {
        setDisplayLimit(prev => prev + 7);
    };

    const productsToDisplay = useMemo(() => {
        if (!products?.products) return [];

        let list = products.products.filter((item => 
            Object.entries(filters).every(([key, value]) => 
                {
                    if (!value || value.length === 0) return true;

                    if (key === 'price') {
                        const productPrice = item.price.discounted || item.price.original;

                        return (productPrice >= value[0] && productPrice <= value[1]);
                    }
                    
                    return value.some(val => item[key]?.includes(val));
                })
            )
        );

        const getActivePrice = (p) => p.price.discounted || p.price.original;

        if (sort === 'price-low') list.sort((a, b) => getActivePrice(a) - getActivePrice(b));
        if (sort === 'price-high') list.sort((a, b) => getActivePrice(b) - getActivePrice(a));
        if (sort === 'asc') list.sort((a, b) => a.name.localeCompare(b.name));
        if (sort === 'desc') list.sort((a, b) => b.name.localeCompare(a.name));

        return list;

    }, [products, filters, sort]);

    return (
    <div className="plp-container">
        <div className='plp-toolbar'>
            <ProductCounter products={productsToDisplay} displayLimit={displayLimit} />
        </div>

        <div className="plp-wrapper row row-cols-2">
            <div className="filter col-2">
                <Filter cat={cat} products={products} filters={filters} setFilters={setFilters} />
            </div>

            <div className="product-list-wrapper col-10">
                <div className="product-list-heading d-flex justify-content-between">
                    <div className="category-description">
                        <div className="category-title">{cat}</div>
                        <div className="category-shortDescription">{shortDescription}</div>
                    </div>
                    
                    <Sorting sort={sort} setSort={setSort} />
                </div>

                <div className="product-list row row-cols-4">
                    {(cat && productsToDisplay.length > 0) ? productsToDisplay.slice(0, displayLimit).map((product) => (
                        <ProductTile product={product} key={product.id} handleAddToCart={handleAddToCart} />
                        ))
                        : <div className="no-category col">Please select a category.</div>
                    }   
                </div>
                
                {showToast && <div className="cart-toast">Product added to cart!</div>}

            </div>
        </div>

        <div className="load-more-btn">
            {productsToDisplay.length > displayLimit && <LoadMoreButton handleLoadMore={handleLoadMore} />}
        </div>
    </div>
  )
}

export default PLP