import './Heading.css'
import { NavLink} from 'react-router';


  
const Heading = () => {
  return (
    <div className='heading-container row row-cols-2'>
        <NavLink to="/T-Shirts" className='logo col-2'></NavLink>
        <div className='categories col-lg-10 d-flex justify-content-end gap-4'>
            <NavLink to="/T-Shirts" className='category-link'>T-Shirts</NavLink>
            <NavLink to="/Jeans" className='category-link'>Jeans</NavLink>
            <NavLink to="/Sport-Shoes" className='category-link'>Sport Shoes</NavLink>
        </div>
    </div>
  )
}

export default Heading