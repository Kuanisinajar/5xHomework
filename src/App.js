import React from "react";

// components
import PageHeader from "./components/pageHeader";
import Carousel from "./components/carousel";
import Feature from './components/feature';

// data
import headerData from "./json/pageHeader";
import carouselData from "./json/carousel";

function App() {
    return (
        <div className="App">
            <PageHeader data={headerData} />
            <Carousel data={carouselData} />
            <Feature />
        </div>
    );
}

export default App;
