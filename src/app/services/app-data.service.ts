import { Injectable } from '@angular/core';
import { SelectedDependenciesComponent } from '../components/selected-dependencies/selected-dependencies.component';
import { IconDefinition, faPuzzlePiece, faExchangeAlt, faCode } from '@fortawesome/free-solid-svg-icons';

export class Method {
  method = '';
  path = '';
  selected = false;

  constructor(method: string, path: string) {
    this.method = method;
    this.path = path;
  }
}

export class EndPoint {
  name = '';
  methods: Array<Method> = [];

  setName = (name: string) => {
    this.name = name;
    return this;
  }
  
  setMethod = (method: Method) => {
    this.methods.push(method);
    return this;
  }
}

export class App {
  name = '';
  selected = false;
  logoUrl = '';
  endPoints: Array<EndPoint> = [];

  setName = (name: string) => {
    this.name = name;
    return this;
  }

  setLogoUrl = (logoUrl: string) => {
    this.logoUrl = logoUrl;
    return this;
  }

  setSelected = (selected: boolean) => {
    this.selected = selected;
    return this;
  }

  setEndPoint = (endPoint: EndPoint) => {
    this.endPoints.push(endPoint);
    return this;
  }
}

export class Function {
  name = '';
  selected = false;

  constructor(name: string) {
    this.name = name;
  }
}

export class DataTransformation {
  name = '';
  selected = false;

  constructor(name: string) {
    this.name = name;
  }
}

export enum DependencyType {
  PERSONAL_APP = 'PERSONAL_APP',
  UNIVERSAL_APP = 'UNIVERSAL_APP',
  FUNCTION = 'FUNCTION',
  DATATRANSFORMATION = 'DATATRANSFORMATION'
}

export class Dependency {
  type: DependencyType;
  icon: IconDefinition;
  name = '';
  method = '';
  endpoint = '';

