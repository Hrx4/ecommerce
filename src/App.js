import React from 'react'
// import NavBar from './Components/NavBar'
import CarouselPart from './Components/CarouselPart'
import ItemList from './Components/ItemList'
import DealOfDay from './Components/DealOfDay'
import WeekDeals from './Components/WeekDeals'
import TopSellingWeek from './Components/TopSellingWeek'


const App = () => {
  return (

    <>
      {/* <NavBar1/> */}
      <CarouselPart/>
      <ItemList/>
      <DealOfDay/>
      <WeekDeals/>
      <TopSellingWeek/>
      {/* <Footer/> */}
    </>

  )
}

export default App