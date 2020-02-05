import React, { Component } from "react";

class Carousel extends Component {
    state = {
        currentIndex: 0,
        interval: null
    };

    componentDidMount() {
        this.startAutoSlide()
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    startAutoSlide() {
        const interval = setInterval(() => {
            this.setState({
                currentIndex: (this.state.currentIndex + 1) % 4
            })
        }, 5000);
        this.setState({
            interval
        })
    }

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

    handleClick = (i) => {
        this.toIndex(i);
        clearInterval(this.state.interval);
        this.startAutoSlide();
    }

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
                                        this.handleClick(i)
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
