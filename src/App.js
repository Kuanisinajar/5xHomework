import React from "react";
import { BrowserRouter } from "react-router-dom";

// components
import PageHeader from "./components/pageHeader";
import Main from "./components/main";
import PageFooter from "./components/pageFooter";

// data
import headerData from "./json/pageHeader";
import footerData from "./json/footer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader data={headerData} />
                <Main />
                <PageFooter data={footerData} />
            </BrowserRouter>
        </div>
    );
}

export default App;
