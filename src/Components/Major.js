import React from 'react'

function Major({sliders}) {
  
  return (
    <div className='c-major-container'>
       <div >
       <h1 className='c-major-title'>VIVERE</h1>
        <div className='c-major-line'></div>
       </div>
        <p className='c-major-text'>Un festival creștin, la nivel național, dedicat generației tinere, în care vrem ca Dumnezeu să fie glorificat și mărturisit.</p>
        <div className='c-major-container-img'>
            <img className='c-major-img' src={sliders[0].img2}></img>
            <img className='c-major-img'  src={sliders[1].img2}></img>
            <img  className='c-major-img' src={sliders[2].img2}></img>
        </div>
        <div className='c-major-footer'>
          <hr></hr>
          <div className='c-major-footer-icon'>
         <a href='https://ro-ro.facebook.com/'><i class="fa-brands fa-facebook-f"></i></a>
          <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
          <a href='https://www.youtube.com/'><i class="fa-brands fa-youtube"></i></a>
          </div>
          <hr></hr>
        </div>
    </div>
  )
}

export default Major