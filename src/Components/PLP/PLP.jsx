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
    const [shortDescription, setShortDescription] = useState('');
    const [displayLimit, setDisplayLimit] = useState(7);
    const [sort, setSort] = useState('asc');

    const location = useLocation();
    const cat = location.pathname.split('/')[1];

    useEffect(() => {
        setProducts(null);
        setSort('asc');

        const {newProducts, shortDescription} = categoryProducts(cat);
        setProducts(newProducts);
        setShortDescription(shortDescription);
        setDisplayLimit(7)
    }, [location.pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (!products?.products) return;

        setProducts((prevState) => {
            const sortedList = [...prevState.products];
            const getActivePrice = (p) => p.price.discounted || p.price.original;

            if (sort === 'price-low') {
                sortedList.sort((a, b) => getActivePrice(a) - getActivePrice(b));
            } else if (sort === 'price-high') {
                sortedList.sort((a, b) => getActivePrice(b) - getActivePrice(a));
            } else if (sort === 'asc') {
                sortedList.sort((a, b) => a.name.localeCompare(b.name));
            } else if (sort === 'desc') {
                sortedList.sort((a, b) => b.name.localeCompare(a.name));
            }

            return { ...prevState, products: sortedList };
        });
    }, [sort]);

    const handleLoadMore = () => {
        setDisplayLimit(prev => prev + 7);
    };

    return (
    <div className="plp-container">
        <div className='plp-toolbar'>
            <ProductCounter />
        </div>
        <div className="plp-wrapper row row-cols-2">
            <div className="filter col-2">
                <Filter />
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
                    {cat ? products?.products?.slice(0, displayLimit).map((product) => (
                        <ProductTile product={product} key={product.id} />
                        ))
                        : <div className="no-category col">Please select a category.</div>
                    }   
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