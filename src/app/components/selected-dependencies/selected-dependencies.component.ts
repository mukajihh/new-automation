import { Component } from '@angular/core';
import { AppDataService, Dependency, DependencyType } from 'src/app/services/app-data.service';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'selected-dependencies',
  templateUrl: './selected-dependencies.component.html',
  styleUrls: ['./selected-dependencies.component.scss']
})
export class SelectedDependenciesComponent {
  trashIcon= faTrashAlt;
  
  selectedDependencies: Array<Dependency> = [];

  constructor(private appDataService: AppDataService) {  }

  ngOnInit() {
    this.selectedDependencies = this.appDataService.getSelectedDependencies();
  }

  click = (event) => {
    if (event.type === DependencyType.PERSONAL_APP || event.type === DependencyType.UNIVERSAL_APP) {
      this.appDataService.deleteAppDependencySelection(event);
    } else if (event.type === DependencyType.FUNCTION) {
      this.appDataService.deleteFunctionDependencySelection(event);
    } else {
      this.appDataService.deleteDataTransformationDependencySelection(event);
    }
  }

}
