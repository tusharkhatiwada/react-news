import React, { Component } from "react";
import { Router } from "@reach/router";

import Home from "./components/Home";
import Entertainment from "./components/Entertainment";
import Health from "./components/Health";
import Business from "./components/Business";
import Technology from "./components/Technology";
import Layout from "./layout";

const App = () => (
    <Router>
        <Layout path="/">
            <Home path="home" />
            <Entertainment path="entertainment" />
            <Health path="health" />
            <Business path="business" />
            <Technology path="technology" />
        </Layout>
    </Router>
);

export default App;
