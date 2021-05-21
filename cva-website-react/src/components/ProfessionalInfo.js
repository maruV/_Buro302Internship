import React, {Component} from 'react';


class ProfessionalInfo extends Component{

    openWebsite = (websiteUrl) => {
        window.open(websiteUrl,"_blank")
    };
    render() {


        return (
            <div className="ProfessionalInfo">

                <div className="ContactInfoContainer">
                    <div className="InfoTextContainer">
                        <div className="contactTextContainer">
                            <p className="contactHeader"> Contactgegevens </p>
                            <p className="contactText"><b>Naam:</b> {this.props.professional.professional_name} <br/>
                                <b>Straat:</b> {this.props.professional.street} <br/>
                                <b>Postcode:</b> {this.props.professional.postal} {this.props.professional.city} <br/>
                                <br/>
                                <b>Telefoonnummer:</b> {this.props.professional.phone_numbers} <br/>
                                <b>E-mailadres:</b> {this.props.professional.email_addresses}</p>
                        </div>
                        <div className="websiteLinkContainerWEB">
                            {this.props.professional.website_url == null ? '' : (<button onClick={this.openWebsite.bind(this,this.props.professional.website_url)} className="linkButton"> Ga naar website</button>)}
                        </div>
                    </div>

                    <div className="WorkDaysContainer">
                        <p className="workdaysHeader"> Werkdagen </p>
                        <p className="workdaysText"> {this.props.professional.work_days} in de regio {this.props.professional.city} </p>
                    </div>

                </div>

                <div className="PersonalInfoContainer">
                    <div className="AcademicInfoContainer">
                        <p className="academicHeader"> Werkervaring en scholing </p>

                        <p className="academicText">
                            {this.props.professional.work_experience}
                        </p>

                    </div>

                    <div className="OtherInfoContainer">
                        <p className="infoHeader"> Informatie </p>

                        <p className="infoText">
                            {this.props.professional.information}
                        </p>
                    </div>
                </div>

                <div className="websiteLinkContainerMOBILE">
                    {this.props.professional.website_url == null ? '' : (<button onClick={this.openWebsite.bind(this, this.props.professional.website_url)} className="linkButton2"> Ga naar website</button>)}
                </div>

            </div>
        );
    }
}

export default ProfessionalInfo;
