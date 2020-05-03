import { Component, OnInit } from '@angular/core';
import { IPortfolioLangSet } from '../translation';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  translations:IPortfolioLangSet = null;

  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.portfolio;
  }

  ngOnInit(): void {
    this.lang.langUpdated.subscribe(
      (lang) => {
        this.translations = this.lang.translation.portfolio;
      }
    );
  }
}
