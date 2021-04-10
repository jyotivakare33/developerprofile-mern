import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Arrow from './Arrow';

class Repository extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        };           
    }
    
    componentDidMount() {
        fetch(`https://api.github.com/users/${this.props.match.params.id}/repos`)
            .then((response) => response.json())
            .then((repos) => {
                this.setState({
                    repos,
                });
            });
            console.log(this.state.repos);
    }



    render() {
        const peopleCards = this.state.repos.map((repo) => (
                <div>
                    <div className="container_developer_repo">
                        <a href={repo.html_url} target="_blank" rel="noreferrer" className="repo_name">{repo.name}</a><span><Arrow /></span>
                    </div>
                    <hr className="divider" />
                </div>
        ));

    return (
        <div>
            <h1 className="github_repos_heading">Github Repositories</h1>
            <hr className="divider" />
            {peopleCards}
        </div>
        );
    }
}

export default withRouter(Repository);
