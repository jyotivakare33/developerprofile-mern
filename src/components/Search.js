import React, { Component } from 'react';
import searchtool from '../images/search-24px.svg';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

render() {
    return (
        <div>
            <p className="heading_explore">Explore Developer Profile</p>
            <hr className="divider" />
            <div className="search_main">
                <div className="outer_search">
                    <input type="text" placeholder="Search for Username"  value={this.state.id}
                                onChange={this.handleChange}
                                name="id"
                                className="inner_search"></input>
                    <a href={`/search/${this.state.id}`}><img src={searchtool} alt="" className="search_icon" /></a>
                </div>
            </div>
        </div>
    );
}
}

export default Search;
