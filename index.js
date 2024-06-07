import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import ejs from 'ejs';
import dotenv from 'dotenv';

import helloworldRoutes from './src/routes/helloworld.routes.js';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', helloworldRoutes);

app.listen(process.env.APP_PORT, () => console.log(`Server is running on port ${process.env.APP_PORT}`));