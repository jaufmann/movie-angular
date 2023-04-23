import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {SingleMovieService} from "../../services/movie-details/single-movie.service";
import {ImagesService} from "../../services/images/images.service";
import {Subject, switchMap, takeUntil} from "rxjs";
import {IMovie} from "../../shared/interfaces/IMovie";
import {LanguageSwitchService} from "../../services/language-switch/language-switch.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();
  movie: IMovie | undefined;
  images: any;
  backdrop: any = "background-image: url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1sc39exU1GS3niZps9yJ3xTkBMf.jpg)";

  //injections
  singlePageService: SingleMovieService = inject(SingleMovieService);
  imageService: ImagesService = inject(ImagesService);
  languageSwitchService: LanguageSwitchService = inject(LanguageSwitchService);


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

    this.languageSwitchService.observeLanguage()
      .pipe(switchMap(language =>
          this.singlePageService.getSingleMovie(502356, language)
      ))
      .subscribe((data) => {
        this.movie = data;
      });
  }
}
