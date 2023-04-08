import {Component, inject, OnInit} from '@angular/core';
import {CastService} from "../../../services/cast/cast.service";
import {map, mapTo, switchAll} from "rxjs";

@Component({
  selector: 'app-cast',
  templateUrl: './cast.component.html',
  styleUrls: ['./cast.component.scss']
})
export class CastComponent{
  castService: CastService = inject(CastService);
  castMembers$ = this.castService
    .getCast(502356)
    .pipe(map((data) => data.cast))
}
