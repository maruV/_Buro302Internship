import React, {Component} from 'react';
import API_ENDPOINT from "../config";

class ProfessionalPicture extends Component{


    render() {

        const {professional} = this.props;

        return (
            <div className="ProfessionalPicture">
                {
                    professional.image_url !== '' && professional.image_url !== null &&
                    <div className="ImageWrapper">
                        <img className="fit-cover" src={`${API_ENDPOINT}${professional.image_url}`} alt={`Foto van ${professional.professional_name}`}/>
                    </div>
                }


                <div className="nameContainer">
                    <p className="name"> {this.props.professional.professional_name} </p>
                    <p className="profession"> {this.props.professional.office_name} </p>
                </div>

                <div className="iconImageWrapper">
                    <img src={require('../assets/icons/icons/color/' + this.props.professional.therapy_type.name.toLowerCase() + '_kleur.svg')} className="pictureIcon"/>
                </div>
            </div>
        );
    }

}

export default ProfessionalPicture;
