
import * as express from 'express';
import {Application} from "express";
import {getAllTours, getTourById} from "./get-tours.route";
import {searchLocations} from "./search-locations.route";
import {saveTours} from './save-tours.route';

const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

app.route('/api/tours').get(getAllTours);

app.route('/api/tours/:id').get(getTourById);

app.route('/api/locations').get(searchLocations);

app.route('/api/tours/:id').put(saveTours);



const httpServer:any = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});



