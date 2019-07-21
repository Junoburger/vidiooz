import React from 'react';

const VideoItem = ({ video }) => {
    return (
    <div key={video.etag}>
    <img src={video.snippet.thumbnails.medium.url}
         alt={video.snippet.title} />
        {video.snippet.title}
    </div>
    );
};



export default VideoItem;
