import './Heading.css'
import { NavLink} from 'react-router';



const Heading = () => {
  return (
    <div className='heading-container row row-cols-2'>
        <NavLink to="/tshirts" className='logo col-2'>Logo</NavLink>
        <div className='categories col-10 d-flex justify-content-end gap-4'>
            <NavLink to="/tshirts" className='category-link'>T-Shirts</NavLink>
            <NavLink to="/jeans" className='category-link'>Jeans</NavLink>
            <NavLink to="/category3" className='category-link'>Category 3</NavLink>
            {/* <div className='category'>Category 1</div>
            <div className='category'>Category 2</div>
            <div className='category'>Category 3</div> */}
        </div>
    </div>
  )
}

export default Heading