/* eslint-disable no-console */
import React, { Component } from 'react';
import GithubIcon from '../images/github.png';
import LinkedinIcon from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import Medium from '../images/medium.png';
import CodeChef from '../images/codechef.png';
import Hackeerank from '../images/hackerrank.png';
import Modal from './Modal';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            show: false,
        };
        this.state = { github: '' };
        this.state = { hackerrank: '' };
        this.state = { linkedin: '' };
        this.state = { twitter: '' };
        this.state = { codechef: '' };
        this.state = { medium: '' };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleSubmit = () => {
        this.setState({ show: false });
        const { github } = this.state;
        const { linkedin } = this.state;
        const { twitter } = this.state;
        const { hackerrank } = this.state;
        const { codechef } = this.state;
        const { medium } = this.state;

        const request = new Request('api/developers/', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            }),
            body: JSON.stringify({ github, linkedin, twitter, hackerrank, codechef, medium }),
        });
        fetch(request)
            .then((res) => res.json())
            .then((json) => console.log(json));
    };

    render() {
        return (
            <main>
                <Modal show={this.state.show} handleClose={this.hideModal} handleSubmit={this.handleSubmit}>
                    <div>
                        <form>
                            <h1 className="margin-20">Add Developer Info</h1>
                            <hr />

                            <label className="input-label">
                                <img src={GithubIcon} className="social_icon" alt="" />
                                Github*
                            </label>
                            <input
                                type="text"
                                className="input"
                                value={this.state.github}
                                onChange={this.handleChange}
                                name="github"
                            ></input>

                            <label className="input-label">
                                <img src={Hackeerank} className="social_icon" alt="" />
                                Hackerrank
                            </label>
                            <input
                                type="text"
                                className="input"
                                value={this.state.hackerrank}
                                onChange={this.handleChange}
                                name="hackerrank"
                            ></input>

                            <label className="input-label">
                                <img src={LinkedinIcon} className="social_icon" alt="" />
                                Linkedin
                            </label>
                            <input
                                type="text"
                                className="input"
                                value={this.state.linkedin}
                                onChange={this.handleChange}
                                name="linkedin"
                            ></input>

                            <label className="input-label">
                                <img src={Twitter} className="social_icon" alt="" />
                                Twitter
                            </label>
                            <input
                                type="text"
                                value={this.state.twitter}
                                onChange={this.handleChange}
                                name="twitter"
                                className="input"
                            ></input>

                            <label className="input-label">
                                <img src={Medium} className="social_icon" alt="" />
                                Medium
                            </label>
                            <input
                                type="text"
                                value={this.state.medium}
                                onChange={this.handleChange}
                                name="medium"
                                className="input"
                            ></input>

                            <label className="input-label">
                                <img src={CodeChef} className="social_icon" alt="" />
                                CodeChef
                            </label>
                            <input
                                type="text"
                                value={this.state.codechef}
                                onChange={this.handleChange}
                                name="codechef"
                                className="input"
                            ></input>
                        </form>
                        <hr />
                    </div>
                </Modal>
                <button type="button" className="add_developer" onClick={this.showModal}>
                    Add Developer Info
                </button>
            </main>
        );
    }
}

export default Dashboard;
