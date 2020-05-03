import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
