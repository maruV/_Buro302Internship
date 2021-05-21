import React, {Component} from 'react';

class HomeBottomNavBar extends Component {

    state = {
        currentType: null
    };

    componentDidMount() {
        this.showOrHideArrows();
        document.getElementById("bottom-nav-bar").addEventListener('scroll', () => {
            this.showOrHideArrows();
        });
    }

    showOrHideArrows(){
        let scrollDiv = document.getElementById("bottom-nav-bar");
        if(scrollDiv.scrollLeft == 0){
            document.getElementById("NavArrowWrapperRight").classList.toggle("hide-arrow", false);
            document.getElementById("NavArrowWrapperLeft").classList.toggle("hide-arrow",true);
            return;
        }

        if(scrollDiv.scrollLeft >= scrollDiv.scrollWidth - scrollDiv.clientWidth){
            document.getElementById("NavArrowWrapperRight").classList.toggle("hide-arrow",true);
            document.getElementById("NavArrowWrapperLeft").classList.toggle("hide-arrow",false);
            return;
        }
        document.getElementById("NavArrowWrapperRight").classList.toggle("hide-arrow", false);
        document.getElementById("NavArrowWrapperLeft").classList.toggle("hide-arrow", false);

    }

    selectProfessionalsType = (type) => {
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

        return (

            <div id="bottom-nav-bar" className="bottomNavBar">
                <div onClick={() => this.selectProfessionalsType('all')}
                     className={`linkWrapper ${currentType === null  ? 'selected' : ''}`} id="leftBorder" >
                    <div  className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../../src/assets/icons/icons/discipline/filter-alle.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Alle </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Fysiotherapie' ? 'selected' : ''}`} onClick={() => this.selectProfessionalsType('Fysiotherapie')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/filter-fysiotherapeut.svg')}
                                 className="icons"/>
                        </div>
                        <p className="professionalTitle"> Fysiotherapie </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Oefentherapie' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Oefentherapie')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/filter-oefentherapie.svg')}
                                 className="icons"/>
                        </div>
                        <p className="professionalTitle"> Oefentherapie </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Logopedie' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Logopedie')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/logopedist.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Logopedie </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Ergotherapie' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Ergotherapie')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/ergotherapie.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Ergotherapie </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Dietist' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Dietist')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/dietist.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Dietist </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Revalidatie' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Revalidatie')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/filter-revalidatie.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Revalidatie </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Zorguitleen' ? 'selected' : ''}`} onClick={this.selectProfessionalsType.bind(this, 'Zorguitleen')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/zorguitleen.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Zorguitleen </p>
                    </div>
                </div>

                <div className={`linkWrapper ${currentType === 'Ziekenhuizen' ? 'selected' : ''}`} id="rightBorder" onClick={this.selectProfessionalsType.bind(this, 'Ziekenhuizen')}>
                    <div className="iconsContainer">
                        <div className="imageWrapper">
                            <img src={require('../assets/icons/icons/discipline/ziekenhuizen.svg')} className="icons"/>
                        </div>
                        <p className="professionalTitle"> Ziekenhuizen </p>
                    </div>
                </div>

                <div id="NavArrowWrapperRight" className="NavArrowWrapperRight" >
                    <img src={require('../../src/assets/icons/mobile/white-down-arrow-png-2.png')}/>
                </div>

                <div id="NavArrowWrapperLeft" className="NavArrowWrapperLeft" >
                    <img src={require('../../src/assets/icons/mobile/white-down-arrow-png-2.png')}/>
                </div>

            </div>
        );
    }
}

export default HomeBottomNavBar;
