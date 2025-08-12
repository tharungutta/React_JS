import React,{useRef} from 'react'
import video from "../video/video1.mp4"

const VideoReference = () => {


    //! Step 1 : Create a reference -variable
    let videoRef = useRef()
    console.log(videoRef);

    let playVideo =() =>{
        videoRef.current.play()
    }

    let pauseVideo =() => {
        videoRef.current.pause()
    }

    let loadVideo = () => {
        videoRef.current.load()
    }

    //! Step 2 : Target the particular element
    
  return (
     <section>
      <aside>
        <video src={video} height="300px" width="500px" ref={videoRef}></video>
      </aside>
  
      <aside>
        <button onClick={playVideo}>PLAY</button>
        <button onClick={pauseVideo}>PAUSE</button>
        <button onClick={loadVideo}>RESTART</button>
      </aside>
     </section>
  );
}

export default VideoReference