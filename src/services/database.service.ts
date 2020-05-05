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
        target: {},
        source1: {
            connection_options
        },
        source2: {
            namingStrategy: new SnakeNamingStrategy(),
            entities: [
                ...Object.keys(entities).map(key => (<any>entities)[key])
            ]
        }
    });
    constructor(){
        // i'm stealing this from John's implementation
        setTimeout(this.init.bind(this));
        console.log(this.options);
    };
    private async init() {
        try {
            const connection = await createConnection(this.options)
        }
        catch (e) {
            console.log(e); 
        }
    }

    public async connection() {
        try {
            return this.connection$.asObservable().pipe(filter(connection => connection !== undefined),
            first())
            .toPromise() as Promise<Connection>
        } catch (e) {
            console.log(e);
        }
    }
}