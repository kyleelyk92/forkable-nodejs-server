import { createConnection, ConnectionOptions, Connection } from 'typeorm';
import { connection_options } from '../../connection-options';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as entities from '../entities';
import {Observable} from 'rxjs';
import {filter, first} from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

export class DatabaseService {

    private connection$: Subject<Connection | undefined> = new BehaviorSubject<Connection | undefined>(undefined);

    protected options: ConnectionOptions = <ConnectionOptions>Object.assign({
        connection_options
    });
    constructor(){
        // i'm stealing this from John's implementation
        setTimeout(this.init.bind(this));
    };
    private async init() {
        try {
            const connection = await createConnection(this.options)
        }
        catch (e) {
        }
    }

    public async connection() {
        try {
            const options = this.options;
            console.log(options);
            return await createConnection();
        } catch (e) {
            console.log(e);
        }
    }
}