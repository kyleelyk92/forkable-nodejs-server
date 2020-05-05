import {HttpController} from '@yellow-snow/http';

export class PingController extends HttpController {
    
    public ping() {
        try {
            this.res.send('Hello from the ping controller');
        }
        catch (e) {
            throw e;
        }
    }
}