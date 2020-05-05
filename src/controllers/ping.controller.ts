import {HttpController} from '@yellow-snow/http';
import { PingService } from '../services/ping.service';
import {Resolve} from 'tsnode-di';

export class PingController extends HttpController {
    @Resolve(PingService)
    private ping_service!: PingService;


    public async connectTest() {
        try {
            const users = await this.ping_service.connectTest();
            this.res.status(200).send(users);
        }
        catch (e) {
            throw e;
        }
    }
}