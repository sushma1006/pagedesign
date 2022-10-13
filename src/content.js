import React from "react";
import man from './man1.png'
import './content.css'
class Contents extends React.Component{
    render(){
        return(
            <div className="contents">
                <div className="document">
                    <h1 className="documentation">Documentation Theme<br/> By Themefisher Team</h1>
                    <p className="paras">Lorem ipsum dolor amet, consetetur sadiffspscing elitr, diam nonumy<br/>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua At.</p>
                    <div className='inputButton'>
                        <input type="text" placeholder="Search Here For Answer's"/>
                        <button className="search">Search Now</button>
                    </div>
                    <p className="para"><span>*CHECK HERE* </span>For The Mostly Searched Questions</p>
                    <h3 className="topicFont">Browse Your Topics</h3>
                </div>
                <img className="man" src={man} alt="man"/>
            </div>
        );
    }
}

export default Contents;