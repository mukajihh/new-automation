import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectedDependenciesComponent } from './components/selected-dependencies/selected-dependencies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatExpansionModule, MatCheckboxModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PersonalAppsComponent } from './components/personal-apps/personal-apps.component';
import { UniversalAppsComponent } from './components/universal-apps/universal-apps.component';
import { AutomationAppComponent } from './components/automation-app/automation-app.component';
import { FunctionsComponent } from './components/functions/functions.component';
import { DataTransformationComponent } from './components/data-transformation/data-transformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectedDependenciesComponent,
    FooterComponent,
    PersonalAppsComponent,
    UniversalAppsComponent,
    AutomationAppComponent,
    FunctionsComponent,
    DataTransformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
