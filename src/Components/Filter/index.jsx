// styles
import './Filter.css'
// components
import Color from './FilterComponents/Color'
import Size from './FilterComponents/Size'
import PriceSlider from './FilterComponents/PriceSlider'

const Filter = ({products, filters, setFilters, setIsFilterOpen}) => {
  const handlePriceChange = ([min, max]) => {
    setFilters({
          ...filters,
          price: [min, max]
      });
  };

  const handleFilters = (e) => {
    const { name, value } = e.target.dataset;
    
    setFilters((prevFilters) => {
       const currentSelection = prevFilters[name] || [];

      const newSelection = currentSelection.includes(value)
        ? currentSelection.filter((item) => item !== value)
        : [...currentSelection, value];

        return {
          ...prevFilters,
          [name]: newSelection,
        }
    });
  }

  return (
    <div className='filter-container'>
       <div className="filter-content">

        <div className="filter-heading">
          <div className='filter-title row'>Filters</div>
          <button className="close-btn d-lg-none" onClick={() => setIsFilterOpen(false)}>×</button>
        </div>
        
        <div className='filters-wrapper'>
          <div className="size">
            <Size products={products} filters={filters} onChange={handleFilters} />
          </div>
          <div className="color">
            <Color products={products} filters={filters} onChange={handleFilters} />
          </div>
          <div className="price-slider">
            <PriceSlider onChange={handlePriceChange} />
          </div>
        </div>
       </div>
    </div>
  )
}

export default Filter