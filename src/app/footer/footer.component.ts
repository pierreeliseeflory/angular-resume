import { Component, OnInit } from '@angular/core';
import { IFooterLangSet } from '../translation';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  translations:IFooterLangSet = null;

  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.footer;
  }

  ngOnInit(): void {
    this.lang.langUpdated.subscribe(
      (lang) => {
        this.translations = this.lang.translation.footer;
      }
    );
  }
}
