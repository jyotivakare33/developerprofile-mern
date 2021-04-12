/* eslint-disable class-methods-use-this */
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import DeveloperCard from './DeveloperCard';

class developerDetails extends Component {
    state = {
        repos: [],
    };

    componentDidMount() {
        document.title = "Developer Profile";
        if(!this.props.match.params.id) {
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
        } else {
            const request = new Request(`api/developers/${this.props.match.params.id}`, {
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

        }
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
                {this.props.match.params.id ? <a href="/" className="back_all"><button type="button" class="add_developer">Go To All Developers</button></a> : '' }
            </div>
        );
    }
}

export default withRouter(developerDetails);
