import React from 'react'
import NavBar from './Components/NavBar'
import CarouselPart from './Components/CarouselPart'
import ItemList from './Components/ItemList'
import DealOfDay from './Components/DealOfDay'
import WeekDeals from './Components/WeekDeals'
import TopSellingWeek from './Components/TopSellingWeek'
import SubscribePart from './Components/SubscribePart'
import Footer from './Components/Footer'
import NavBar1 from './Components/NavBar1'

const App = () => {
  return (

    <>
      <NavBar1/>
      <CarouselPart/>
      <ItemList/>
      <DealOfDay/>
      <WeekDeals/>
      <TopSellingWeek/>
      <SubscribePart/>
      <Footer/>
    </>

  )
}

export default App