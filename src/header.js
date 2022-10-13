import React from "react";
import logo from './GoDocs.png';
import './header.css';
import drop from './down-arrow.png'
class Header extends React.Component{
    render(){
        return(
            <div className="container">
                <ul>
                    <div className="list">
                        <li className="image"><img src={logo} alt="logo"/></li>
                        <li className="name">GoDocs</li>
                    </div>
                    <div className="listButton">
                    <div className="lists">
                        <li className="home">Home</li>
                        <div className="doc">
                            <li >Docs</li>
                            <img className="drop" src={drop} alt="dropdown"/>
                        </div>
                        <li className="github">Github</li>
                        <li className="faq">FAQ</li>
                    </div>
                    <div className="buttons">
                        <li><button className="change">Changelogs</button></li>
                        <li><button className="contact">Contact</button></li>
                    </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default Header;