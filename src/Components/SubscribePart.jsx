import React from 'react'
import Carousel from 'react-material-ui-carousel'
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function Item(props)
{
    return (
          
          <div style={{backgroundColor:"white" , height:300  , width: "100%"   }}>
          <div style={{margin:30 , paddingTop:10}}>
                <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                <StarIcon style={{color:'#FFD314'}} fontSize=''/>
                <StarIcon style={{color:'#FFD314'}} fontSize=''/>
            </div>
          <div style={{fontWeight:"bold",margin:30}}>
          "Recommend to everyone"
          </div>
            <div style={{margin:30}}>
            “Good Day is the best Pharmacy I have ever been to. I have been a Customer for a very long time. My insurance recently changed and every time there was a problem they took care of it.”
            </div>
          </div>

    )
}


const SubscribePart = () => {


    var items = [
        {
            name: "Random Name #1",
            heading: "SOLAR SOLUTION FOR COMMERCIAL USE",
            description: "GET MORE SEVING IN YOUR BUSINESS",
            img: "https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-slide1.jpg?v=1659078334",
            margin:"auto"
          },
        {
            name: "Random Name #2",
            heading: "SOLAR DEALERSHIP",
            description: "GET MORE SEVING IN YOUR LIFE",
            img: "https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-slide2.jpg?v=165907833",
            margin:"300px"
        }
        
      ]



  return (
    <>
        <div className='subs__container' style={{height:510 , width:"100%" , justifyContent:"space-evenly", alignItems:"center"}}>
            <div className='subs__part' style={{ height:"90%" }}>
            <div className='subs__car' style={{position:"absolute", height:300  , marginTop:40, marginLeft:40  }}>
            <Carousel  >
                {
                items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
            </div>
            
            <img style={{position:"relative" , height:"100%" , width:"100%"}} src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner5-img1.jpg?v=1659147921" alt="" />
            
            </div>
            <div className='subs__part'  style={{ height:"90%"}}>
                <div style={{position:"absolute" , zIndex:100 , marginTop:80, marginLeft:30 , display:"flex" , flexDirection:"column"}}>
                    <div style={{fontWeight:"bold" , fontSize:25}}>
                    Join our newsletter and get <br />$20 discount for your first order
                    </div>
                    <div>
                    Only for your first order! You will never miss <br />exclusive savings for subscribers.
                    </div>
                    <input type="text" style={{height:30 , width:200}} placeholder='Email Address'/>
                    <button style={{padding:"10px",color:"white" , backgroundColor:"orange" , fontWeight:"bold" , width: 150 , marginTop:"10px" , border:"none" , borderRadius:"5px" }}>
                        <ArrowForwardIcon fontSize='20'/>
                        Subscribe Now
                    </button>
                </div>

            <img style={{position:"relative" , height:"100%" , width:"100%"}} src="https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-banner5-img2.jpg?v=1659147921" alt="" />


            </div>
        </div>
    </>
  )
}

export default SubscribePart