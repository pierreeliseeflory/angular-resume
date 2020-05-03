import { Component, OnInit } from '@angular/core';
import { IHomeLangSet } from '../translation';
import { LanguageService } from '../language.service';
import { TOOLS } from '../constants';
import { PROGRAMMINGLANGUAGE } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  translations:IHomeLangSet = null;

  showProgress = false;
  myTools = TOOLS;
  myProgrammingLanguages = PROGRAMMINGLANGUAGE;
  
  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.home;
  }
  
  animateBars() {
    var elt = document.getElementById("parallax");
    var bounding = elt.getBoundingClientRect();
    if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        this.showProgress = true;
        return true;
    } else {
        return false;
    }
  }
  

  ngOnInit(): void {
    window.onscroll = () => {
      console.log(this.showProgress)
      if (!this.showProgress) {
        this.showProgress = this.animateBars()
      }
    }
    this.lang.langUpdated.subscribe(
            (lang) => {
              this.translations = this.lang.translation.home;
            }
          );
  }
}