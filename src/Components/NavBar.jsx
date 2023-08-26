import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DialpadIcon from '@mui/icons-material/Dialpad';


const NavBar = () => {

   


  return (
    <div
    style={{height:"65px" , width:"100%"  , display:"flex" , alignItems:"center" , justifyContent:"center"}}
    >
        <div 
        style={{width:"17%" , color:"white" , backgroundColor:"#E57C41" , display:"flex" , justifyContent:"space-between" , alignItems:"center" , fontWeight:"bold" , padding:"10px" , borderRadius:"5px"}}
        >
            <MenuIcon/>
            Shop by Catagories
            <ExpandMoreIcon/>
        </div>

        
                    <div style={{width:"40%" , fontWeight:"bold"}} >
                    <ul style={{display:"flex" , listStyle:"none"  }}>
                        <li  style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                        Home
                        <ExpandMoreIcon />
                        </li>
                        <li style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                            Shop
                            <ExpandMoreIcon/>

                        </li>
                        <li style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                            Vender
                            
                        </li>
                        <li style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                            Pages
                            <ExpandMoreIcon/>

                        </li>
                        <li style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                            Blog
                        </li>
                        <li style={{display:"flex" , alignItems:"center" , marginRight:"25px"}}>
                            Content
                        </li>
                    </ul>
                </div>
             

        
        <div style={{ fontWeight:"bold",color:"#E57C41" , display:"flex" , width:"30%" , justifyContent:"flex-end" }}>
        <DialpadIcon style={{color:"black"}}/>
            +123456789
        </div>
    </div>
  )
}

export default NavBar