import {Component, inject} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {LanguageSwitchService} from "../../services/language-switch/language-switch.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentLanguage: string = "en";
  translate: TranslateService  = inject(TranslateService);
  languageSwitchService: LanguageSwitchService  = inject(LanguageSwitchService);

  constructor() {
    this.translate.addLangs(['en', 'klingon']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

  useLanguage() {
    if(this.currentLanguage === "en") {
      this.currentLanguage = "de";
    } else {
      this.currentLanguage = "en";
    }

    this.languageSwitchService.switchLanguage(this.currentLanguage);
    this.translate.use(this.currentLanguage);
  }
}
