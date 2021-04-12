import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Arrow from './Arrow';
import { ReactComponent as AccountCircle } from '../images/account_circle-24px.svg';

class DeveloperCard extends Component {
  
    render() {
        const { avatar, github } = this.props.person;

        return (
            <Card>
            <Card.Body>

            <div className="container_developer">
            <div>
            {avatar ? <img src = {avatar} alt = 'avatar_url' className = 'avatar_image'/> :  <AccountCircle className="account_circle" /> }
            </div>
            <p> <a href={`/${github}`} className="developer_name">{github}</a></p>
            <Arrow />
            </div>
            </Card.Body>
            </Card>
        );
    }
}

export default DeveloperCard;