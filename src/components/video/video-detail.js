import React, { Component } from "react";

export default class VideoDetail extends Component {

    render() {
        return (
          <div className="item video-detail">
              { this.displayContent( this.props.video) }
          </div>
        );
    }

    displayContent( video ) {
        if (!video) {
            return <div>Loading...</div>
        }

        return (
            <div className="content">
                <div className="header">{ this.props.video.snippet.title }</div>
                <div className="description">{ this.props.video.snippet.description }</div>
            </div>
        );
    }

}