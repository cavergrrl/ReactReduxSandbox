import React, {Component} from "react";

export default class Spinner extends Component {

    render() {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui text blue loader">{ this.props.message }</div>
            </div>
        );
    }

}

Spinner.defaultProps = {
    message: 'Loading...'
};
