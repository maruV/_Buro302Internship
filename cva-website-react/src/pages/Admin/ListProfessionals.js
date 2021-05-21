import React, {Component} from 'react';
import AdminEndpoint from '../../services/AdminEndpoint';
import {NavLink, withRouter} from 'react-router-dom';
import AuthService from "../../services/AuthService";

class ListProfessionals extends Component {
    adminEndpoint = new AdminEndpoint();

    state = {
        users: [],
        message: null
    };

    componentDidMount() {
        this.adminEndpoint.listUsers().then((users) => {
            this.setState({users});
        });
    };

    deleteUser = (user) => {
        this.adminEndpoint.destroyUser(user).then(() => {
            this.setState({message: 'Gebruiker ' + user.email + ' is verwijdert'});
            this.adminEndpoint.listUsers().then((users) => {
                this.setState({users});
            });
        });

    };

    editUser = async (user) => {
        this.props.history.push(`/admin/form/${user.id}`)
    };

    render() {

        const professionals = this.state.users.map((user) => (
            <div className={'professionalItem'}>
                <div className={'professionalName'}>{user.email}</div>
                <div className={'professionalStatus'}>{user.email_verified_at != null ? 'Activated' : 'Pending'}</div>

                <div className={'professionalOptions'}>
                    {<button className={'editProfessional'} onClick={() => this.editUser(user)}>Aanpassen</button>}
                    {<button className={'removeProfessional'}
                             onClick={this.deleteUser.bind(this, user)}>Verwijderen</button>}
                </div>
            </div>
        ));

        return (
            <div className='adminBlockList'>
                <div className="logOutButtonContainer">
                    <NavLink to="/login" className="logOutButton" onClick={() => AuthService.logout()}>
                        Log out
                    </NavLink>
                </div>

                <div className={'createProfessional'}>
                    <div className={'title'}>Alle professionals</div>
                    <div className={'professionalList'}>
                        {professionals}
                    </div>
                    <div className='errorBox' style={{'background-color': 'green'}}
                         hidden={!this.state.message == null}>
                        {this.state.message}
                    </div>
                </div>
            </div>


        );
    }

}

export default withRouter(ListProfessionals);
