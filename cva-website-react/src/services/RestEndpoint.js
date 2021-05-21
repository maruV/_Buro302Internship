import RequestHelper from '../helpers/RequestHelper'

class RestEndpoint {
    constructor (endpoint, resource) {
        this.endpoint = endpoint;
        this.resource = resource;
        this.requestHelper = new RequestHelper()
    }

    setAuthorization (token) {
        this.requestHelper.setAuthorization(token)
    }

    getKey(resource, key){
        return resource instanceof FormData ? resource.get(key) : resource[key];
    }

    hasKey(resource, key){
        return resource instanceof FormData ? resource.has(key) : resource[key] !== undefined;
    }

    all () {
        return this.requestHelper.get(`${this.endpoint}/${this.resource}`)
    }

    find (id) {
        return this.requestHelper.get(`${this.endpoint}/${this.resource}/${id}`)
    }

    store (resource) {
        return this.requestHelper.post(`${this.endpoint}/${this.resource}`, resource);
    }

    update (resource) {
        return this.requestHelper.patch(`${this.endpoint}/${this.resource}/${this.getKey(resource, 'id')}`, resource);
    }

    destroy (resource) {
        return this.requestHelper.destroy(`${this.endpoint}/${this.resource}/${this.getKey(resource, 'id')}`);
    }
}

export default RestEndpoint
