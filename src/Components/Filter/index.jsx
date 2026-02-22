import './Filter.css'
import Color from './FilterComponents/Color'
import Size from './FilterComponents/Size'
import PriceSlider from './FilterComponents/PriceSlider'

const Filter = () => {
  const handlePriceChange = ([min, max]) => {
    console.log("Selected range:", min, max);
  };

  return (
    <div className='filter-container'>
        <div className='filter-title row'>Filter</div>
        <div className='filters-wrapper'>
          <div className="size">
            <Size />
          </div>
          <div className="color">
            <Color />
          </div>
          <div className="price-slider">
            <PriceSlider onChange={handlePriceChange} />
          </div>
        </div>
    </div>
  )
}

export default Filter