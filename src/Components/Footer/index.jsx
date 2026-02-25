// styles
import './Footer.css';
// router
import { NavLink} from 'react-router';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="main-section row">
          
          <div className="brand-info col-md-4">
            <h2 className="logo">Sweaty Betty</h2>
            <p className="description">Premium quality for your daily style.</p>
          </div>

          <div className="links-group col-md-4">
            <div className="link-column">
              <h3>Shop</h3>
              <ul>
                <li><NavLink to="/T-Shirts">T-Shirts</NavLink></li>
                <li><NavLink to="/Jeans">Jeans</NavLink></li>
                <li><NavLink to="/Sport-Shoes">Sport Shoes</NavLink></li>
              </ul>
            </div>
            <div className="link-column">
              <h3>Info</h3>
              <ul>
                <li><NavLink to="/shipping">Shipping</NavLink></li>
                <li><NavLink to="/returns">Returns</NavLink></li>
              </ul>
            </div>
          </div>

          <div className="newsletter-section col-md-4">
            <h3>Newsletter</h3>
            <div className="input-group">
              <input className="newsletter-input" type="email" placeholder="Email" name="email"/>
              <button type="button">Sub</button>
            </div>
          </div>

        </div>

        <div className="legal-bar">
          <p>&copy; 2026 BRAND NAME. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;