import React from 'react'

function BannerTitle({name, description}) {
  return (
    <div  className='bannertitle-container'>
        <h1 className='bannertitle-title'>{name}</h1>
        <div className='bannertitle-line'></div>
        <p className='bannertitle-line-p'>{description}</p> 
    </div>
  )
}

export default BannerTitle