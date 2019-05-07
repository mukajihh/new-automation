import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalAppsComponent } from './universal-apps.component';

describe('UniversalAppsComponent', () => {
  let component: UniversalAppsComponent;
  let fixture: ComponentFixture<UniversalAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
