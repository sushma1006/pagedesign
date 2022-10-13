import React from "react";
import box from './Logo.jpg'
import boximg from './Logo1.jpg'
import boximage from './Logo2.jpg'
import boximages from './Logo3.jpg'
import './footer.css'
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <div className="box">
                    <img className="logoImage"src={box} alt="box"/>
                    <h4 className="cardsName">Account <br/> Billing</h4>
                    <p className="sentence">Lorem ipsum dolor amet,<br/>consetetur sadipscing <br/>elitr,invidunt ut labore et</p>
                </div>
                <div className="boxImg">
                    <img className="logoImage" src={boximg} alt="boximg"/>
                    <h4 className="cardsName">Basic <br/> Startup</h4>
                    <p className="sentence">Lorem ipsum dolor amet,<br/>consetetur sadipscing <br/>elitr,invidunt ut labore et</p>
                </div>
                <div className="boxImage">
                    <img className="logoImage" src={boximage} alt="img"/>
                    <h4 className="cardsName">Theme<br/> Features</h4>
                    <p className="sentence">Lorem ipsum dolor amet,<br/>consetetur sadipscing <br/>elitr,invidunt ut labore et</p>
                </div>
                <div className="boxImages">
                    <img className="logoImage" src={boximages} alt="img"/>
                    <h4 className="cardsName">Theme <br/>Customization</h4>
                    <p className="sentence">Lorem ipsum dolor amet,<br/>consetetur sadipscing <br/>elitr,invidunt ut labore et</p>
                </div>
           </div> 
        )
    }
}

export default Footer;
