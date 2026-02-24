import './Filter.css'
import Color from './FilterComponents/Color'
import Size from './FilterComponents/Size'
import PriceSlider from './FilterComponents/PriceSlider'

const Filter = ({cat, products, filters, setFilters}) => {
  const handlePriceChange = ([min, max]) => {
    console.log("Selected range:", min, max);
  };

  const handleFilters = (e) => {
      const value = e.target.dataset.value;
       setFilters({
          ...filters,
          [e.target.dataset.name]: value
      });
  }

  return (
    <div className='filter-container'>
        <div className='filter-title row'>Filter</div>
        <div className='filters-wrapper'>
          <div className="size">
            <Size cat={cat} products={products} onChange={handleFilters} />
          </div>
          <div className="color">
            <Color products={products} onChange={handleFilters} />
          </div>
          <div className="price-slider">
            <PriceSlider onChange={handlePriceChange} />
          </div>
        </div>
    </div>
  )
}

export default Filter