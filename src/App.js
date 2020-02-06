import React from "react";

// components
import PageHeader from "./components/pageHeader";
import Carousel from "./components/carousel";
import Feature from "./components/feature";
import PopularCourse from "./components/popularCourse";
import Feedback from "./components/feedback";
import Showcase from './components/showcase';

// data
import headerData from "./json/pageHeader";
import carouselData from "./json/carousel";
import featureData from "./json/feature";
import popularCourseData from "./json/popularCourse";
import feedbackData from './json/feedback';
import showcaseData from './json/showcase';

function App() {
    return (
        <div className="App">
            <PageHeader data={headerData} />
            <Carousel>
                {carouselData.carouselItem.map((item, i) => {
                    return (
                        <img
                            src={item.img_url}
                            className="carousel_img"
                            alt=""
                            key={i}
                        />
                    );
                })}
            </Carousel>
            <Feature data={featureData} />
            <PopularCourse data={popularCourseData} />
            <Feedback data={feedbackData}/>
            <Showcase data={showcaseData}/>
        </div>
    );
}

export default App;
