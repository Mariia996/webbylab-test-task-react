import BaseHttpService from "../../shared/service/base-http-service";

class MoviesService extends BaseHttpService {
    async import(formData) {
        try {
            this.loadToken()
            const { data } = await this.post('movies/import', formData, {
                headers: {
                    'Content-type': 'multipart/form-data',
                    "accept": "text/plain"
                }
            })
            return data
        } catch (error) {
            throw error
        }
    }
    async get(params) {
        try {
            this.loadToken()
            const { data } = await this.post('movies')
            return data
        } catch (error) {
            throw error
        }
    }

}

export default MoviesService;