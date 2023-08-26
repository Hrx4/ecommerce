import React from 'react'
import "./blog.css"
import { blog } from "../../assets/data/data"
import { Link } from "react-router-dom"



const Card = () => {
  return (
    <>
      <section className='blog'>
        <div className='container grid3'>
          {blog.map((item) => (
            <div className='box boxItems' key={item.id}>
              <div className='img'>
                <img src={item.cover} alt='' />
              </div>
              <div className='details'>
                <Link to={`/details/${item.id}`} className='link'>
                  <h3>{item.title}</h3>
                </Link>
                <p>{item.desc.slice(0, 180)}...</p>
                
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Card
