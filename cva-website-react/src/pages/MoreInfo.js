import React, {Component} from 'react';
import ProfessionalPicture from '../components/ProfessionalPicture';
import ProfessionalInfo from '../components/ProfessionalInfo';

{/* This page displays information about specific professionals */
}

class MoreInfo extends Component {

    render() {
        let professional = {};
        const { id } = this.props.match.params;
        if(id == null){
            // no professional is selected redirect to professional page
            this.props.history.push('/Professionals');
            return null;
        }else{
            if(this.props.professionals.length === 0){
                return null;
            }
            professional = this.props.professionals.find( (professional) => {
                return professional.id == id;
            });
        }
        return (
            <div className="MoreInfo">
                <ProfessionalPicture professional={professional}/>
                <ProfessionalInfo professional={professional} />

                <div className="downscrollImageWrapper">
                    <img src={require('../assets/icons/downArrow.png')} />
                </div>
            </div>
        )
    }
}

export default MoreInfo;
