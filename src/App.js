import React from "react";

// components
import PageHeader from "./components/pageHeader";
import Carousel from "./components/carousel";
import Feature from './components/feature';
import PopularCourse from './components/popularCourse';

// data
import headerData from "./json/pageHeader";
import carouselData from "./json/carousel";
import featureData from './json/feature';
import popularCourseData from './json/popularCourse';

function App() {
    return (
        <div className="App">
            <PageHeader data={headerData} />
            <Carousel data={carouselData} />
            <Feature data={featureData}/>
            <PopularCourse data={popularCourseData}/>
        </div>
    );
}

export default App;
