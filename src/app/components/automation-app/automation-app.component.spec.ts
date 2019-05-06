import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomationAppComponent } from './automation-app.component';

describe('AutomationAppComponent', () => {
  let component: AutomationAppComponent;
  let fixture: ComponentFixture<AutomationAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomationAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomationAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
