import React, {Component} from 'react';
import ProfessionalsList from '../components/ProfessionalsList';
import ProfessionalsFilters from '../components/ProfessionalsFilters';
import Axios from "axios";
import API_ENDPOINT from "../config";

class Professionals extends Component {

    state = {
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
    handleProfessionalsChanged = (professionals) => {
        this.setState({filteredProfessionals: professionals});
    };


    render() {
        return (
            <div className="filter-listcontainer professionalPage">
                <ProfessionalsFilters onProfessionalsChanged={this.handleProfessionalsChanged}
                                      professionals={this.state.professionals}/>
                <ProfessionalsList onProfessionalsChanged={this.handleProfessionalsChanged}
                                   professionals={this.state.professionals}
                                   filteredProfessionals={this.state.filteredProfessionals}/>
            </div>
        )
    }
}

export default Professionals;
