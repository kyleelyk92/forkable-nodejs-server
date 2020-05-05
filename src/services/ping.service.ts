import { Resolve } from 'tsnode-di';
import { DatabaseService } from './database.service';
import { User } from '../entities';

export class PingService {
    @Resolve(DatabaseService)
    private db!: DatabaseService;

    public async connectTest() {
        console.log('in service method');
        const connection = await this.db.connection();
        if (connection) {
            console.log(connection);
            return await connection.getRepository(User).find();
        }
    }
}