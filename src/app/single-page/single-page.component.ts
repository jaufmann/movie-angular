import {Component, OnDestroy, OnInit} from '@angular/core';
import {SingleMovieService} from "../services/movie-details/single-movie.service";
import {ImagesService} from "../services/images/images.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss']
})
export class SinglePageComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  movie: any;
  images: any;
  backdrop: any = "background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1sc39exU1GS3niZps9yJ3xTkBMf.jpg)";

  constructor(private singlePageService: SingleMovieService, private imageService: ImagesService) { }

  ngOnInit(): void {
    this.initMovie();
    this.initImages();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }

  initImages() {
    this.imageService.getImages('1')
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: any) => {
          this.images = data;
          const randomImageId = Math.floor(Math.random() * (this.images.backdrops.length - 0 + 1) + 0)
          this.backdrop = `background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${this.images.backdrops[randomImageId].file_path})`;
      });
  }

  initMovie(){
    this.singlePageService.getSingleMovie(502356)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
          this.movie = data;
    });
  }
}
