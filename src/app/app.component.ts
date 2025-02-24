import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageService } from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/general/footer/footer.component';
import { HeaderComponent } from './components/general/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TranslateModule,
    HttpClientModule
  ]
})
export class AppComponent implements OnInit{
  title = 'portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Serdar Sevimli | Yazılım Geliştirici" );

    this.metaService.addTags([
      {name: 'keywords', content: ''},
      {name: 'description', content: ''},
    ]);
    
    
    AOS.init(); 

  }
}
