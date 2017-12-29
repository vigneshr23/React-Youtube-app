import React from 'react';

const VideoDetail = ({video}) => {

  if(!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  console.log(videoUrl);
  return (
    <div className="video-detail col-md-9">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" title={video.snippet.title} src={videoUrl}></iframe>
      </div>
      <div className="details panel panel-default">
        <div className="panel-heading" tabIndex="0">{video.snippet.title}</div>
        <div className="panel-body" tabIndex="0">{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
