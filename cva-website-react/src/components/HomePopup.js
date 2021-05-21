import React, {Component} from 'react';

class HomePopup extends Component {

    state = {
        showPopUp: false,
    };

    siteVisited = () => {
        localStorage.setItem('visited', 'true');
    };

    closeBox = () => {
        document.getElementById("popup-container").classList.toggle('fading', true);
        setTimeout(()=>{
            this.setState({
                showPopUp: false
            });
            this.siteVisited();
        }, 500);
    };

    componentDidMount() {
        const visited = localStorage.getItem('visited');
        this.setState({
            showPopUp: !visited
        });
    }


    popUpBox =
        (
            <div id="popup-container" className="PopUpContainer">
                <div className={'backgroundPopup'} onClick={this.closeBox}/>
                <div className={'popUpBox'}>
                    <div className="crossContainer">
                        <img className="cross" src={require('../assets/icons/icons/close.svg')} onClick={this.closeBox} />
                    </div>
                    <div className={'linedBox'}>
                        <p className={'title'}>Welkom bij CVA Ketenzorg <br/>
                            Noordelijke Maasvallei, </p>

                        <p className={'textContent'}>
                            Welkom op de website van de CVA-zorgketen Noordelijke Maasvallei. Op deze website vind u
                            informatie over ons als keten (doel, visie en expertise) en onze
                            begeleidingsmogelijkheden.
                            Daarnaast bevat deze website informatie over gespecialiseerde professionals in de regio,
                            waar u
                            direct contact mee kunt opnemen.
                        </p>

                    </div>
                </div>
            </div>
        )
    ;


    render() {
        return (
            this.state.showPopUp ? this.popUpBox : null
        );

    };

}

export default HomePopup;
