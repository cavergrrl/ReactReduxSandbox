import React, { Component } from "react";

export default class PhotoCard extends Component {

    constructor(props) {
        super(props);

        this.photoRef = React.createRef();
    }

    render() {
        return (
            <div className="ui segment photo-card">
                <img ref={ this.photoRef } src={ this.props.url } alt={ this.props.desc } />
            </div>
        );
    }

    componentDidMount() {
        this.photoRef.current.addEventListener( 'load', this.setSpans );
    }

    setSpans = () => {
      console.log( this.photoRef.current.clientHeight );
    };

}