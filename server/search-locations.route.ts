


import {Request, Response} from 'express';
import {LOCATIONS} from "./db-data";
import {setTimeout} from "timers";



export function searchLocations(req: Request, res: Response) {

    const queryParams = req.query;

    const locationId = queryParams.locationId,
          filter = queryParams.filter || '',
          sortOrder = queryParams.sortOrder || 'asc',
          pageNumber = parseInt(queryParams.pageNumber) || 0,
          pageSize = parseInt(queryParams.pageSize) || 10;

    let locations = Object.values(LOCATIONS).filter(location => location.locationId == locationId).sort((l1, l2) => l1.id - l2.id);

    if (filter) {
      locations = locations.filter(location => location.location.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
    }

    if (sortOrder == "desc") {
      locations = locations.reverse();
    }

    const initialPos = pageNumber * pageSize;

    const locationsPage = locations.slice(initialPos, initialPos + pageSize);

    setTimeout(() => {
        res.status(200).json({payload: locationsPage});
    },1000);


}
