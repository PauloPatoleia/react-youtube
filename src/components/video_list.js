// EXTERNAL
import React from 'react';

// LOCAL
import VideoListItem from './video_list_item'

//

const videoList = (props) => {

    const videoItems = props.videos.map( video => {
        return (
        <VideoListItem 
        key={video.etag} 
        video={video}
        onVideoSelect={props.onVideoSelect} />
        )
    })
    
    return (
        <ul className="col-md-4 list-group" >
            {videoItems}
        </ul>
    )
}

export default videoList