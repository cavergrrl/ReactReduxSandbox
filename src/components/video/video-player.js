import React, { Component } from "react";

export default class VideoPlayer extends Component {

    render() {
        return (
            <div className="ui embed video-player">
                <iframe src={ this.getVideoSourceUrl( this.props.video ) } />
            </div>
        );
    }

    getVideoSourceUrl( video ) {
        if (video) {
            return 'https://youtube.com/embed/' + video.id.videoId;
        }
    }
}