import RestEndpoint from './RestEndpoint'
import API_ENDPOINT from "../config";

class AdminEndpoint extends RestEndpoint {
    constructor () {
        super(API_ENDPOINT, 'admin')
    }

    addProfessional(resource){
        return this.requestHelper.post( `${this.endpoint}/${this.resource}/professional`, resource);
    }

    listUsers(){
        return this.requestHelper.get(`${this.endpoint}/${this.resource}/users`)
    }


    destroyUser(user) {
        return this.requestHelper.destroy(`${this.endpoint}/${this.resource}/user/${user.id}`)
    }

    storeProfessional(professional) {
        return this.requestHelper.post(`${this.endpoint}/professionals/`, professional)

    }

    editProfessional(professional, id){
        return this.requestHelper.patch(`${this.endpoint}/professionals/${id}`, professional)
    }

}

export default AdminEndpoint;
