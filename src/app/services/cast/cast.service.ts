import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CastService {
  private httpClient = inject(HttpClient)

  getCast(movieId: number): Observable<any> {
    return this.httpClient
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e3f92efd2684291c83192e31a75b0571&language=en-US`);
  }
}
