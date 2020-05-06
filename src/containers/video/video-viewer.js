import React, { Component } from "react";
import VideoPlayer from "../../components/video/video-player";
import VideoDetail from "../../components/video/video-detail";

export default class VideoViewer extends Component {

    render() {
        return (
            <div className="video-viewer">
                <VideoPlayer video={ this.props.video } />

                <div className="ui items">
                    <VideoDetail video={ this.props.video } />
                </div>
            </div>
        );
    }
}