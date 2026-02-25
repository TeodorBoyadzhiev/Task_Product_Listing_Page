import { useState } from 'react';
import './PriceSlider.css'

const PriceSlider = ({
  min = 0,
  max = 1000,
  step = 10,
  defaultMin = 0,
  defaultMax = 100,
  onChange
}) => {
  const [minPrice, setMinPrice] = useState(defaultMin);
  const [maxPrice, setMaxPrice] = useState(defaultMax);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice);
    setMinPrice(value);
    onChange?.([value, maxPrice]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice);
    setMaxPrice(value);
    onChange?.([minPrice, value]);
  };

  return (
    <div className='priceSlider-wrapper'>
      <div className='filter-name'>
        Price: ${minPrice} — ${maxPrice}
      </div>

      <div className='slider-wrapper'>
        <input
          type='range'
          min={min}
          max={max}
          step={step}
          value={maxPrice}
          onChange={handleMaxChange}
          style={{
            position: 'absolute',
            width: '100%',
            appearance: 'none',
            background: "linear-gradient(288deg,rgba(58, 188, 240, 1) 0%, rgba(211, 225, 240, 1) 100%, rgba(243, 225, 165, 0.85) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default PriceSlider;