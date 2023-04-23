import {Component, inject, Input, OnInit} from '@angular/core';
import {CastService} from "../../../services/cast/cast.service";
import {map, mapTo, switchAll} from "rxjs";

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent implements OnInit{
  @Input("movieId") movieId: number | undefined;
  castService: CastService = inject(CastService);
  castMembers: any;

  ngOnInit() {
    this.castService.getCast(this.movieId)
      .subscribe((data) => this.castMembers = data.cast)
  }
}
