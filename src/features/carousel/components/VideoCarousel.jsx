import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <div className="relative w-full h-screen">
      <ReactPlayer
        url="/Unbox Your Next Figure with POP NOW!.mp4"
        className="absolute top-0 left-0 w-full h-full"
        controls={true}
        playing={false}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoPlayer;
