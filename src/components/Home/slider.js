import React, { Component } from "react";

import "../../css/index.css";

export default class Slider extends Component {
    renderSlider = () => {
        const { news } = this.props;
        return news.map((n, i) => {
            return (
                <div key={i} className="slider">
                    <div className="image">
                        <img src={n.urlToImage} alt="" style={{ width: "100%", height: 350 }} />
                    </div>
                    <div className="featuredPosts">
                        <div className="category">
                            <span>{n.source.name}</span>
                        </div>
                        <h3 className="newsTitle">
                            <a href={n.url} target="_blank">
                                {n.title.slice(0, 50)}
                            </a>
                        </h3>
                    </div>
                </div>
            );
        });
    };
    render() {
        return <div className="sliderContainer">{this.renderSlider()}</div>;
    }
}
