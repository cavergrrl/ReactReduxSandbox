import React, { Component } from "react";

export default class VideoCard extends Component {

    constructor(props) {
        super(props);

        this.videoRef = React.createRef();
    }

    render() {
        return (
            <div className="item video-card" onClick={ () => { this.props.onVideoSelect(this.props.video) } }>
                <div className="image">
                    <img ref={ this.videoRef }
                         src={ this.props.video.snippet.thumbnails.default.url }
                         alt={ this.props.video.snippet.title }
                    />
                </div>
                <div className="content">
                    <div className="header">{ this.props.video.snippet.title }</div>
                    <div className="meta">
                        <span className="category">{ this.props.video.snippet.channelTitle }</span>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.videoRef.current.addEventListener( 'load', this.setSpans );
    }

    setSpans = () => {
        console.log( this.videoRef.current.clientHeight );
    };

}