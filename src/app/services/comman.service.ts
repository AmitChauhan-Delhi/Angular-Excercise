import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  constructor(private http: HttpClient) { }

  updateTourData(id:any): Observable<any> {    
    return this.http.put<any>("http://localhost:9000/api/tours/"+id, this.httpOptions);
  }


  getLocationList(id:any): Observable<any> {    
    return this.http.get<any>( "http://localhost:9000/api/locations/?locationId="+id, this.httpOptions);
  }

  
  getAllTourList(): Observable<any> {    
    return this.http.get<any>("http://localhost:9000/api/tours", this.httpOptions);
  }

 
  getTourDetails(id:any): Observable<any> {    
    return this.http.get<any>("http://localhost:9000/api/tours/"+id, this.httpOptions);
  }

  httpOptions = {
    headers: new HttpHeaders({
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin" : "*"
      //  "Authorization": `Token 275f558c76ddb9335430edb0de8a8b4e19275516`,
       })
  };
}
