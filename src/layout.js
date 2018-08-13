import React, { Component } from "react";
import { Link } from "@reach/router";

import "./css/index.css";

import logo from "./images/logo.png";

export default class Layout extends Component {
    state = {
        isCollapsed: false
    };
    render() {
        const { isCollapsed } = this.state;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 logo-container">
                        <img src={logo} alt="" className="img-fluid logo" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark app-navbar">
                            <button
                                className={
                                    isCollapsed ? "navbar-toggler collapsed" : "navbar-toggler"
                                }
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                                onClick={() => this.setState({ isCollapsed: !isCollapsed })}
                            >
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div
                                className={
                                    isCollapsed
                                        ? "collapse navbar-collapse show"
                                        : "collapse navbar-collapse"
                                }
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="home">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="entertainment">
                                            Entertainment
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="business">
                                            Business
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="health">
                                            Health
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="technology">
                                            Technology
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
