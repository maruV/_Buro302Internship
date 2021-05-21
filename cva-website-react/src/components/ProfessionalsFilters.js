import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import ProfessionalFilterFunction from "./ProfessionalFilterFunction";

class ProfessionalsFilters extends Component {

    state = {
        currentType: null
    };

    selectProfessionalsType = (type) => {
        const {currentType} = this.state;

        type = type !== currentType ? type : "all";

        let filteredProfessionals = [];
        if (type === 'all'){
            this.setState({currentType: null});
            filteredProfessionals = this.props.professionals;
        }else{
            this.setState({currentType: type});
            filteredProfessionals = this.props.professionals.filter(professional => professional.therapy_type.name === type);
        }
        this.props.onProfessionalsChanged(filteredProfessionals);

    };



    render() {
        const {currentType} = this.state;

        {console.log("cur type: ", currentType)}

        return (
            <div className="ProfessionalsFiltersContainer">
                <div className="filterHeadingContainer">
                    <h1 className="filterHeader">Kies je professional</h1>
                </div>

                <div className="filterIconsContainer">

                    <div onClick={ () => this.selectProfessionalsType('Fysiotherapie')}
                         className={`IconContainer ${currentType === 'Fysiotherapie'  ? 'selected' : ''}`}>
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/fysiotherapie.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Fysiotherapie</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Oefentherapie')}
                         className={`IconContainer ${currentType === 'Oefentherapie'  ? 'selected' : ''}`}>
                        <div  className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/oefentherapie.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Oefentherapie</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Logopedie')}
                         className={`IconContainer ${currentType === 'Logopedie'  ? 'selected' : ''}`} >
                        <div className="imageAndTextContainer ">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/logopedist.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Logopedie</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Ergotherapie')}
                         className={`IconContainer ${currentType === 'Ergotherapie'  ? 'selected' : ''}`} >
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/ergotherapie.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Ergotherapie</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Dietist')}
                         className={`IconContainer ${currentType === 'Dietist'  ? 'selected' : ''}`}>
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/dietist.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Dietist</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Revalidatie')}
                         className={`IconContainer ${currentType === 'Revalidatie'  ? 'selected' : ''}`}>
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/revalidatie.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Revalidatie</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Zorguitleen')}
                         className={`IconContainer ${currentType === 'Zorguitleen'  ? 'selected' : ''}`}>
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/zorguitleen.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Zorguitleen</p>
                        </div>
                    </div>

                    <div onClick={ () => this.selectProfessionalsType('Ziekenhuizen')}
                         className={`IconContainer ${currentType === 'Ziekenhuizen'  ? 'selected' : ''}`}>
                        <div className="imageAndTextContainer">
                            <div className="filterIconWrapper">
                                <img src={require('../../src/assets/icons/New icons-CVA/ziekenhuizen.svg')}
                                     className="filterImage"/>
                            </div>
                            <p className="filterTitle">Ziekenhuizen</p>
                        </div>
                    </div>

                </div>

            </div>
        );
    }

};

export default ProfessionalsFilters;
