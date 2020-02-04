import React, { Component } from "react";


class PageHeader extends Component {
    state = {
        navItem: [],
        logo_url: '', 
        activeInMobile: false
     }

     toggleActive = () => {
         this.setState({
             activeInMobile: !this.state.activeInMobile
         })
     }

    render() { 
        const { navItem, logo_url } = this.props.data;

        return (
            <header className="pageHeader">
                <nav className="navBar">
                    <div className="navBar_logo">
                        <a href="/">
                            <img src={logo_url} alt="" />
                        </a>
                    </div>
                    <button className='navBar_toggle' onClick={this.toggleActive}>
                        <div className='iconBar'></div>
                        <div className='iconBar'></div>
                        <div className='iconBar'></div>
                    </button>
                    <div className={`navBar_itemWrapper ${this.state.activeInMobile ? 'active' : ''}`}>
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
    }
}
 


export default PageHeader;
