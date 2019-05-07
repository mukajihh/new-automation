import { Component, OnInit } from '@angular/core';
import { AppDataService, Function } from 'src/app/services/app-data.service';
import { faExchangeAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'data-transformation',
  templateUrl: './data-transformation.component.html',
  styleUrls: ['./data-transformation.component.scss']
})
export class DataTransformationComponent implements OnInit {
  exchangeIcon = faExchangeAlt;
  checkIcon = faCheck;

  dataTransformations: Array<Function> = [];

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.dataTransformations = this.appDataService.getDataTransformations();
  }

  onClick = (event) => {
    this.appDataService.toggleDataTransformationDependencySelection(event);
  }
}
