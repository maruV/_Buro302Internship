import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component{

    state = {
        showOverlay: false
    };

    openOverlay = () => {
        this.setState({showOverlay: true});
        setTimeout(()=>{
            document.getElementById("popOverMenu").classList.toggle('active', true);
        },50);
    };

    closeOverlay= () => {
        document.getElementById("popOverMenu").classList.toggle('active', false);
        setTimeout(()=>{
            this.setState({showOverlay: false});
        },500)
    };

    Overlay =
        (
            <div id="popOverMenu" className="menuOverlayContainer">
                <div className="crossContainer">
                    <img className="cross" src={require('../assets/icons/icons/close.svg')} onClick={this.closeOverlay} />
                </div>

                <div className="OverlayLinksContainer">
                    <div className="LinkContainer">
                        <NavLink exact to="/" activeStyle={{color:"#f6a500"}} className="OverlayLinks" onClick={this.closeOverlay}><p> Home </p></NavLink>
                    </div>

                    <div className="LinkContainer">
                        <NavLink to="/professionals" activeStyle={{color:"#f6a500"}} className="OverlayLinks" onClick={this.closeOverlay}><p> Professionals </p></NavLink>
                    </div>

                    <div className="LinkContainer">
                        <NavLink to="/begeleiding" activeStyle={{color:"#f6a500"}} className="OverlayLinks" onClick={this.closeOverlay}><p> Begeleiding </p></NavLink>
                    </div>

                    <div className="LinkContainer">
                        <NavLink to="/informatie" activeStyle={{color:"#f6a500"}} className="OverlayLinks" onClick={this.closeOverlay}><p> Informatie </p></NavLink>
                    </div>

                    <div id="removeBorder" className="LinkContainer">
                        <NavLink to="/contact" activeStyle={{color:"#f6a500"}} className="OverlayLinks" onClick={this.closeOverlay}><p>Contact</p></NavLink>
                    </div>
                </div>

                <div className="transparentBackground" onClick={this.closeOverlay}>
                </div>

            </div>
        );

    render() {

        return (

            <div>

                <div className="navBarContainer">

                    <div className="cvaNavLogoContainer">
                        <Link to="/" className="cvaHome">
                            <div className="image-wrapper2">
                                <img src={require('../assets/images/homelogo.png')}/>
                            </div>
                        </Link>
                    </div>

                    <div className="menuButtonWrapper" onClick={this.openOverlay}>
                        <button className="menuButton">
                            <img src={require('../assets/icons/mobile/button_mobilemenu.png')}/>
                        </button>

                    </div>

                    {this.state.showOverlay ? this.Overlay : null}

                    <div className="buttonListContainer">

                        <div className="buttonContainer">
                            <NavLink to="/begeleiding" activeStyle={{color:"#f6a500"}} className= "cvaNavButtons" > Begeleiding </NavLink>
                        </div>

                        <div className="buttonContainer">
                            <NavLink to="/professionals" activeStyle={{color:"#f6a500"}} className="cvaNavButtons"> Professionals </NavLink>
                        </div>

                        <div className="buttonContainer">
                            <NavLink to="/informatie" activeStyle={{color:"#f6a500"}} className="cvaNavButtons"> Informatie </NavLink>
                        </div>

                        <div className="buttonContainerContacts">
                            <NavLink to="/contact" activeStyle={{color:"#f6a500"}} className="cvaNavButtons"> Contact </NavLink>
                        </div>

                    </div>

                </div>

                <div className="navBarContainer static-push">
                </div>

            </div>
        );
    }
}

export default Navbar;
