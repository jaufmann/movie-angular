import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getImages(id: string): any{
    return this.http.get("https://api.themoviedb.org/3/movie/502356/images?api_key=e3f92efd2684291c83192e31a75b0571")
  }
}
