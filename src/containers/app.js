import React, { Component } from 'react';

import AppHeader from '../components/app-header';
import Comments from "./comments";
import PageOptions from "./page-options";
import Photos from "./photo/photos";
import Videos from "./video/videos";

export default class App extends Component {

    state = {
        currentHour: '',
        username: 'Ellie',
        action: ''
    };

    render() {
        return (
          <div id='app-container'>
              <AppHeader currentHour={ this.state.currentHour } username={ this.state.username } />

              <div className='ui grid'>
                  <div className='four wide computer nine wide tablet six wide mobile column'>
                      <Comments />
                  </div>

                  <div className='twelve wide computer three wide tablet six wide mobile column'>
                      <PageOptions caputureAction={ this.handleOptionClick } />

                      { this.displayContentBasedOnAction( this.state.action ) }
                  </div>
              </div>
          </div>
        );
    }

    componentDidMount() {
        let currentDateTime = new Date();
        this.setState( { currentHour: currentDateTime.getHours() } );
    }

    handleOptionClick = (action) => {
        console.log( "What to display: " + action );
        this.setState( { action: action } );
    };

    displayContentBasedOnAction = (content) => {
        switch ( content ) {
            case 'Videos':
                return <Videos />
            case 'Photos':
            default:
                return <Photos />
        }
    }

}