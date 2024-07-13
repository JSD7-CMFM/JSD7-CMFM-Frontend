// import React, { useRef } from "react";
// import YouTube from "react-youtube";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useEffect } from "react";
// import { useState } from "react";

// export default function VideoCarousel() {
//   const videoIds = ["ogeFpRPy5-I", "dL6nvkL2uMU", "_lGXoeEn03E"];

//   const [currentSlide, setCurrentSlide] = useState(1);

//   const handleSlideChange = (index) => {};

//   return (
//     <div>
//       <Carousel
//         selectedItem={currentSlide - 1}
//         showArrows={true}
//         emulateTouch={true}
//         infiniteLoop={true}
//         onChange={handleSlideChange} // เมื่อเปลี่ยนวิดีโอใน Carousel
//         renderItem={(item, props) => <item.type {...item.props} {...props} />}
//       >
//         {videoIds.map((videoId, index) => (
//           <VideoCustom
//             key={index}
//             videoId={videoId}
//             setCurrentSlide={setCurrentSlide}
//             totalSlide={videoIds.length}
//           />
//         ))}
//       </Carousel>
//     </div>
//   );
// }

// function VideoCustom(props) {
//   const { isSelected, videoId, setCurrentSlide, totalSlide } = props;
//   // console.log(isSelected, videoId, props);
//   const ref = useRef(null);
//   useEffect(() => {
//     if (ref.current) {
//       if (isSelected) {
//         ref.current.playVideo();
//       } else {
//         ref.current.stopVideo();
//       }
//     }
//     console.log("test");
//   }, [isSelected]);

//   const videoOptions = {
//     height: "595",
//     width: "0",
//     playerVars: {
//       autoplay: 0,
//       controls: 0,
//       rel: 0,
//       showinfo: 0,
//       mute: 1,
//       loop: 1,
//     },
//   };
//   return (
//     <YouTube
//       videoId={videoId}
//       opts={videoOptions}
//       onReady={(e) => {
//         ref.current = e.target;
//         if (isSelected) {
//           ref.current.playVideo();
//         }
//       }}
//       onEnd={(e) => {
//         // console.log("trigger");
//         setCurrentSlide((prev) => {
//           return totalSlide === prev ? 1 : prev + 1;
//         });
//       }}
//     />
//   );
// }

import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-screen">
      <ReactPlayer
        url="/Rick Astley - Never Gonna Give You Up HD.mp4" // เปลี่ยนเป็นพาธไฟล์วิดีโอของคุณ
        className="absolute top-0 left-0 w-full h-full"
        controls={true}
        playing={true}
        // muted={true}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
