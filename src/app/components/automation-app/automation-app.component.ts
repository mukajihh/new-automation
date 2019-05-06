import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { App } from 'src/app/services/app-data.service';

@Component({
  selector: 'automation-app',
  templateUrl: './automation-app.component.html',
  styleUrls: ['./automation-app.component.scss']
})
export class AutomationAppComponent implements OnInit {
  upIcon = faArrowUp;

  @Input() app: App;

  constructor() { }

  ngOnInit() {
  }

  @Output() clickHandler = new EventEmitter

  onClick = (app, endPoint, method, event) => {
    this.clickHandler.emit({app, endPoint, method, event});
  }
}
