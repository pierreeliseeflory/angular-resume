import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IContactLangSet } from '../translation';
import { MAIL } from '../constants';
import { LanguageService } from '../language.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  notSubmitted:boolean;
  mail:string;

  translations:IContactLangSet = null;

  constructor(private lang:LanguageService) {
    this.translations = this.lang.translation.contact;
    this.notSubmitted = true;
    this.mail = MAIL;
  }

  ngOnInit(): void {
    this.lang.langUpdated.subscribe(
      (lang) => {
        this.translations = this.lang.translation.contact;
      }
    );
  }

  sendMail(form: object): void {
    // Sends me an email
    // But I don't have a back-end and I won't put any mail address in clear
  }

  onSubmit(form: NgForm) {
    console.log(form.value); 
    this.notSubmitted = false;
    this.sendMail(form.value);
  }
}
