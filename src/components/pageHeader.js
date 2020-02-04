import React from "react";

const PageHeader = props => {
    const { navItem, logo_url } = props.data;

    return (
        <header className="pageHeader">
            <nav className="navBar">
                <div className="navBar_left">
                    <a href="/">
                        <img src={logo_url} alt="" />
                    </a>
                </div>
                <div className="navBar_right navItem_wrapper">
                    {navItem.reverse().map((data, i) => {
                        return (
                            <div className="navItem" key={i}>
                                <a href="/">{data.text}</a>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
};

export default PageHeader;
