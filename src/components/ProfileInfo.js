import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as AccountCircle } from '../images/account_circle-24px.svg';
import GithubIcon from '../images/github.png';
import LinkedinIcon from '../images/linkedin.png';
import Twitter from '../images/twitter.png';
import Medium from '../images/medium.png';
import CodeChef from '../images/codechef.png';
import Hackeerank from '../images/hackerrank.png';
import Email from '../images/email-24px.svg';
import { ReactComponent as Link } from '../images/link.svg';
import { ReactComponent as Business } from '../images/business-24px.svg';
import { ReactComponent as Location } from '../images/location.svg';

class ProfileInfo extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        };           
    }
    
    componentDidMount() {
        document.title = "Developer Profile";
        const request = new Request(`api/developers/${this.props.match.params.id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        });
        fetch(request)
            .then((response) => response.json())
            .then((repos) => {
                this.setState({
                    repos,
                });
            });
            console.log(this.state.repos);
    }



    render() {
        const peopleCards = this.state.repos.map((person) => (
            <div>
            <header className="developer-info">
                <div className="container_developer_info">
                {person.avatar ? <img src = {person.avatar} alt = 'avatar_url' className = 'account_circle_info'/> :  <AccountCircle className="account_circle_info" /> }
                    <div className="content_developer">
                        <p className="info_name">{person.github}</p>
                        <p className="info_name designation">Web Developer</p>
                        <div className="container_developer_info">
                        {person.github ? <a href={`https://github.com/${person.github}`} target="_blank" rel="noreferrer"><img src={GithubIcon} className="social_icon" alt="" /></a>: ''   }
                        {person.hackeerank ? <a href={`https://www.hackerrank.com/${person.hackeerank}`} target="_blank" rel="noreferrer"><img src={Hackeerank} className="social_icon" alt="" /></a>: '' }
                        {person.linkedin ? <a href={`https://www.linkedin.com/in/${person.linkedin}`} target="_blank" rel="noreferrer"><img src={LinkedinIcon} className="social_icon" alt="" /></a>: ''}
                        {person.twitter ? <a href={`https://twitter.com/${person.twitter}`} target="_blank" rel="noreferrer"><img src={Twitter} className="social_icon" alt="" /></a>: ''}
                        {person.medium ? <a href={`https://medium.com/${person.medium}`} target="_blank" rel="noreferrer"><img src={Medium} className="social_icon" alt="" /></a>: ''}
                        {person.codechef ? <a href={`https://www.codechef.com/users/${person.codechef}`} target="_blank" rel="noreferrer"><img src={CodeChef} className="social_icon" alt="" /></a>: '' }
                        {person.email ? <a href={person.email} target="_blank" rel="noreferrer"><img src={Email} className="social_icon" alt="" /></a>: ''}
                        </div>
                        <div className="container_developer_info">
                            {person.location ? <div className="profile_icons"><Location /><span className="info_name location">{person.location}</span></div>: ''}
                            {person.company ? <div className="profile_icons"><Business /><span className="info_name location">{person.company}</span></div>: ''}
                            {person.blog ? <div className="profile_icons"><Link /><a href={person.blog} className="info_name location">{person.blog}</a></div>: ''}
                        </div>
                    </div>
                </div>
            </header>
        </div>
        ));

    return (
        <div>
            {peopleCards}
            </div>
        );
    }
}

export default withRouter(ProfileInfo);
