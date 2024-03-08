import React from 'react'
import Hero from '../Component/Hero/Hero'
import Popular from '../Component/Popular/Popular'
import Offer from '../Component/Offer/Offer'
import NewCollection from '../Component/NewCollection/NewCollection'
import NewsLatter from '../Component/NewsLatter/NewsLatter'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
        <NewsLatter/>
    </div>
  )
}

export default Shop