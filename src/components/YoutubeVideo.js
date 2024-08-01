import React from "react";

import video from '../Assets/video/video_presentation.mp4'

const YoutubeVideo = () => {
  return (
    <div className="youtube-video mb-5">
      <video className="w-100 h-100" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default YoutubeVideo;