  constructor(type: DependencyType, icon: IconDefinition, name, method, endpoint) {
    this.type = type;
    this.icon = icon;
    this.name = name;
    this.method = method;
    this.endpoint = endpoint;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  private personalApps: Array<App> = [];
  private universalApps: Array<App> = [];
  private functions: Array<Function> = [];
  private dataTransformations: Array<DataTransformation> = [];

  private selectedDependencies: Array<Dependency> = []

  constructor() {
    let meuAppUsers = new EndPoint();
    meuAppUsers.setName('Users');
    meuAppUsers.setMethod(new Method('GET', 'users/'));

    this.personalApps.push(new App().setName('MeuApp').setLogoUrl('../../../assets/images/meu-app-logo.png').setEndPoint(meuAppUsers));

    let pipeDriveOrganizations = new EndPoint();
    pipeDriveOrganizations.setName('Organizations');
    pipeDriveOrganizations.setMethod(new Method('DELETE', 'organizations/[id]'));
    pipeDriveOrganizations.setMethod(new Method('POST', 'organizations/'));
    pipeDriveOrganizations.setMethod(new Method('GET', 'organizations/'));

    let pipeDriveUsers = new EndPoint();
    pipeDriveUsers.setName('Users');
    pipeDriveUsers.setMethod(new Method('DELETE', 'users/[id]'));
    pipeDriveUsers.setMethod(new Method('POST', 'users/'));
    pipeDriveUsers.setMethod(new Method('GET', 'users/'));

    this.personalApps.push(new App().setName('PipeDrive').setLogoUrl('../../../assets/images/pipedrive-logo.png').setEndPoint(pipeDriveOrganizations).setEndPoint(pipeDriveUsers));

    this.functions.push(new Function('example-filter.js'));
    this.dataTransformations.push(new DataTransformation('example-linkapi-payload.js'));
  }

  togglePersonalAppDependencySelection = (personalApp: App, endPoint: EndPoint, method: Method, event) => {
    let app = this.personalApps.find(app => app === personalApp);
    if (app) {
      let route = app.endPoints.find(route => route === endPoint);
      if (route) {
        let term = route.methods.find(term => term === method);
        if (term) {
          if (event.checked) {
            term.selected = true;
            this.selectedDependencies.push(new Dependency(DependencyType.PERSONAL_APP, faPuzzlePiece, app.name, method.method, route.name));
          } else {
            term.selected = false;
            let dependency = this.selectedDependencies.find(dependency => {
              if (dependency.type === DependencyType.PERSONAL_APP && dependency.name === app.name && dependency.method === method.method && dependency.endpoint === route.name) {
                return true;
              } else {
                return false;
              }
            });
            if (dependency) {
              this.selectedDependencies.splice(this.selectedDependencies.indexOf(dependency), 1);
            }
          }

          if (this.selectedDependencies.find(dependency => dependency.name === personalApp.name)) {
            app.selected = true;
          } else {
            app.selected = false;
          }
        }
      }
    }
  }

  toggleUniversalAppDependencySelection = (universalApp: App, endPoint: EndPoint, method: Method, event) => {
    let app = this.universalApps.find(app => app === universalApp);
    if (app) {
      let route = app.endPoints.find(route => route === endPoint);
      if (route) {
        let term = route.methods.find(term => term === method);
        if (term) {
          if (event.checked) {
            term.selected = true;
            this.selectedDependencies.push(new Dependency(DependencyType.UNIVERSAL_APP, faPuzzlePiece, app.name, method.method, route.name));
          } else {
            term.selected = false;
            let dependency = this.selectedDependencies.find(dependency => {
              if (dependency.type === DependencyType.UNIVERSAL_APP && dependency.name === app.name && dependency.method === method.method && dependency.endpoint === route.name) {
                return true;
              } else {
                return false;
              }
            });
            if (dependency) {
              this.selectedDependencies.splice(this.selectedDependencies.indexOf(dependency), 1);
            }
          }

          if (this.selectedDependencies.find(dependency => dependency.name === universalApp.name)) {
            app.selected = true;
          } else {
            app.selected = false;
          }
        }
      }
    }
  }

  toggleFunctionDependencySelection = (func: Function) => {
    let f = this.functions.find(f => f === func);
    if (f) {
      if (f.selected) {
        f.selected = false;
        let dependency = this.selectedDependencies.find(dependency => {
          if (dependency.type === DependencyType.FUNCTION && dependency.name === f.name) {
            return true;
          } else {
            return false;
          }
        });

        if (dependency) {
          this.selectedDependencies.splice(this.selectedDependencies.indexOf(dependency), 1);
        }
      } else {
        f.selected = true;
        this.selectedDependencies.push(new Dependency(DependencyType.FUNCTION, faCode, f.name, '', ''));
      }
    }
  }

  toggleDataTransformationDependencySelection = (dataTransformation: DataTransformation) => {
    let dtransf = this.dataTransformations.find(dtransf => dtransf === dataTransformation);
    if (dtransf) {
      if (dtransf.selected) {
        dtransf.selected = false;
        let dependency = this.selectedDependencies.find(dependency => {
          if (dependency.type === DependencyType.DATATRANSFORMATION && dependency.name === dtransf.name) {
            return true;
          } else {
            return false;
          }
        });

        if (dependency) {
          this.selectedDependencies.splice(this.selectedDependencies.indexOf(dependency), 1);
        }
      } else {
        dtransf.selected = true;
        this.selectedDependencies.push(new Dependency(DependencyType.DATATRANSFORMATION, faExchangeAlt, dtransf.name, '', ''));
      }
    }
  }

  deleteAppDependencySelection = (dependency: Dependency) => {
    let app: App;
    if (dependency.type === DependencyType.PERSONAL_APP) {
      app = this.personalApps.find(app => app.name === dependency.name);
    } else {
      app = this.universalApps.find(app => app.name === dependency.name);
    }
    if (app) {
      let route = app.endPoints.find(route => route.name === dependency.endpoint);
      if (route) {
        let term = route.methods.find(term => term.method === dependency.method);
        if (term) {
          if (dependency.type === DependencyType.PERSONAL_APP) {
            this.togglePersonalAppDependencySelection(app, route, term, {checked: false});
          } else {
            this.toggleUniversalAppDependencySelection(app, route, term, {checked: false});
          }
        }
      }
    }
  }

  deleteFunctionDependencySelection = (dependency: Dependency) => {
    let func = this.functions.find(func => func.name === dependency.name);
    if (func) {
      this.toggleFunctionDependencySelection(func);
    }
  }

  deleteDataTransformationDependencySelection = (dependency: Dependency) => {
    let dtrans = this.dataTransformations.find(dtrans => dtrans.name === dependency.name);
    if (dtrans) {
      this.toggleDataTransformationDependencySelection(dtrans);
    }
  }

  getPersonalApps = (): Array<App> =>  {
    return this.personalApps
  }
  
  getUniversalApps = (): Array<App> =>  {
    return this.universalApps
  }

  getFunctions = (): Array<Function> =>  {
    return this.functions
  }

  getDataTransformations = (): Array<DataTransformation> =>  {
    return this.dataTransformations
  }

  getSelectedDependencies = (): Array<Dependency> =>  {
    return this.selectedDependencies
  }
}
