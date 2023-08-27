import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CachedIcon from '@mui/icons-material/Cached';
import { Divider } from '@mui/material';

const Products = () => {
  return (

    <>
        <div className='product__container' style={{width:"90%" , margin:"auto" , paddingTop:50 }}>
            <div className='product__left' >
                <img style={{height:600 , width:"100%"}} src="https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/86-large_default/hummingbird-notebook.jpg" alt="" />
                <div style={{width:"100%" , height:150 , display:"flex" , justifyContent:"space-between"}}>
                    <img className='prod__img' style={{cursor:"pointer"  ,height:"100%" , width:"30%"}} src="https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/86-large_default/hummingbird-notebook.jpg" alt="" />
                    <img className='prod__img' style={{cursor:"pointer"  ,height:"100%" , width:"30%"}} src="https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/87-large_default/hummingbird-notebook.jpg" alt="" />
                    <img className='prod__img' style={{cursor:"pointer"  ,height:"100%" , width:"30%"}} src="https://demo74leotheme.b-cdn.net/prestashop/leo_matico_demo/88-large_default/hummingbird-notebook.jpg" alt="" />
                </div>
            </div>
            <div className='product__right' >
                <div style={{fontWeight:"bold" , fontSize:30}}>
                Gold Colored Lightweight Chunky Open Hoops
                </div>
                <div style={{marginTop:20}}>
                    share
                </div>
                <div style={{fontWeight:"bold" , fontSize:20, marginTop:20 ,color:"orange"}}>
                    $12.67
                </div>
                <div style={{marginTop:20}}>
                    120 sheets notebook with hard cover made of recycled cardboard. 16x22cm
                </div>
                <div style={{marginTop:20}}>
                    PAPER TYPE:  <br />
                    RULED
                </div>
                <div style={{marginTop:20}}>
                <button className='product__btn' style={{padding:15 , borderRadius:5 , fontWeight:"bold"}}>
                    Ruled
                </button>
                <button className='product__btn'  style={{padding:15 , borderRadius:5 , fontWeight:"bold", marginLeft:8}}>
                    Plained
                </button>
                <button className='product__btn'  style={{padding:15 , borderRadius:5 , fontWeight:"bold", marginLeft:8}}>
                    Squarred
                </button>
                <button className='product__btn'  style={{padding:15 , borderRadius:5 , fontWeight:"bold", marginLeft:8}}>
                    Dotted
                </button>
                </div>
                <div style={{marginTop:20}}>
                    QUANTITY
                </div>
                <div  style={{display:"block", flexDirection:"column" , gap:20, marginTop:20}}>
                    <input type="number" id="quantity" name="quantity" min="1" max="5" style={{ width:100,paddingTop:10, paddingBottom:10 , border:"1px solid black" , borderRadius:5 }} />
                    <button className='atc__btn' style={{padding:15  , borderRadius:5 , marginLeft:8}}>
                        Add to Cart
                    </button>
                    <div className='prod__mis' style={{display:"flex" , cursor:"pointer" , alignItems:"center"}}>
                        <FavoriteBorderIcon/>
                        Add to WishList
                    </div>
                    <div className='prod__mis' style={{display:"flex"  , cursor:"pointer", alignItems:"center"}}>
                        <CachedIcon/>
                        Add to Compare
                    </div>
                </div>

                <Divider style={{marginTop:5}}/>
                <div style={{marginTop:20 }}>
                Security policy <br />(edit with the Customer Reassurance module) <br />
                  Delivery policy <br />
                  (edit with the Customer Reassurance module) <br />
                  Return policy <br />(edit with the Customer Reassurance module)
                </div>
                
            </div>
        </div>

        <div style={{width:"90%" , marginLeft:"auto", marginRight:"auto"  , marginTop:40}}>
            <div className="product__selection" style={{display:"flex" , fontWeight:"bold" , fontSize:18 , gap:20}}>
                <div className='selected__prod'>
                    Description
                </div>
                <div className='selected__prod'>
                    Product Details
                </div>
                <div className='selected__prod'>
                    Review
                </div>
            </div>
            <Divider/>
            <div style={{marginTop:20}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis blanditiis rem odit magnam quaerat consectetur ullam, eaque nobis recusandae eius sed praesentium neque, ipsam a sunt culpa eveniet voluptas, repellat debitis tenetur aperiam. Sunt veniam, cum, corrupti unde quidem quod quas magnam illo, ut eligendi itaque fugit voluptatibus dolorem odio perferendis sint. Alias facilis iste, illo sapiente sequi unde eveniet est aut laboriosam architecto itaque?
            </div>
        </div>
    </>

  )
}

export default Products