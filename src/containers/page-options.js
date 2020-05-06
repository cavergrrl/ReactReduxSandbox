import React, { Component } from "react";
import Button from "../components/form/button/button";

export default class PageOptions extends Component {

    render() {
        return (
            <div className="page-options">
                <Button label="Photos" actionClicked={ this.handleOnClick } />
                <Button label="Videos" actionClicked={ this.handleOnClick } />
            </div>
        );
    }

    handleOnClick = (action) => {
        console.log( "Clicked: " + action );
        this.props.caputureAction( action );
    };

}