import React, {Component} from 'react';
import axios from "axios";
import API_ENDPOINT from "../../config";
import { withRouter } from 'react-router-dom';
import {NavLink} from "react-router-dom";
import AuthService from '../../services/AuthService';


import RequestHelper from "../../helpers/RequestHelper";

import AdminEndpoint from '../../services/AdminEndpoint';


class ProfessionalForm extends Component {

    fileReader = new FileReader();
    adminEndpoint = new AdminEndpoint();

    state = {
        imageFile: '',
        therapyTypes: [],
        form: {
            professional_name: '',
            office_name: '',
            therapy_type_id: '',
            specialty: '',
            image: '',
            email_addresses: '',
            phone_numbers: '',
            street: '',
            postal: '',
            city: '',
            work_experience: '',
            work_days: '',
            information: '',
            website_url: '',
            latitude: '',
            longitude: '',
        },
        error: false
    };


    async componentDidMount() {
        const {id} = this.props.match.params;


        const response = await axios.all([
            axios.get(`${API_ENDPOINT}/therapy-types`),
            id && axios.get(`${API_ENDPOINT}/professionals/${id}`)
        ]);

        let form = null;

        if (response[1]) {
            form = response[1].data;
            delete form.therapy_type;
            form.image = `${API_ENDPOINT}${form.image_url}`;
        }

        this.setState({
            therapyTypes: response[0].data,
            form: id ? form : this.state.form
        });
    }

    convertAdressTogeoLocation(adress) {
        return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=` + adress + `&key=AIzaSyCzIMZALyxjW2ZqcdGV7gEFnMceIP3w9B0`)
    }


    handleImageUpload = ({target}) => {
        const selectedImage = target.files[0];
        const {form} = this.state;

        this.fileReader.onload = ({target}) => {
            this.setState({
                imageFile: selectedImage,
                form: {...form, image: target.result}
            });
        };

        this.fileReader.readAsDataURL(selectedImage);
    };

    handleChange = (e) => {
        const {form} = this.state;

        this.setState({form: {...form, [e.target.name]: e.target.value}});
        this.setState({error: false});
    };

    saveForm = async (e) => {
        e.preventDefault();


        const {form, imageFile} = this.state;
        const formToMakeFormData = {...form, image: imageFile};

        const formData = await RequestHelper.convertToFormData(formToMakeFormData);

        const locationData = await this.convertAdressTogeoLocation(formData.get('street') + ' ' + formData.get('postal') + ' ' + formData.get('city'));


        if (!locationData.data || locationData.data.status === 'ZERO_RESULTS') {
            this.setState({error: true});
            return;
        }

        const loc = locationData.data.results[0].geometry.location;
        formData.set('longitude', loc.lng);
        formData.set('latitude', loc.lat);

        let data = {};

        if (form.id) {

            data = await this.adminEndpoint.editProfessional(formData, form.id);
        } else {
            data = await this.adminEndpoint.storeProfessional(formData);
        }

        this.props.history.push(`/more-info/${data.id}`);




    };

    render = () => {

        const {form, therapyTypes} = this.state;

        let therapyTypesSelects = [<option selected value="" disabled>Kies een therapievorm</option>];

        if (therapyTypes.length > 0) {
            therapyTypesSelects.push(therapyTypes.map(therapyType => {
                return (<option key={therapyType.id} value={therapyType.id}>{therapyType.name}</option>)
            }));
        }

        return (
            <form onSubmit={this.saveForm} className={"professional-form"}>

                <div className="logOutButtonContainer">
                    <NavLink to="/login" className="logOutButton" onClick={() => AuthService.logout()}>
                        Log out
                    </NavLink>
                </div>

                <div className={"form-control"}>
                    <label>Naam van Professional *</label>
                    <input type={"text"} name={"professional_name"} required
                           value={form.professional_name} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Naam van Praktijk *</label>
                    <input type={"text"} name={"office_name"} required
                           value={form.office_name} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Therapievorm *</label>
                    <select name={"therapy_type_id"}
                            value={form.therapy_type_id} onChange={this.handleChange}>
                        {therapyTypesSelects}
                    </select>
                </div>

                <div className={"form-control"}>
                    <label>Specialiteit</label>
                    <input type={"text"} name={"specialty"}
                           value={form.specialty} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Profielfoto</label>
                    <div className={"image-upload"}>
                        <input
                            type="file"
                            onChange={this.handleImageUpload}
                        />
                        <div className={`image-container ${form.image && 'show'}`}>
                            <img src={form.image} alt={'Professional Foto'}/>
                        </div>
                    </div>

                </div>

                <div className={"form-control"}>
                    <label>E-mail adressen *</label>
                    <input type={"text"} name={"email_addresses"} required
                           value={form.email_addresses} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Telefoonnummers *</label>
                    <input type={"text"} name={"phone_numbers"} required
                           value={form.phone_numbers} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Straat *</label>
                    <input type={"text"} name={"street"} required
                           value={form.street} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Postcode *</label>
                    <input type={"text"} name={"postal"} required
                           value={form.postal} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Stad *</label>
                    <input type={"text"} name={"city"} required
                           value={form.city} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Werkervaring en scholing *</label>
                    <textarea name={"work_experience"} required
                              value={form.work_experience} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Werkdagen *</label>
                    <input type={"text"} name={"work_days"} required
                           value={form.work_days} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Informatie *</label>
                    <textarea name={"information"} required
                              value={form.information} onChange={this.handleChange}/>
                </div>

                <div className={"form-control"}>
                    <label>Website</label>
                    <input type={"text"} name={"website_url"} placeholder={"https://www.cva-ketenzorg.nl"}
                           value={form.website_url} onChange={this.handleChange}/>
                </div>
                {this.state.error ?
                    <p style={{color: '#FF0000'}}>The opgegeven combinatie van straat, postcode en stad is
                        incorrect.</p> : ''}

                <button>
                    Opslaan
                </button>
            </form>
        );
    }

}

export default withRouter(ProfessionalForm);
