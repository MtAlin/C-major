import React from 'react'
import BannerTitle from './BannerTitle'
import BannerArtist from './BannerArtist'
import Footer from './Footer'
import NavBar from '../NavBar'
function Artisti({title}) {
  return (
    <div>
      <NavBar />
        <BannerTitle name={title.artisti} description={title.info}/>
        < BannerArtist/>
        <Footer/>
    </div>
  )
}

export default Artisti