import React, { useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavBar from "./NavBar";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [hasClicked, setHasClicked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [loadedVideo, setLoadedVideo] = React.useState(0);

  const totalVideos = 4;
  const nextVideoRef = React.useRef(null);
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcommingVideoIndex);
  };

  useEffect(() => {
    if(loadedVideo === totalVideos-1) {
      setIsLoading(false);
    }
  }, [loadedVideo]);

 
  const upcommingVideoIndex = (currentIndex % totalVideos) + 1;
  const getVideoSrc = (index) => `/videos/hero-${index}.mp4`;

  const handleVideoLoaded = () => {
    setLoadedVideo((prev) => prev + 1);
  };

  useGSAP(() => {
    if(hasClicked) {
      gsap.set("#next-video", { visibility: "visible" });
      gsap.to("#next-video", {
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
        transformOrigin: "center center",
        width: "100%",
        height: "100%",
        onStart: () => {
          nextVideoRef.current.play();
        }})
      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",


      })
    }


  },{dependencies:[currentIndex],revertOnUpdate: true});


  useGSAP(()=>{
    gsap.set("#video-frame", { 
      clipPath:' polygon(3% 0, 34% 0, 86% 91%, 0% 100%)',
      
    });
  
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
  
      }
     
    })
  });

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {
        isLoading && (
          <div className="absolute flex items-center justify-center z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
           <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          

           </div>
          </div>
        )
      }
      <div
        id="video-frame"
        className=" relative z-10 h-dvh w-screen overflow-hidden  bg-blue-75 "
      >
        <div className="mask-clip-path absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]  z-50 size-64 cursor-pointer overflow-hidden  ">
          <div
            onClick={handleMiniVdClick}
            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
          >
            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="current-video"
              className="size-64 origin-center scale-150 object-cover object-center"
              onLoadedData={handleVideoLoaded}
            />
          </div>
        </div>

        <video
          ref={nextVideoRef}
          muted
          loop
          id="next-video"
          className="absolute size-64 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] invisible z-20 object-cover object-center"
          src={getVideoSrc(upcommingVideoIndex)}
          onLoadedData={handleVideoLoaded}
        />

        <video
          src={getVideoSrc(currentIndex == totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          muted
          loop
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoaded}
        />
      </div>
      
      <NavBar/>

      <div className="absolute left-0 top-0 z-20  ">
        <div className="mt-34 px-5 sm:px-10">
            <h1 className="hero-heading text-blue-100">Highlight</h1>
            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Stay in the action with real-time match updates, live streams, and tournament highlights — all in one place.         </p>
           
            <Button 
            id="watch-live"
            title="Watch Live Now"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
            />
        </div>

      </div>
    </div>
  );
}

export default Hero;
