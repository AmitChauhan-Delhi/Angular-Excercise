

import {Request, Response} from 'express';
import {TOURS} from "./db-data";



export function getAllTours(req: Request, res: Response) {



        setTimeout(() => {

             res.status(200).json({payload:Object.values(TOURS)});

        }, 200);

}


export function getTourById(req: Request, res: Response) {

    const tourId = req.params["id"];

    const tours:any = Object.values(TOURS);

    const tour = tours.find(tour => tour.id == tourId);

    res.status(200).json(tour);
}
