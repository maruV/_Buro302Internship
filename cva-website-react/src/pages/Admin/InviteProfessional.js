import React, {Component} from 'react';
import AdminEndpoint from '../../services/AdminEndpoint';
class InviteProfessional extends Component {
    state = {
        form: {
            email: ''
        },
        message: '',
        showMessage: false,
        success: false
    };
    adminEndpoint = new AdminEndpoint();

    handleFormChange = ({target}) => {
        const {form} = this.state;

        this.setState({
            form: {...form, [target.name]: target.value}
        })
    };

    sendInvitation = (e, form) => {
        this.adminEndpoint.addProfessional(form).then(() => {
            this.setState({success: true, message: 'Er een is een mail verstuurd naar: ' + form.email, showMessage: true})
        }, (err) => {
            console.log(err);
            this.setState({message: err.errors.email, success: false, showMessage: true});
        });
        e.preventDefault();
        e.target.reset();
    };
    render() {
        const {form} = this.state;
        return (
            <div className='adminBlockInvite'>
                {/*<button onClick={this.logout}>Bye bye</button>*/}


                <div className={'createProfessional'}>
                    <div className={'title'}>Voeg professional toe</div>
                    <form className={'content'} onSubmit={e => this.sendInvitation(e, form)}>
                        <div className='loginFormLabel'>Email-address</div>
                        <div className='loginFormField'>
                            <input type='email' placeholder='email@email.com' onChange={this.handleFormChange}  name={'email'} className='inputField'/>
                        </div>
                        <div className='errorBox' style={{'background-color': this.state.success ? 'green' : 'red'}} hidden={!this.state.showMessage}>
                            {this.state.message}
                        </div>
                        <div className='loginFormSubmit'>
                            <button className='loginButton' type='submit'>Verstuur uitnodiging</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default InviteProfessional;
