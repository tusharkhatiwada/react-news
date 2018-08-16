import React, { Component } from "react";
import { navigate } from "@reach/router";

import "../../css/index.css";

export default class Sidebar extends Component {
    state = {
        query: ""
    };
    handleSearchInput = event => {
        const query = event.target.value;
        this.setState({
            query
        });
    };
    handleSearch = () => {
        const { query } = this.state;
        navigate(`search/${query}`);
    };
    render() {
        const { query } = this.state;
        return (
            <div className="sidebar">
                <div className="input-group mb-3 search">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Posts"
                        value={query}
                        onChange={this.handleSearchInput}
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            <i className="fas fa-search" />
                        </span>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-primary" onClick={this.handleSearch}>
                            Search
                        </button>
                    </div>
                </div>
                <div className="topCategories mt-5">
                    <h4 className="header">Top Categories</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Entertainment</li>
                        <li className="list-group-item">Business</li>
                        <li className="list-group-item">Health</li>
                        <li className="list-group-item">Technology</li>
                    </ul>
                </div>
            </div>
        );
    }
}
