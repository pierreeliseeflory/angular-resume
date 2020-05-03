import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { IHeaderLangSet, AllowedLangs } from '../translation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  translations:IHeaderLangSet = null;
  language:AllowedLangs = "en";

  constructor(private lang:LanguageService) { }

  ngOnInit(): void {
    this.translations = this.lang.translation.header;    
  }

  changeLanguage(language: AllowedLangs) {
    this.language = language;
    this.lang.changeLanguage(language);
    this.translations = this.lang.translation.header;
  }
}
