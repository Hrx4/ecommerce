import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const WeekDeals = () => {
  return (
    <>
        <div style={{ display:"flex" , flexDirection:"column" , height:"auto"}}>
            <div style={{display:"flex" , paddingLeft:30 , fontSize:20}}>
                <CircleIcon style={{color:"orange" , marginRight:10}} fontSize=''/>
                <div style={{fontWeight:"bold"}}>
                    Week Deals
                </div> 
            </div>
            <div className='card__box' style={{ width:"100%", marginTop:20 ,justifyContent:"space-evenly" }}>
                <div className='card__item2' style={{height:220  ,  overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                    <div style={{color:"white"}}>
                        SALE 25% OFF
                    </div>
                    <div style={{color:"white" , fontWeight:"bold" , fontSize:24}}>
                    Hot Sauce& <br />Fiery Taste
                    </div>
                    <div style={{display:"flex" , color:"white" , gap:5 , marginTop:5, fontWeight:"bold" , fontSize:12 , alignItems:"center"}}>
                        <ArrowForwardIcon fontSize=''/>
                        Shop Now
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img1.jpg?v=1659081592" alt="" />
                
                </div>
                <div className='card__item2' style={{ height:220 ,  overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                    <div style={{color:"white"}}>
                        SPECIAL OFFER
                    </div>
                    <div style={{color:"white" , fontWeight:"bold" , fontSize:24}}>
                    Everyday <br />fresh 
                    </div>
                    <div style={{display:"flex" , color:"white" , gap:5 , marginTop:5, fontWeight:"bold" , fontSize:12 , alignItems:"center"}}>
                        <ArrowForwardIcon fontSize=''/>
                        Shop Now
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img2.jpg?v=1659081592" alt="" />
                </div>
                <div className='card__item2' style={{ height:220 ,  overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                    <div style={{color:"white"}}>
                        HOT DEALS
                    </div>
                    <div style={{color:"white" , fontWeight:"bold" , fontSize:24}}>
                    Cheesy or <br />super hot?
                    </div>
                    <div style={{display:"flex" , color:"white" , gap:5 , marginTop:5, fontWeight:"bold" , fontSize:12 , alignItems:"center"}}>
                        <ArrowForwardIcon fontSize=''/>
                        Shop Now
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img3.jpg?v=1659081593" alt="" />
                </div>

            </div>  


            <div className='card__box' style={{ width:"100%", marginTop:20 ,justifyContent:"space-evenly" }}>
                <div className='card__item1'  style={{   overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                    <div style={{color:"white" , fontWeight:"bold"}}>
                    Garlic Butter <br />Baked Salmon
                    </div>
                    <div style={{color:"white" , fontSize:15 , display:"flex" , gap:7}}>
                    From
                    <div style={{color:"orange"}}>$399.99</div>
                    </div>
                    
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img4.jpg?v=1659081592" alt="" />
                
                </div>


                <div className='card__item1'  style={{   overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                <div style={{color:"white" , fontWeight:"bold"}}>
                Fresh Hass <br />Avocadoes
                    </div>
                    <div style={{color:"white" , fontSize:15 , display:"flex" , gap:7}}>
                    <div style={{color:"orange"}}>$9.99 - $99.99</div>
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img5.jpg?v=1659081592" alt="" />
                </div>


                <div className='card__item1'  style={{   overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                <div style={{color:"white" , fontWeight:"bold"}}>
                    Breakfast Cereals <br />are wholesome
                    </div>
                    <div style={{color:"white" , fontSize:15 , display:"flex" , gap:7}}>
                    Only
                    <div style={{color:"orange"}}>$38.90</div>
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img6.jpg?v=1659081592" alt="" />
                </div>


                <div className='card__item1'  style={{   overflow: "hidden"}}>
                <div style={{zIndex:100,position:"absolute" , marginLeft:"40px", marginTop:50 }}>
                <div style={{color:"white" , fontWeight:"bold"}}>
                Fancy Smoked <br />Oysters
                    </div>
                    <div style={{color:"white" , fontSize:15 , display:"flex" , gap:7}}>
                    From
                    <div style={{color:"orange"}}>$560.99</div>
                    </div>
                </div>
                <img className='left__img' src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner2-img7.jpg?v=1659081592" alt="" />
                </div>

            </div>            
        </div>
    </>
  )
}

export default WeekDeals