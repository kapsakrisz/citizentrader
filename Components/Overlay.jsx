import React from 'react'

function Overlay() {
  return (
    <div>
      <div className='overlay'></div>
      <video className='fullscreen-video'  autoPlay muted loop  >
        <source src="./star1.mp4" type="video/mp4" />
      </video>
        <div className="content">
      <h1>helooo</h1>



        </div>
    </div>
  )
}

export default Overlay
