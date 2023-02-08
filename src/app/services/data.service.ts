import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  baseurl = 'http://localhost:4000/api/';

  constructor(public http : HttpClient) { }


  getAllListing() {
    return this.http.get<any>(this.baseurl + "listings");
  }

}
