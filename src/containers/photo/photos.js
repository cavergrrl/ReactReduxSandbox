import React, { Component } from 'react';
import unsplash from "../../services/unsplash";

import SearchBar from "../../components/search-bar/search-bar";
import PhotoList from "./photo-list";


export default class Photos extends Component {

    state = {
        photosData: []
    };

    render() {
        return (
            <div className="ui container photos">
                <SearchBar onSubmit={ this.onSearchSubmit } />

                <PhotoList data={ this.state.photosData } />
            </div>
        );
    }

    onSearchSubmit = async (term) => {
        console.log( 'Searching photos for: ' + term );

        const response = await unsplash.get( '/search/photos', {
            params: {
                query: term
            }
        });

        // console.log( response );
        this.setState({ photosData: response.data });
        // console.log( this.state.photosData );
    };

}