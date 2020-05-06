import React, { Component } from 'react';

import PhotoCard from "../../components/photo/photo-card";

export default class PhotoList extends Component {

    render() {
        return (
            <div className="ui container photo-list">
                <h3>Photos { this.displayTotal( this.props.data ) }</h3>

                { this.displayList( this.props.data) }
            </div>
        );
    }

    displayTotal = (data) => {
        if ( data && data.total > 0) {
            return (
                <span> (Found: { data.total} images)</span>
            );
        }
    };

    displayList = (data) => {
        if ( data.results ) {
            console.log( data );

            const cards = data.results.map( ({ urls, description, id }) => {
                return <PhotoCard url={ urls.thumb } desc={ description } key={ id } />
            });

            return <div className="ui relaxed grid photo-list-grid">{ cards }</div>;
        }

    }

}
