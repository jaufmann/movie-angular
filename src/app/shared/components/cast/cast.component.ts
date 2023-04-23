import {Component, inject, Input, OnDestroy, OnInit} from '@angular/core';
import {CastService} from "../../../services/cast/cast.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit, OnDestroy{
  @Input() movieId: number | undefined;
  castService: CastService = inject(CastService);
  castMembers: any;

  destroyed$ = new Subject<boolean>();

  ngOnInit() {
    this.castService.getCast(this.movieId)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data) => {
        this.castMembers = data.cast
      })
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  getCastProfileImage(profilePath: any) {
    if (!profilePath) {
      return "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg";
    }

    return `https://www.themoviedb.org/t/p/w138_and_h175_face/${profilePath}`
  }
}
