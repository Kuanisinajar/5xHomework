import React, { Component } from "react";

class Carousel extends Component {
    state = {
        currentIndex: 0
    };

    transformProperty = (index) => {
        return {
            transform: `translate(-${index}00%, 0)`
        }
    }

    toIndex = i => {
        this.setState({
            currentIndex: i
        })
    };

    render() {
        const { carouselItem } = this.props.data;
        const currentIndex = this.state.currentIndex;

        return (
            <div className="carousel">
                <div className="carousel_container">
                    <div className="carousel_itemWrapper" style={this.transformProperty(currentIndex)}>
                        {carouselItem.map((item, i) => {
                            return (
                                <img
                                    src={item.img_url}
                                    className="carousel_img"
                                    alt=""
                                    key={i}
                                />
                            );
                        })}
                    </div>
                    <div className="carousel_indicator">
                        {carouselItem.map((item, i) => {
                            return (
                                <span
                                    className={`indicator ${
                                        currentIndex === i ? "active" : ""
                                    }`}
                                    onClick={() => {
                                        this.toIndex(i)
                                    }}
                                    data-carousel={i}
                                    key={i}
                                ></span>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
