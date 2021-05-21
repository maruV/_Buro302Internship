import React, {Component} from 'react';
import SessionEndpoint from "../services/SessionEndpoint";
import AuthService from '../services/AuthService'

class Login extends Component {
    sessionEndPoint = new SessionEndpoint();

    state = {
        form: {
            email: '',
            password: '',
            passwordre: ''
        },
        loginError: false,
        wrongPassword: false,
        token: undefined
    };

    login = async (e) => {
        e.preventDefault();
        const {form} = this.state;
        try {
            console.log(form);
            const data = await this.sessionEndPoint.store(form);
            AuthService.setToken(data.access_token);
            AuthService.setUser(data.user);
            if (data.user.is_admin) {
                this.props.history.push('/admin');
            } else {
                this.props.history.push('/form/' + data.user.id);
            }
        } catch (e) {
            this.setState({loginError: true});
        }
    };

    register = (e) => {

        const {form, token} = this.state;
        const isTheSame = form.password == form.passwordre;
        this.setState({wrongPassword: !isTheSame});
        if (!isTheSame) {
            e.preventDefault();
            return; // give error
        }
        const data = {
            password: form.password,
            token
        };
        this.sessionEndPoint.registerUser(data)
            .then((data) => {
                AuthService.setToken(data.access_token);
                AuthService.setUser(data.user);
                this.props.history.push('/admin/form/');

            }).catch(() => {
            this.setState({loginError: true});
        });

        e.preventDefault()
    };

    handleFormChange = ({target}) => {
        const {form} = this.state;

        this.setState({
            form: {...form, [target.name]: target.value}
        })
    };

    componentDidMount() {
        const {token} = this.props.match.params;
        this.setState({token})
    }


    render() {
        const token = this.state.token;

        const loginForm = (
            <div className='loginBlock'>

                <div className='loginFormContainer'>
                    <div className='loginTitle'>Inloggen</div>
                    <div className='loginContent'>
                        <form className='loginForm' onSubmit={this.login}>
                            <div className='loginFormLabel'>Email-address</div>
                            <div className='loginFormField'>
                                <input type='email' placeholder='email@email.com' name={'email'} className='inputField'
                                       onChange={this.handleFormChange}/>
                            </div>
                            <div className='loginFormLabel'>Wachtwoord</div>
                            <div className='loginFormField'>
                                <input type='password' placeholder='****' name={'password'} className='inputField'
                                       onChange={this.handleFormChange}/>
                            </div>

                            <div className='errorBox' hidden={!this.state.loginError}>
                                That login is invalid
                            </div>

                            <div className='loginFormSubmit'>
                                <button className='loginButton' type='submit'>Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

        const registerForm = (
            <div className='loginBlock'>

                <div className='loginFormContainer'>
                    <div className='loginTitle'>Registereren</div>
                    <div className='loginContent'>
                        <form className='loginForm' onSubmit={this.register}>
                            <div className='loginFormLabel'>Wachtwoord</div>
                            <div className='loginFormField'>
                                <input type='password' placeholder='****' name={'password'} className='inputField'
                                       onChange={this.handleFormChange}/>
                            </div>

                            <div className='loginFormLabel'>Wachtwoord opnieuw</div>
                            <div className='loginFormField'>
                                <input type='password' placeholder='****' name={'passwordre'} className='inputField'
                                       onChange={this.handleFormChange}/>
                            </div>
                            {this.state.wrongPassword ? (<p>De wachtwoorden komen niet overeen</p>) : ''}

                            <div className='loginFormSubmit'>
                                <button className='loginButton' type='submit'>Registreer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );

        return token !== undefined ? registerForm : loginForm;
    }

}

export default Login;
