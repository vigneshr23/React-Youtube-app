import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(videoUrl);
  return (
    <div className="video-detail offset-md-2 col-md-8 text-center">
      <div className="embed-responsive">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="details">
        <div className="">{video.snippet.title}</div>
        <div className="">{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;
