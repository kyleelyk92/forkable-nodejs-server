import { HttpRoute } from "@yellow-snow/http";
import { PingController } from './controllers';


export const routes: HttpRoute<any>[] = [
    new HttpRoute('/', 'get', PingController, 'ping'),
]