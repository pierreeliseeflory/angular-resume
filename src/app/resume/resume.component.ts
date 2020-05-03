import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { IResumeLangSet, AllowedLangs } from '../translation';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  translations:IResumeLangSet = null;

  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.resume;
  }

  ngOnInit(): void {
    this.lang.langUpdated.subscribe(
      (lang) => {
        this.translations = this.lang.translation.resume;
      }
    );
  }
}
