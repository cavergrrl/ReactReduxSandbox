import React, { Component } from "react";

export default class Button extends Component {

    render() {
        return (
            <button className="ui button" onClick={ this.handleOnClick }>{ this.props.label }</button>
        );
    }

    handleOnClick = (e) => {
        // console.log( e.target.innerText );
        this.props.actionClicked( e.target.innerText );
    };
}