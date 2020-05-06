import React, { Component } from "react";
import youtube from "../../services/youtube";

import SearchBar from "../../components/search-bar/search-bar";
import VideoList from "./video-list";
import VideoViewer from "./video-viewer";

export default class Videos extends Component {
    KEY_YOUTUBE = 'AIzaSyBXMt5kDPvJtuFQ_u5RrbD_-rxhQvC7t_U';

    state = {
        videosData: [],
        selectedVideo: null
    };

    render() {
        return (
            <div className="ui container videos">
                <SearchBar onSubmit={ this.onSearchSubmit } />

                <h3>Videos</h3>

                <div className="ui grid videos-container">
                    <div className="ten wide column">
                        <VideoViewer video={ this.state.selectedVideo } />
                    </div>
                    <div className="six wide column">
                        <VideoList
                            data={ this.state.videosData }
                            onVideoSelect={ this.onVideoSelect }
                        />
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.onSearchSubmit('moana');
    }

    onSearchSubmit = async (term) => {
        console.log( 'Searching videos for: ' + term );

        const response = await youtube.get("/search", {
            params: {
                q: term,
                part: "snippet",
                maxResults: 5,
                type: 'video',
                key: this.KEY_YOUTUBE
            }
        });

        // console.log( response );
        this.setState({
            videosData: response.data,
            selectedVideo: response.data.items[0]
        });
        console.log( this.state.videosData );
    };

    onVideoSelect = async ( video ) => {
        // console.log('onVideoSelect:');
        // console.log(video);
        // console.log('/onVideoSelect');
        await this.setState( { selectedVideo: video } );
        console.log('state.selectedVideo:');
        console.log(this.state.selectedVideo);
        console.log('/state.selectedVideo');
    };

}