import { Component, OnInit } from '@angular/core';
import { AppDataService, App } from 'src/app/services/app-data.service';

@Component({
  selector: 'personal-apps',
  templateUrl: './personal-apps.component.html',
  styleUrls: ['./personal-apps.component.scss']
})
export class PersonalAppsComponent implements OnInit {

  apps: Array<App> = []

  constructor(private appDataService: AppDataService) { }

  ngOnInit() {
    this.apps = this.appDataService.getPersonalApps();
  }

  onClick = (dependency) => {
    this.appDataService.togglePersonalAppDependencySelection(dependency.app, dependency.endPoint, dependency.method, dependency.event);
  }

}
