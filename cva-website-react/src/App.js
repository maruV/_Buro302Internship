import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Axios from 'axios';
import API_ENDPOINT from "./config";

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Begeleiding from './pages/Begeleiding';
import Professionals from './pages/Professionals';
import Informatie from './pages/Informatie';
import Contact from './pages/Contact';

import Login from "./pages/Login";
import MoreInfo from "./pages/MoreInfo";
import Admin from "./pages/Admin";
import User from "./pages/User";
import PrivateRoute from "./components/PrivateRoute";
import ProfessionalForm from "./pages/Admin/ProfessionalForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            professionals: []
        }
    }


    async componentDidMount() {

        const {data} = await Axios.get(`${API_ENDPOINT}/professionals`);
        this.setState({professionals: data});

    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path='/' render={(props) => (
                        <Home />
                    )}/>
                    <Route exact path='/professionals' render={() => (
                        <Professionals />
                    )}/>


                    <Route path='/begeleiding' component={Begeleiding}/>
                    <Route path='/informatie' component={Informatie}/>
                    <Route path='/contact' component={Contact}/>
                    <Route exact path='/professionals/more-info/:id' render={(props) => (
                        <MoreInfo
                            professionals={this.state.professionals}
                            {...props}
                        />
                    )}/>

                    <Route exact path='/login' component={Login}/>

                    <PrivateRoute path='/user' component={User}/>
                    <PrivateRoute exact path='/admin' render={() => (
                        <Admin
                            professionals={this.state.professionals}
                        />
                    )}/>
                    <Route exact path={'/login/:token'} component={Login}/>
                    <PrivateRoute exact path='/admin/form/' component={ProfessionalForm}/>
                    <PrivateRoute path='/admin/form/:id' component={ProfessionalForm}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
