import React, { Component } from 'react';


export default class SearchBar extends Component {

    state = {
        term: ''
    };

    render() {
        return (
            <div className="ui segment search-bar">
                <form className="ui form" onSubmit={ this.onFormSubmit }>
                    <div className="field">
                        <label>Search:</label>
                        <input type="text" value={ this.state.term } onChange={ (e) => { this.setState( { term: e.target.value.toUpperCase() } ) } }/>
                    </div>
                </form>
            </div>
        );
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit( this.state.term );
    };

}