import { Component, OnInit } from '@angular/core';
import { IWorkLangSet } from '../translation';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  translations:IWorkLangSet = null;

  showToast: boolean;

  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.work;
    this.showToast = true;
  }

  ngOnInit(): void {
    setTimeout(() => this.showToast = false, 5000);
    this.lang.langUpdated.subscribe(
      (lang) => {
        this.translations = this.lang.translation.work;
      }
    );
  }
}
