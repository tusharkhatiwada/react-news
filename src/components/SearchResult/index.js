import React, { Component } from "react";
import axios from "axios";

import Sidebar from "../Sidebar";

import "../../css/index.css";

import { Url, ApiKey } from "../../constants";

export default class SearchResult extends Component {
    state = {
        news: [],
        error: false,
        errorMessage: ""
    };
    componentDidMount() {
        const query = this.props.query;
        axios
            .get(`${Url}/top-headlines?country=us&q=${query}&apiKey=${ApiKey}`)
            .then(response => {
                const res = response.data;
                if (res.status === "ok") {
                    if (res.articles.length > 0) {
                        this.setState({
                            news: res.articles
                        });
                    } else {
                        this.setState({
                            error: true,
                            errorMessage: `No articles found for ${query}`
                        });
                    }
                } else {
                    this.setState({
                        error: true,
                        errorMessage: "Unable to load top stories"
                    });
                }
            })
            .catch(err => {
                console.log("Error fetching top headlines: ", err);
                this.setState({
                    error: true,
                    errorMessage: "Unable to load top stories"
                });
            });
    }
    renderTopStories = () => {
        const { news, error, errorMessage } = this.state;
        if (error) {
            return <h3>{errorMessage}</h3>;
        } else {
            return news.map((n, i) => {
                if (n.urlToImage || n.description) {
                    return (
                        <div key={i} className="newsContainer">
                            <img src={n.urlToImage} alt="" className="img-fluid feturedImage" />
                            <div className="news">
                                <div className="category">
                                    <span>{n.source.name}</span>
                                </div>
                                <h3 className="newsTitle">
                                    <a href={n.url} target="_blank">
                                        {n.title}
                                    </a>
                                </h3>
                                <div className="newsDescription">
                                    <span>{n.description}</span>
                                </div>
                            </div>
                        </div>
                    );
                }
            });
        }
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">{this.renderTopStories()}</div>
                    <div className="col-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        );
    }
}
