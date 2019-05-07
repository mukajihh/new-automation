import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPersonalApps = true;
  showUniversalApps = true;
  showFunctions = true;
  showDataTransformations = true;

  constructor() {}

  onPersonalAppsClick = () => {
    this.showPersonalApps = !this.showPersonalApps;
  }

  onUniversalAppsClick = () => {
    this.showUniversalApps = !this.showUniversalApps;
  }

  onFunctionsClick = () => {
    this.showFunctions = !this.showFunctions;
  }

  onDataTransformationsClick = () => {
    this.showDataTransformations = !this.showDataTransformations;
  }
}
