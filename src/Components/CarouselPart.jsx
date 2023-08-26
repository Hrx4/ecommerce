import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';





function Item(props)
{
    return (
        <Paper sx={{background:`url(${props.item.img})` ,  height: 500 , width: "100%"  , backgroundSize: "cover" ,backgroundRepeat:"no-repeat" , display:"flex" , justifyContent: "center" , alignItems:"flex-start" , flexDirection:"column" , backgroundBlendMode:"multiply"}}>
          
          <div className='carousel__margin'  style={{width:400, height:"70%" , margin:"auto" , marginLeft:"auto"}}>
            <img src='https://cdn.shopify.com/s/files/1/0489/1171/2423/files/leo-matico-home7-slide1-img.png?v=1659078334' alt='' style={{marginLeft:"auto" , marginRight:"auto"}}/>
            <div style={{fontSize:42 , color:"white" , fontWeight:"bold"}}>
                Organic Raw <br/>
                Fruit Smoothies
            </div>
            <div style={{color:"white"}}>
            It's hard to resist a freshly blended fresh fruit smoothie.
            </div>
            <button style={{padding:"10px" , fontWeight:"bold" , marginTop:"10px" , border:"none" , borderRadius:"5px" }}>
                <ArrowForwardIcon fontSize='20'/>
                Shop Now
            </button>
          </div>

        </Paper>
    )
}


const CarouselPart = () => {


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
    <Carousel >
    {
    items.map( (item, i) => <Item key={i} item={item} /> )
    }
  </Carousel>

  )
}

export default CarouselPart