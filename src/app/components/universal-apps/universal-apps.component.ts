import { Component, OnInit } from '@angular/core';
import { AppDataService, App } from 'src/app/services/app-data.service';

@Component({
  selector: 'universal-apps',
  templateUrl: './universal-apps.component.html',
  styleUrls: ['./universal-apps.component.scss']
})
export class UniversalAppsComponent implements OnInit {

  apps: Array<App> = []

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.apps = this.appDataService.getUniversalApps();
  }

  onClick = (dependency) => {
    this.appDataService.toggleUniversalAppDependencySelection(dependency.app, dependency.endPoint, dependency.method, dependency.event);
  }

}
