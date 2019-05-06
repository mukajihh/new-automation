import { Component } from '@angular/core';
import { AppDataService, Dependency } from 'src/app/services/app-data.service';

@Component({
  selector: 'selected-dependencies',
  templateUrl: './selected-dependencies.component.html',
  styleUrls: ['./selected-dependencies.component.scss']
})
export class SelectedDependenciesComponent {
  selectedDependencies: Array<Dependency> = [];

  constructor(private appDataService: AppDataService) {  }

  ngOnInit() {
    this.selectedDependencies = this.appDataService.getSelectedDependencies();
  }

  click = (event) => {
    this.appDataService.deletePersonalAppDependencySelection(event);
  }

}
