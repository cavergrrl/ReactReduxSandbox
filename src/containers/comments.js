import React, { Component } from 'react';
import faker from "faker";

import ApprovalCard from "../components/approval/approval-card";
import CommentDetail from "../components/comment/comment-detail";
import Spinner from "../components/spinner/spinner";

export default class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div className="ui container comments">
                { this.renderContent() }
            </div>
        );
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState( { loading: false } );
        }, 3000);
    }

    renderContent() {
        if (this.state.loading) {
            return (
                <Spinner message='Loading comments...' />
            );
        }

        return (
            <div className="approval-cards">
                <ApprovalCard>
                    <CommentDetail
                        author="Ellie"
                        avatar={ faker.image.avatar() }
                        timeAgo="Today at 3:00PM"
                        message="Learning ReactJS" />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail
                        author="James"
                        avatar={ faker.image.avatar() }
                        timeAgo="Today at 9:00AM"
                        message="On vacation this whole week!!" />
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail
                        author="Zen"
                        avatar={ faker.image.avatar() }
                        timeAgo="Today at 6:00AM"
                        message="When I say I'm hungry - you ARE going to feed me!" />
                </ApprovalCard>
            </div>
        );
    }

}