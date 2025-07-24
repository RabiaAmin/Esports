import React from 'react'

function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const[isLoading, setIsLoading] = React.useState(true);
  const [loadedVideo, setLoadedVideo] = React.useState(0);

  const totalVideos = 4;
  const nextVideoRef = React.useRef(null);
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcommingVideoIndex);
  }  

  // 0 % 4 = 0 +1 = 1
  // 1 % 4 = 1 +1 = 2 
  // 2 % 4 = 2  +1 = 3
  // 3 % 4 = 3 +1 = 4
  // 4 % 4 = 0 +1 = 1
  const upcommingVideoIndex = (currentIndex % totalVideos) + 1;
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  const handleVideoLoaded = () => {
  setLoadedVideo((prev) => prev + 1);
  }

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='video-frame' className=' relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 '>
            <div className='mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50 size-64 cursor-pointer overflow-hidden rounded-lg '>
                <div onClick={handleMiniVdClick} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                    <video ref={nextVideoRef} src={getVideoSrc(currentIndex + 1)} 
                     loop
                     muted 
                     id='current-video'
                     className='size-64 origin-center scale-150 object-cover object-center  '
                     onLoadedData={handleVideoLoaded}
                     />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero