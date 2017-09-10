import React from 'react';

// const VideoListItem = (props) => {
const VideoListItem = ({video, onVideoSelect}) => {
        // console.log(video);
        // const video = props.video;
        // console.log(onVideoSelect);
        let imageUrl = video.snippet.thumbnails.default.url;
        let videoTitle = video.snippet.title;

        return (
                <li  onClick={() => onVideoSelect(video)} className="list-group-item">
                        <div className="video-list media">
                                <div className="media-left">
                                        <img src={imageUrl} className="media-object"/>
                                </div>

                                <div className="media-body">
                                        <div className="media-heading">{videoTitle}</div>
                                </div>
                        </div>
                </li>
        );
}

export default VideoListItem;