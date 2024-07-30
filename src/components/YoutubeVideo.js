import React from "react";

const YoutubeVideo = ({ videoId, title }) => {
  return (
    <div className="youtube-video">
      <div className="video-responsive">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YoutubeVideo;
