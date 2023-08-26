import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DialpadIcon from '@mui/icons-material/Dialpad';
import { Link } from 'react-router-dom';

const NavBar1 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      
      <div
      className='navlogo' 
        style={{ color:"white" , backgroundColor:"#E57C41" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , fontWeight:"bold" , padding:"10px" , borderRadius:"5px"}}
        >
            <MenuIcon/>
            Shop by Catagories
            <ExpandMoreIcon/>
        </div>


      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><Link to={"/"}>
        Home
        </Link></li>
        <li><a href="#about-us">
        Shop
                            <ExpandMoreIcon/>
        </a></li>
        <li><a href="#gallery">
        Vender
        </a></li>
        <li><Link to={"/about"}>
        About Us
        </Link></li>
        <li><a href="#contact-us">Blog
        </a></li>
        <li><a href="#contact-us">Content
        </a></li>
      </ul>


      <div className='dial' style={{ fontWeight:"bold",color:"#E57C41" , width:"30%" , justifyContent:"flex-end" }}>
        <DialpadIcon style={{color:"black"}}/>
            +123456789
        </div>


      <div className="burger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default NavBar1;
