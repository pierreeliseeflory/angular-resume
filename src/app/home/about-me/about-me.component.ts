import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input() about: string;
  @Input() image: string;
  @Input() title: string;
  @Input() description: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
