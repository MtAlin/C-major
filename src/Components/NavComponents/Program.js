import React from 'react'
import BannerTitle from './BannerTitle'
import CompAtProg from './CompAtProg'
import Footer from './Footer'
import NavBar from "../NavBar";
function Program({title}) {
  return (
    <div >
      <NavBar />
    <BannerTitle name={title.program} description={title.info}/>
    <CompAtProg/>
    <Footer/>
    </div>
  )
}

export default Program