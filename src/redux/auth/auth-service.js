import BaseHttpService from "../../shared/service/base-http-service";

class AuthService extends BaseHttpService {
    reister(body) {
        try {
            const data = this.post('users', body);
            this.saveToken(data.token);
            return data;
        } catch (error) {
            throw error
        }
    }

    login(body) {
        try {
            const data = this.post('sessions', body);
            this.saveToken(data.token);
            return data;
        } catch (error) {
            throw error
        }
    }
}

export default AuthService;
