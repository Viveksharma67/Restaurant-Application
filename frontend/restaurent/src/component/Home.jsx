import React from 'react'
import Dashboard from './Dashboard'
import ScrollableCards from './ScrollableCards'
import FoodCards from './FoodCards'
import FoodCardScroll from './FoodCardScroll'
import ChefQuote from './ChefBlock'
import Circlediv from './Circlediv'
import Exploremenu from './Exploremenu'

function Home() {
  return (
    <div className='bg-zinc-900'>
        <div className='dashdiv'>
        <Dashboard/>
        </div>
        <FoodCards/>
        <ChefQuote/>
        <FoodCardScroll/>
        <Exploremenu/>
    </div>
  )
}

export default Home
