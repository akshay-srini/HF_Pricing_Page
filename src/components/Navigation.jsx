import '../App.css';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function Navigation() {
    return (
      <>
        <div className='navigation-container'>
          <div className='navigation-img'>
              <img src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg" alt="Happyfox logo" />
          </div>
          <div className="products">
            <a className='products-link' href='#'>Products</a>
            <MdOutlineArrowDropDown />
          </div>
          <div className='login-container'>
            <a href="#" className="login-link">Log in</a>
          </div>
        </div>
          <div className="helpdesk">
              <div className='helpdesk-container'>
              <faBars />
                <img className='product-' src="//assets.www.happyfox.com/v2/images/site-nav/HD-logo.svg" alt="Helpdesk" />
                <a href="#" className='product-name-main'>helpdesk</a>
              </div>
            <ul className='features-section'>
              <li classname="product-details">
                <a href="#" className='product-name'>Features<MdOutlineArrowDropDown /></a>
                
              </li>
              <li classname="product-details">
                <a href="#" className='product-name'>Solutions<MdOutlineArrowDropDown /></a>
                
              </li>
              <li classname="product-details">
                <a href="#" className='product-name'>Pricing</a>
              </li>
              <li classname="product-details">
                <a href="#" className='product-name'>Resources <MdOutlineArrowDropDown /></a>
               
            </li>
          </ul>
              <button className='demo-button'>
                <a href="#" className='demo-link'>Get a Demo</a>
              </button>
          </div>
      </>
    );
  }
  