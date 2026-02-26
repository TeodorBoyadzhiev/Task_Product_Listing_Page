import './Sorting.css'

const Sorting = ({sort, setSort}) => {
  return (
    <select className='product-sorting row sort-btn' name='sort' value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="asc">Alphabetical (A–Z)</option>
        <option value="desc">Alphabetical (Z-A)</option>
        <option value="price-low">Price (Low to High)</option>
        <option value="price-high">Price (High to Low)</option>
    </select>
  )
}

export default Sorting