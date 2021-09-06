import BaseHttpService from "../../shared/service/base-http-service";

class AuthService extends BaseHttpService {
    async reister(body) {
        try {
            const data = await this.post('users', body);
            this.saveToken(data.token);
            return data;
        } catch (error) {
            throw error
        }
    }

    async login(body) {
        try {
            const data = await this.post('sessions', body);
            this.saveToken(data.token);
            return data;
        } catch (error) {
            throw error
        }
    }
}

export default AuthService;
