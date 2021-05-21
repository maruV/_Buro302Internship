import React, {Component} from 'react';
import HomeBottomNavBar from '../components/HomeBottomNavBar';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {NavLink} from "react-router-dom";
import PopUpHome from "../components/HomePopup";
import Axios from "axios";
import API_ENDPOINT from "../config";

class Home extends Component {

    state = {
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        professionals: [],
        filteredProfessionals: [],
    };

    componentDidMount() {
        Axios.get(`${API_ENDPOINT}/professionals`)
            .then(response => {
                const {data} = response;
                const professionals = Object.values(data);
                this.setState({professionals, filteredProfessionals: professionals});
            })
            .catch(err => {
                console.log(err);
            });
    }

    onMarkerClick = (props, marker) =>
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });

    onInfoWindowClose = () =>
        this.setState({
            showingInfoWindow: false,
            activeMarker: {}
        });

    onMapClicked = () => {
        if (this.state.showingInfoWindow)
            this.setState({
                showingInfoWindow: false,
                activeMarker: {}
            });
    };

    handleProfessionalsChanged = (professionals) => {
        this.setState({filteredProfessionals: professionals});
    };

    goToProfessionalPage = () => {
        this.props.history.push('/more-info/' + this.state.activeMarker.id);
    };

    render() {


        const googleMarkers = this.state.filteredProfessionals.map((professional) => {
            const icon = require('../assets/icons/icons/marker/locate-' + professional.therapy_type.color_code.replace('#', '') + '.svg');
            const iconMarker = new window.google.maps.MarkerImage(icon, null, null, null, new window.google.maps.Size(45, 45));
            return (
                <Marker name={'Current location'}
                        icon={iconMarker}
                        position={{lat: professional.latitude, lng: professional.longitude}}
                        onClick={this.onMarkerClick}
                        id={professional.id}
                        profName={professional.professional_name}
                        profSpec={professional.specialty == null ? '' : 'Specialistatie: ' + professional.specialty}
                        profStreet={professional.street}
                        profPostal={professional.postal + ' ' + professional.city}/>
            );
        });


        return (
            <div className="homeBlock">
                <PopUpHome/>

                <div className="linkContainer">
                    <NavLink to="/informatie" className="infoLink"><p>Informatie</p></NavLink>
                </div>


                <div className="map" onClick={e => {
                    if (e.target.classList.contains('more-info-button')) {
                        this.goToProfessionalPage();
                    }
                }}>
                    <Map google={this.props.google} zoom={12} className={'google-maps'} onClick={this.onMapClicked}
                         initialCenter={{lat: 51.829133, lng: 5.845228}} zoomControl={false}
                         streetViewControl={false}>

                        {/*for loop over all professionals and their lat and long locations*/}
                        {googleMarkers}
                        <InfoWindow marker={this.state.activeMarker}
                                    onClose={this.onInfoWindowClose}
                                    visible={this.state.showingInfoWindow}>
                            <div className={'popup-box-maps'}>
                                <div className={'professionalIcon'}>
                                    <img src={require('../assets/icons/icons/color/logopedie_kleur.svg')}
                                         className="icons"/>
                                </div>
                                <div className={'professionalTitle'}>
                                    <p className={'professionalName'}>{this.state.activeMarker.profName}</p>
                                    <p className={'professionalInfo'}>{this.state.activeMarker.profSpec}</p>
                                    <p className={'professionalAdress'}>
                                        {this.state.activeMarker.profStreet} <br/>
                                        {this.state.activeMarker.profPostal}
                                    </p>
                                    <button className={'more-info-button'}>Meer informatie</button>
                                </div>
                            </div>
                        </InfoWindow>
                    </Map>
                    <HomeBottomNavBar onProfessionalsChanged={this.handleProfessionalsChanged}
                                      professionals={this.state.professionals} onClick={this.onMapClicked}/>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCzIMZALyxjW2ZqcdGV7gEFnMceIP3w9B0'
})(Home)
