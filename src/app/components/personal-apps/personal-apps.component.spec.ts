import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAppsComponent } from './personal-apps.component';

describe('PersonalAppsComponent', () => {
  let component: PersonalAppsComponent;
  let fixture: ComponentFixture<PersonalAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
