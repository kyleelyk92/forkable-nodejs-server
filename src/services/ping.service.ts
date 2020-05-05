import { Resolve } from 'tsnode-di';
import { DatabaseService } from './database.service';
import { User } from '../entities';

export class PingService {
    @Resolve(DatabaseService)
    private db!: DatabaseService;

    public async connectTest() {
        try {
            console.log('in service method');
            const connection = await this.db.connection();
            if (connection) {
                const users = await connection.getRepository(User).find();
                console.log(users);
                return users;
            }
        } catch (e) {
            console.log(e);
        }
        
    }
}