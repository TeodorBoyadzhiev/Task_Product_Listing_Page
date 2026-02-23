import './Heading.css'
import { NavLink} from 'react-router';



const Heading = () => {
  return (
    <div className='heading-container row row-cols-2'>
        <NavLink to="/T-Shirts" className='logo col-2'>Logo</NavLink>
        <div className='categories col-10 d-flex justify-content-end gap-4'>
            <NavLink to="/T-Shirts" className='category-link'>T-Shirts</NavLink>
            <NavLink to="/Jeans" className='category-link'>Jeans</NavLink>
            <NavLink to="/Sport-Shoes" className='category-link'>Sport Shoes</NavLink>
            {/* <div className='category'>Category 1</div>
            <div className='category'>Category 2</div>
            <div className='category'>Category 3</div> */}
        </div>
    </div>
  )
}

export default Heading