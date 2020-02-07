import React from "react";

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
            <PageHeader data={headerData} />
            <Main />
            <PageFooter data={footerData} />
        </div>
    );
}

export default App;
