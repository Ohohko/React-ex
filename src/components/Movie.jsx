import React from 'react'
import {useRef} from 'react'

function Movie() {
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    vidRef.current.play();
  }
  
  const handlePauseVideo = () => {
    vidRef.current.pause();
  }
    return (
      <><video
        ref={vidRef}
        src="/public/movie/a-man-called-otto-trailer-1_h480p.mov"
        poster="/public/movie/maxresdefault.jpg"
        width="450">
      </video>
      <div>
          <button onClick={handlePlayVideo}>PLAY</button>
          <button onClick={handlePauseVideo}>PAUSE</button>
        </div></>
      
    

  )
}


export default Movie