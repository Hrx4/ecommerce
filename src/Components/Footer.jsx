import { Divider } from '@mui/material'
import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ForumIcon from '@mui/icons-material/Forum';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const Footer = () => {
  return (
    <>
        <div className='footer__up' style={{display:"flex" }}>

            <div style={{flex:2 , padding:"10px" , marginLeft:40}}>

                <img src="https://demo74.leotheme.com/prestashop/leo_matico_demo/themes/leo_matico//assets/img/logo_green.png" alt="" />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae saepe ipsum harum rem inventore molestias, accusantium beatae, distinctio eligendi recusandae iste, tempore nobis? Excepturi,
                </div>
                <div style={{fontWeight:"bold" , marginTop:10}}>
                    Call Us when you need support
                </div>
                <div style={{fontSize:25 , fontWeight:"bold" , color:"orange"}}>
                    +123456789
                </div>
            </div>    
            <div style={{flex:1, alignItems:"center" , display:"flex" , flexDirection:"column"}}>
                <div style={{fontWeight:"bold"}}>
                    How to buy
                </div>
                <div className='footer__link'>
                    Making payments
                </div>
                <div className='footer__link'>
                    Delivery Options
                </div>
                <div className='footer__link'>
                    Buyer protection
                </div>
                <div className='footer__link'>
                    New user guide
                </div>
            </div>   
            <div style={{flex:1, alignItems:"center" , display:"flex" , flexDirection:"column"}}>
            <div style={{fontWeight:"bold"}}>
                    How to buy
                </div>
                <div className='footer__link'>
                    Making payments
                </div>
                <div className='footer__link'>
                    Delivery Options
                </div>
                <div className='footer__link'>
                    Buyer protection
                </div>
                <div className='footer__link'>
                    New user guide
                </div>
            </div>   
            <div style={{flex:1 ,  alignItems:"center" , display:"flex" , flexDirection:"column"}}>
            <div style={{fontWeight:"bold"}}>
                    How to buy
                </div>
                <div className='footer__link'>
                    Making payments
                </div>
                <div className='footer__link'>
                    Delivery Options
                </div>
                <div className='footer__link'>
                    Buyer protection
                </div>
                <div className='footer__link'>
                    New user guide
                </div>
            </div>   

        </div>
        <Divider/>
        <div className='footer__mid' style={{ paddingTop:25, paddingBottom:25}}>
            <div  className='footer__mid mid1' style={{flex:1 ,  justifyContent:"center" , alignItems:"center" , gap:5}}>
                <LocalShippingIcon style={{color:"orange"}} fontSize='large'/>
                <div>
                    <div style={{fontWeight:"bold"}}>
                        Fast & Free Shipping
                    </div>
                    For all orders over $99
                </div>
            </div>
            <div className='footer__mid mid1'  style={{flex:1,  justifyContent:"center" , alignItems:"center" , gap:5}}>
            <ForumIcon style={{color:"orange"}} fontSize='large'/>
                <div>
                    <div style={{fontWeight:"bold"}}>
                    Expert customer Service
                    </div>
                    For a shopping experience
                </div>
            </div>
            <div className='footer__mid mid1'  style={{flex:1,  justifyContent:"center" , alignItems:"center" , gap:5}}>
            <LocalOfferIcon style={{color:"orange"}} fontSize='large'/>
                <div>
                    <div style={{fontWeight:"bold"}}>
                    Amazing Value
                    </div>
                    We offer competitive prices
                </div>
            </div>
            <div className='footer__mid mid1'  style={{flex:1 ,  justifyContent:"center" , alignItems:"center" , gap:5}}>
            <CreditCardIcon style={{color:"orange"}} fontSize='large'/>
                <div>
                    <div style={{fontWeight:"bold"}}>
                    Safe Payment
                    </div>
                    100% secure payment
                </div>
            </div>
        </div>
        <Divider/>

        <div className='footer__last' style={{display:"flex" , justifyContent:"space-around" , padding:20}}>
            <div>
            Copyright © 2022 Matico. All rights reserved.
            </div>
            <img src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-digitaz-bitmap.png?v=1650014636" alt="" />
        </div>


    </>
  )
}

export default Footer