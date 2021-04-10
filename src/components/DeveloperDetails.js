/* eslint-disable class-methods-use-this */
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import DeveloperCard from './DeveloperCard';

class developerDetails extends Component {
    state = {
        repos: [],
    };

    componentDidMount() {
        const request = new Request(`api/developers/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
        fetch(request)
            .then((response) => response.json())
            .then((jsonData) => {
                this.setState({
                    repos :jsonData,
                });
            });
        console.log(this.state.repos[0]);
    }

    render() {
        const peopleCards = this.state.repos.map((person) => (
            <DeveloperCard key={person.title} person={person} />
        ));
        return (
            <div>
                <div className ="values">
                    {peopleCards}
                </div>
            </div>
        );
    }
}

export default withRouter(developerDetails);
