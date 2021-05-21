import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import HomeBottomNavBar from '../components/HomeBottomNavBar';

class ProfessionalsList extends Component {

    handleProfessionalsChanged = (professionals) => {
        this.props.onProfessionalsChanged(professionals);
    };

    render() {

        const profs = this.props.filteredProfessionals.map((professional) =>
            <tr className={'Professional'} key={professional.id}>
                <td>{professional.professional_name}</td>
                <td className="therapievorm" style={{color: professional.therapy_type.color_code}}>{professional.therapy_type.name}</td>
                <td className="specialisatie">{professional.specialty}</td>
                <td className="adres">{professional.street} <br/>
                    {professional.postal} {professional.city}
                </td>
                <td className={'buttonElement'}>
                    <NavLink exact to={'/professionals/more-info/' + professional.id} className="link">
                        <button className={'more-info-button'} >Meer informatie</button>
                    </NavLink>
                </td>
            </tr>
        );

        return (
            <div className="prof-page">

                <div className="bottom-nav-bar-container">
                    <HomeBottomNavBar onProfessionalsChanged={this.handleProfessionalsChanged}
                                      professionals={this.props.professionals} />
                </div>

                <div className="tableContainer">

                    <table className={'ProfessionalsListContainer'}>
                        <thead>
                        <tr className={'filterListHeader'}>
                            <th className={'titleBlock'}>NAAM</th>
                            <th className={'titleBlock'}>THERAPIEVORM</th>
                            <th className={'titleBlock specialisatie'}>SPECIALISATIE</th>
                            <th className={'titleBlock adres'}>ADRES</th>
                            <th className={'titleBlock'}></th>
                        </tr>
                        </thead>
                        <tbody className={'ProfList'}>
                        {profs}
                        </tbody>
                    </table>

                </div>
            </div>
        );
    };
}

export default ProfessionalsList;
