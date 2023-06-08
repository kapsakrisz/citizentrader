

import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='overlay'></div>
      <video className='fullscreen-video'  autoPlay muted loop  >
        <source src="./star1.mp4" type="video/mp4" />
      </video>
        <div className="content">
      <h1>helooo</h1>



        </div>

      
    </main>
  )
}
