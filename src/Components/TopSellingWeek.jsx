import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';


const TopSellingWeek = () => {


    


    const CardData = [
        {
            img1:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/24-home_default/hummingbird-printed-t-shirt.jpg",
            img2:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/27-home_default/brown-bear-printed-sweater.jpg"
        },
        {
            img1:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/31-home_default/the-best-is-yet-to-come-framed-poster.jpg",
            img2:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/35-home_default/the-adventure-begins-framed-poster.jpg"
        },
        {
            img1:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/39-home_default/today-is-a-good-day-framed-poster.jpg",
            img2:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/41-home_default/mug-the-best-is-yet-to-come.jpg"
        },
        {
            img1:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/44-home_default/mug-the-adventure-begins.jpg",
            img2:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/47-home_default/mug-today-is-a-good-day.jpg"
        },
        {
            img1:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/51-home_default/mountain-fox-cushion.jpg",
            img2:"https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/53-home_default/brown-bear-cushion.jpg"
        }
    ]


  return (
    <>
        <div>
            <div style={{display:"flex" , paddingLeft:30 , fontSize:20 , marginBottom:20, marginTop:20}}>
                <CircleIcon style={{color:"orange" , marginRight:10}} fontSize=''/>
                <div style={{fontWeight:"bold"}}>
                    Top Selling This Week
                </div> 
            </div>
            <div className='tsw__list' style={{width:"95%" , border:"1px solid grey", margin:"auto" , display:"flex"}}>

            {
                CardData.map((item)=>(
                        <div style={{width:"90%" , height:"auto"}}>
                            <Link to={"/products"}  style={{color:"black" , padding:30 , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} className='card__item' >
                                    <img className='tsw__img' style={{height:"80%" , width:"100%" , objectFit:"cover"}} src={item.img1} alt="" />
                                    <div>
                                        <div>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarBorderIcon style={{color:'#FFD314'}} fontSize=''/>
                                        </div>
                                        <div style={{fontSize:14 , fontWeight:"bold"}}>
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
                                        <button className='card__btn' style={{ cursor:"pointer",height:50 , width:"100%", border:"none", borderRadius:5 , backgroundColor:"orange", justifyContent:"center" , alignItems:"center"}} >
                                        <ShoppingCartCheckoutIcon fontSize='' />
                                            Add To Cart
                                        </button>
                                    </div>
                            </Link>
                            <Link to={"/products"} style={{ color:"black" ,padding:30 , display:"flex" , flexDirection:"column" , justifyContent:"space-between" }} className='card__item' >
                                    <img className='tsw__img' style={{height:"80%" , width:"100%" , objectFit:"cover"}} src={item.img2} alt="" />
                                    <div>
                                        <div>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                                            <StarBorderIcon style={{color:'#FFD314'}} fontSize=''/>
                                        </div>
                                        <div style={{fontSize:14 , fontWeight:"bold"}}>
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
                                        <button className='card__btn'  style={{cursor:"pointer",height:50 , width:"100%", border:"none", borderRadius:5 , backgroundColor:"orange" , justifyContent:"center" , alignItems:"center"}} >
                                        <ShoppingCartCheckoutIcon fontSize='' />
                                            Add To Cart
                                        </button>
                                    </div>
                            </Link>
                        </div>
                    )

                )
            }

            </div>



            </div>
    </>
  )
}

export default TopSellingWeek