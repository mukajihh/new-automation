import { Component, OnInit } from '@angular/core';
import { AppDataService, Function } from 'src/app/services/app-data.service';
import { faCode, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {
  codeIcon = faCode;
  checkIcon = faCheck

  functions: Array<Function> = []

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.functions = this.appDataService.getFunctions();
  }

}
