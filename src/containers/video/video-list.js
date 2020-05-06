import React, { Component } from 'react';

import VideoCard from "../../components/video/video-card";

export default class VideoList extends Component {

    render() {
        return (
            <div className="video-list">
                <h4>Results { this.displayTotal( this.props.data ) }</h4>

                { this.displayList( this.props.data) }
            </div>
        );
    }

    displayTotal = (data) => {
        if ( data && data.pageInfo) {
            return (
                <span> (Found: { data.pageInfo.totalResults} videos)</span>
            );
        }
    };

    displayList = (data) => {
        if ( data.items ) {
            console.log( data.items);

            const cards = data.items.map( (video) => {
                return <VideoCard
                    video={ video } onVideoSelect={ this.props.onVideoSelect }
                    key={ video.id.videoId }
                />
            });

            return <div className="ui items video-list-items">{ cards }</div>;
        }

    }

}
