import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  @Input() icon: string;
  @Input() link: string;
  @Input() caption: string;
  @Input() targetValue: number;
  @Input() start: boolean;
  currentValue: number;

  constructor() {
    this.currentValue = 0;
  }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes.start.currentValue === true) {
      let interval = setInterval(() => {
        this.currentValue++;
        if (this.currentValue >= this.targetValue) {
          clearInterval(interval);
        }
      }, 40)
    }
  }

}
