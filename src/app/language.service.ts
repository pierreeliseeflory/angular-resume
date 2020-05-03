import { Injectable, EventEmitter } from '@angular/core';
import { AllowedLangs, ILangSet, LANGS } from './translation';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  langUpdated:EventEmitter<AllowedLangs> = new EventEmitter();
  
  language: AllowedLangs = "en";
  private _dictionnaries: ILangSet;
  get translation(): ILangSet{
    return this._dictionnaries;
  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLangs || "en";
    this.changeLanguage(this.language);
  }

  changeLanguage(language: AllowedLangs) {
    this.language = language;
    localStorage.setItem('language', language);
    this._dictionnaries = LANGS[this.language];
    this.langUpdated.emit(this.language);
  }
}
