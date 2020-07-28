import React from 'react';
import { VideoCardContainer } from './styles';
import { TitleBar } from './titlebar'

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  return (
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      primaryColor={categoryColor ? categoryColor : 'orange'}
      title={videoTitle}
    >
      <TitleBar>
        {videoTitle}
      </TitleBar>
    </VideoCardContainer>  
  );
}

export default VideoCard;
