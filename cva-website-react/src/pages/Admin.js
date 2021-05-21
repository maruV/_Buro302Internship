import React, {Component} from 'react';
import InviteProfessional from "./Admin/InviteProfessional";
import ListProfessionals from "./Admin/ListProfessionals";
class Admin extends Component {


    render() {
        return (
            <div className='adminBlock'>
                <InviteProfessional/>
                <ListProfessionals professionals={this.props.professionals}/>
            </div>


        );
    }

}

export default Admin;
