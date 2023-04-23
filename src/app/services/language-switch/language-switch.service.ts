import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitchService {
  BehaviorSubject = new BehaviorSubject('en');

  constructor() { }

  switchLanguage(language: string) {
    this.BehaviorSubject.next(language);
  }

  observeLanguage() {
    return this.BehaviorSubject.asObservable();
  }
}
