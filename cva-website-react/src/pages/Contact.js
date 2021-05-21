import React, {Component} from 'react';
import axios from "axios";
import API_ENDPOINT from "../config";
import ContactPopup from "../components/ContactPopup";

class Contact extends Component {

    state = {
        professionals: [],
        filteredProfessionals: [],
        therapyTypes: [],
        selectedProfessional: {},
        search: {
            professional_name: '',
            therapy_type: '',
        },
        form: {
            name: '',
            email: '',
            phone: '',
            content: ''
        },
        showPopup: false
    };

    getProfessional = () => {
        return axios.get(`${API_ENDPOINT}/professionals`);
    };

    getTherapyTypes = () => {
        return axios.get(`${API_ENDPOINT}/therapy-types`);
    };

    async componentDidMount() {
        const response = await axios.all([this.getProfessional(), this.getTherapyTypes()]);
        const professionals = response[0].data;
        const therapyTypes = response[1].data;
        this.setState({professionals, filteredProfessionals: professionals, therapyTypes});
    }

    handleChange = async (e) => {
        await this.setState({search: {...this.state.search, [e.target.name]: e.target.value}});

        const {search} = this.state;


        const filteredProfessionals = this.state.professionals.filter(professional => {
            return professional.professional_name.toLowerCase().includes(search.professional_name.toLowerCase())
                && professional.therapy_type.name.toLowerCase().includes(search.therapy_type.toLowerCase());
        });

        this.setState({filteredProfessionals});
    };

    handleChangeForm = e => {
        const {form} = this.state;
        this.setState({form: {...form, [e.target.name]: e.target.value}});

        console.log(this.state.form);
    };

    selectProfessional = (professional) => {
        if (this.state.selectedProfessional.id === professional.id) {
            this.setState({selectedProfessional: {}});
        } else {
            this.setState({selectedProfessional: professional});
        }
    };

    submitContactForm = async (e) => {
        e.preventDefault();

        const {selectedProfessional, form} = this.state;

        const {data} = await axios.post(`${API_ENDPOINT}/contact-message`,
            {
                professional_id: selectedProfessional.id,
                name: form.name,
                email: form.email,
                phone: form.phone,
                content: form.content
            });

        this.setState({
            form: {
                name: '',
                email: '',
                phone: '',
                content: ''
            },
            selectedProfessional: {},
            showPopup: true
        });

        setTimeout(() => {
            this.setState({
                showPopup: false
            })
        }, 1000);

    };




    render() {

        const {filteredProfessionals, search, selectedProfessional, form, showPopup} = this.state;


        const professionalList = filteredProfessionals.map(professional => {
            const selected = professional.id === selectedProfessional.id ? 'selected' : '';

            return (
                <div className={`nameContainer ${selected}`} key={professional.id} onClick={() => {
                    this.selectProfessional(professional)
                }}>
                    <p className="nameText">
                        {professional.professional_name}, &nbsp;
                        <span style={{color: professional.therapy_type.color_code}}>{professional.therapy_type.name}
                        </span>
                    </p>
                </div>
            )
        })

        return (
            <div className="ContactPage">

                <ContactPopup showPopup={showPopup}/>

                <div className="leftContainer">

                    {/* text describing the below search filter */}
                    <div className="textContainer">
                        <p className="filterHeader"> 1.Kies de professional </p>

                        <p className="filterText">
                            Uit de onderstaande lijst kunt u een professional
                            <br/>
                            kiezen die u een bericht wilt sturen.
                        </p>
                    </div>

                    <div className="filterContainer">
                        {/* this form lets the user filter the search */}
                        <div className="formContainer">

                            <div className="inputIconContainer">
                                <div className="iconWrapper">
                                    <img src={require('../assets/icons/icons/search_icon.svg')} className="icon"/>
                                </div>
                                <input placeholder="Zoek op naam" className="placeText"
                                       value={search.professional_name}
                                       onChange={this.handleChange} name={"professional_name"}
                                />
                            </div>

                            <div className="inputIconContainer">
                                <div className="iconWrapper">
                                    <img src={require('../assets/icons/icons/search_icon.svg')} className="icon"/>
                                </div>
                                <input placeholder="Zoek op professie" className="placeText"
                                       value={search.therapy_type} onChange={this.handleChange}
                                       name={"therapy_type"}
                                />
                            </div>

                        </div>

                        {/* displays the list of professional according to the filter */}
                        <div className="filteredList">
                            {professionalList}
                        </div>

                    </div>

                </div>
                <div className="ContactFormContainer">

                    <div className="textContainer">
                        <p className="FormHeader"> 2. Stuur de professional een bericht </p>

                        <p className="FormText"> {!selectedProfessional.id ?
                            <span>Kies in de linkerkolom de professional die u een bericht wilt sturen.</span> :
                            <span>Stuur uw bericht naar <b>{selectedProfessional.professional_name}, {selectedProfessional.therapy_type.name}</b></span>
                        }
                            <br id="TextNewLine"/> Vul het formulier in en kilk op verzenden
                        </p>
                    </div>

                    <form className="inputContainer" onSubmit={this.submitContactForm}>
                        <input placeholder="Naam" className="placeText" required
                               value={form.name} onChange={this.handleChangeForm} name={"name"}
                        />
                        <input placeholder="E-mailadres" className="placeText" required
                               value={form.email} onChange={this.handleChangeForm} name={"email"}
                        />
                        <input placeholder="Telefoonnummer" className="placeText"
                               value={form.phone} onChange={this.handleChangeForm} name={"phone"}
                        />
                        <textarea placeholder="Type hier je bericht" className="placeTextBig" required
                                  value={form.content} onChange={this.handleChangeForm} name={"content"}
                        />
                        <button className="submitButton" disabled={!selectedProfessional.id}> Verzend bericht</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default Contact;
