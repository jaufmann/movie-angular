import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LanguageSwitchService} from "../language-switch/language-switch.service";

@Injectable({
  providedIn: 'root'
})
export class SingleMovieService {

  constructor(private http: HttpClient, private languageSwitchService: LanguageSwitchService) { }

  getSingleMovie(id: number, language: string): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/502356?api_key=e3f92efd2684291c83192e31a75b0571&language=${language}`);
  }
}
