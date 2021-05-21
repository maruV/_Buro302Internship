import RestEndpoint from './RestEndpoint'
import API_ENDPOINT from "../config";

class SessionEndpoint extends RestEndpoint {
    constructor () {
        super(API_ENDPOINT, 'auth')
    }

    me () {
        return this.requestHelper.get(`${this.endpoint}/${this.resource}/me`)
    }

    destroy () {
        return this.requestHelper.destroy(`${this.endpoint}/${this.resource}`)
    }

    registerUser(form) {
        return this.requestHelper.post(`${this.endpoint}/${this.resource}/register`, form)
    }
}

export default SessionEndpoint
