import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Divider } from '@mui/material';

const DealOfDay = () => {
  return (
        <>
        <div className="deal__of__day">
            <div className="right__part" style={{fontWeight:"bold" , fontSize:20 , padding:"40px"  , alignItems:"center" }}>
                <div className='dod__left' style={{ height:430  }}>
                <CircleIcon style={{color:"red" , marginRight:10}} fontSize=''/>
                Deal of The Day
                <div className='dod__container' style={{border:"2px solid red"  , width:"100%" , display:"flex" , gap:20}}>
                    <div className='dod__img' style={{height:"100% " , padding:"20px"}}>
                        <div style={{height:"20px" , width:"30px" , backgroundColor:"red" , color:"white" , fontWeight:"bold" , fontSize:11, padding:2}}>
                            -7%
                        </div>
                        <img className='bike__img' style={{  position:"relative" }} src="https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/24-home_default/hummingbird-printed-t-shirt.jpg" alt="" />
                   
                    </div>
                    <div className='dod__content' style={{width:"60%"  , display:"flex",justifyContent:"space-evenly" , flexDirection:"column" , gap:"20px" }}>
                        <div>
                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                            <StarBorderIcon style={{color:'#FFD314'}} fontSize=''/>
                        </div>
                        <div style={{fontSize:20}}>
                            Hero Hunk DDM Matte 150cc MotorBike
                        </div>
                        <div style={{display:"flex" , alignItems:"center"}}>
                            <div style={{textDecoration:"line-through" , color:"grey" , fontSize:13}}>
                                $23.90 
                            </div>
                            <div style={{textDecoration:"none" , color:"#E57C41"}}>
                                $22.23
                            </div>
                        </div>
                        <Divider/>
                        <div className='timer' style={{ gap:40 , alignItems:"center"}}>
                            <div style={{ fontSize:14 }}>
                                Hurry up! Sales ends in:
                            </div>
                            <div style={{display:"flex" , gap:20}}>
                                <div style={{border:"1px solid red" , borderRadius:2 , padding:5}}>
                                    <div style={{color:"red"}}>
                                        648
                                    </div>
                                    <div style={{color:"grey" , fontSize:14}}>
                                        Days
                                    </div>
                                </div>
                                <div style={{border:"1px solid red", borderRadius:2 , padding:5}}>
                                    <div style={{color:"red"}}>
                                        23
                                    </div>
                                    <div style={{color:"grey" , fontSize:14}}>
                                        Hour
                                    </div>
                                </div>
                                <div style={{border:"1px solid red", borderRadius:2 , padding:5}}>
                                    <div style={{color:"red"}}>
                                        34
                                    </div>
                                    <div style={{color:"grey" , fontSize:14}}>
                                        Min
                                    </div>
                                </div>
                                <div style={{border:"1px solid red", borderRadius:2 , padding:5}}>
                                    <div style={{color:"red"}}>
                                        12
                                    </div>
                                    <div style={{color:"grey" , fontSize:14}}>
                                        Sec
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{display:"flex" , gap:20 , alignItems:"center"}}>
                            <button className='add__cart' style={{padding:10 ,fontWeight:"bold" , border:"none" , borderRadius:"2px"}}>
                            <ShoppingCartCheckoutIcon fontSize='' />
                                Add to Cart
                            </button>
                            <RemoveRedEyeIcon fontSize=''  className='icon__hover' />
                            <BalanceIcon fontSize='' className='icon__hover'/>
                            <FavoriteBorderIcon fontSize='' className='icon__hover'/>
                        </div>

                    </div>
                </div>
                </div>
                <div className="left__part" style={{height:450 , borderRadius:5 }}>
                
                <div className='left__part__text' style={{zIndex:100 , position: "absolute" , margin:"auto"   , display:"flex" , flexDirection:"column" , justifyContent:"flex-start", padding:10 , alignItems:"center" , gap:10}}>
                    <div style={{textAlign:"center"}}>
                    Order Faster <br />
                    With Matico App!
                    </div>
                    <div style={{fontWeight:"normal" , fontSize:15}}>
                    Available on both iOS & Android
                    </div>
                    <div>
                        <img src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner1-google-play.png?v=1659084373" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner1-app-store.png?v=1659084373" alt="" />
                    </div>
                </div>

                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner1-bg-img1.jpg?v=1659084372" alt="" style={{height:"100%" , width:"100%" , position:"relative"}} />
                
                </div>
            </div>
            
        </div>
        </>  
    )
}

export default DealOfDay