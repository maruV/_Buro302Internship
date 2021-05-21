import AuthService from '../services/AuthService'
import Axios from 'axios';

class RequestHelper {
    static convertToFormData (object) {
        const formData = new FormData();
        Object.keys(object).filter(key => object[key] !== null && object[key] !== '').forEach(key => {
            let value = object[key]
            if (Array.isArray(value)) {
                for (const item of value) {
                    formData.append(`${key}[]`, item)
                }
                return
            }

            formData.append(key, value)
        });

        return formData
    }

    isFormData (resource) {
        return resource instanceof FormData
    }

    post (uri, data) {
        return this.request('POST', uri, data);
    }

    patch (uri, data) {
        return this.request('PATCH', uri, data);
    }

    destroy (uri, data = {}) {
        return this.request('DELETE', uri, data);
    }

    get (url) {
        return this.request('GET', url, {});
    }

    request (method, url, data) {
        if (this.isFormData(data)) {
            data.append('_method', method);
            method = 'POST';
        }
        return new Promise((resolve, reject) => {
            return Axios.request({
                method,
                url,
                data,
                headers: this.getHeadersForData(data)
            }).then(res => resolve(res.data))
                .catch(err => {
                    reject(err.response.data)
                })
        })
    }

    getHeadersForData (data) {
        const isFormData = this.isFormData(data);

        const authorizationHeaders = AuthService.isAuthenticated()
            ? {'Authorization': `Bearer ${AuthService.getToken()}`}
            : {};

        return {
            'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
            'Accept': 'application/json',
            ...authorizationHeaders
        }
    }
}

export default RequestHelper
