import React, { Component } from 'react';

export default class AppHeader extends Component {

    render() {
        return (
          <div id='app-header'>
              <h2>Good { AppHeader.getFormalTimeOfDay(this.props.currentHour) }!
              Welcome to React, { AppHeader.getUsername( this.props.username ) }</h2>
          </div>
        );
    }

    static getFormalTimeOfDay = currentHour => {
        if (!currentHour) {
            return 'Day';
        }

        if (currentHour >= 0 && currentHour < 12) {
            return 'Morning';
        }
        else if (currentHour >= 12 && currentHour < 18) {
            return 'Afternoon'
        }
        else {
            return 'Evening';
        }
    };

    static getUsername( username ) {
        if(!username) {
            return 'Anonymous';
        }

        return username;
    }

}
