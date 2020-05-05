import express from 'express';
import { HttpRouter } from '@yellow-snow/http';
import cors from 'cors';
import {routes} from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.set('trust proxy', true);

const port = 3000;

const router = new HttpRouter(routes);
router.init(app);

app.listen(port, () => console.log(`Server running and listening on port: ${port}`))