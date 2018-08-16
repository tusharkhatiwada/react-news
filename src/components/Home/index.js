import React, { Component } from "react";
import axios from "axios";

import Sidebar from "../Sidebar";
import Slider from "./slider";

import "../../css/index.css";

import { Url, ApiKey } from "../../constants";

export default class Home extends Component {
    state = {
        news: [],
        error: false,
        errorMessage: "",
        page: 1,
        isLoading: true
    };
    componentDidMount() {
        this.fetchPosts(1);
    }
    fetchPosts = page => {
        axios
            .get(`${Url}/top-headlines?country=us&pageSize=4&page=${page}&apiKey=${ApiKey}`)
            .then(response => {
                const res = response.data;
                if (res.status === "ok") {
                    this.setState({
                        news: res.articles,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        error: true,
                        errorMessage: "Unable to load top stories",
                        isLoading: false
                    });
                }
            })
            .catch(err => {
                console.log("Error fetching top headlines: ", err);
                this.setState({
                    error: true,
                    errorMessage: "Unable to load top stories",
                    isLoading: false
                });
            });
    };
    handlePrevious = () => {
        const { page } = this.state;
        const p = page - 1;
        this.setState({
            page: p
        });
        this.fetchPosts(p);
    };
    handleNext = () => {
        const { page } = this.state;
        const p = page + 1;
        this.setState({
            page: p
        });
        this.fetchPosts(p);
    };
    renderTopStories = () => {
        const { news } = this.state;
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
    };
    render() {
        const { page, isLoading, news } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Slider news={news} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            {isLoading ? <h4>Loading...</h4> : this.renderTopStories()}
                            <nav aria-label="Page navigation example" className="float-right">
                                <ul className="pagination">
                                    {page !== 1 && (
                                        <li className="page-item">
                                            <button
                                                className="page-link"
                                                onClick={this.handlePrevious}
                                            >
                                                Previous
                                            </button>
                                        </li>
                                    )}
                                    <li className="page-item">
                                        <button className="page-link" onClick={this.handleNext}>
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
