import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SingleMovieService {

  constructor(private http: HttpClient) { }

  getSingleMovie(id: number): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/502356?api_key=e3f92efd2684291c83192e31a75b0571`);
  }
}
