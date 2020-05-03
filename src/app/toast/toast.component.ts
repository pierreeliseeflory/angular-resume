import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  @Input() sender: String;
  @Input() date: String;
  @Input() message: String;
  showToast: boolean;

  constructor() {
    this.showToast = true;
  }

  ngOnInit(): void {
    setTimeout(() => this.showToast = false, 5000);
  }

}
