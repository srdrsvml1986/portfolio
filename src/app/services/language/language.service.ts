import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: "tr" | "en";

  constructor(
    public translateService: TranslateService,
    private location: Location,
    private router: Router
  ) {}

  initLanguage(){
    this.translateService.addLangs(["en", "tr"])
    let language = navigator.language || (navigator as any).userLanguage;
    language = language.split("-").includes("tr") ? "tr" : "en"
    this.translateService.setDefaultLang(language)

    // Router ile yönlendirme yap
    this.router.navigate([language]);

    this.language=language
  }

  changeLanguage(language){
    this.translateService.setDefaultLang(language)
    // Router ile yönlendirme yap
    this.router.navigate([language]);
    this.language=language
  }
}
