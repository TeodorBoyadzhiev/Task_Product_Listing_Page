import { useState } from 'react';
import './PriceSlider.css'

const PriceSlider = ({
  min = 0,
  max = 1000,
  step = 10,
  defaultMin = 20,
  defaultMax = 800,
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
            background: "linear-gradient(270deg,hsl(240deg 100% 20%) 0%,hsl(298deg 100% 21%) 0%,hsl(324deg 100% 32%) -1%,hsl(336deg 100% 42%) -1%,hsl(0deg 93% 61%) -1%,hsl(24deg 100% 57%) -2%,hsl(42deg 100% 50%) -2%,hsl(55deg 100% 50%) -1%,hsl(54deg 100% 63%) -1%,hsl(54deg 100% 70%) 0%,hsl(54deg 100% 75%) 2%,hsl(53deg 100% 81%) 5%,hsl(53deg 100% 86%) 11%,hsl(52deg 100% 91%) 21%,hsl(50deg 100% 95%) 53%)",
          }}
        />
      </div>
    </div>
  );
};

export default PriceSlider;