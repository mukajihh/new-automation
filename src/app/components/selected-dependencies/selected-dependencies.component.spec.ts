import { TestBed, async } from '@angular/core/testing';
import { SelectedDependenciesComponent } from './selected-dependencies.component';

describe('SelectedDependenciesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SelectedDependenciesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(SelectedDependenciesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'new-automation'`, () => {
    const fixture = TestBed.createComponent(SelectedDependenciesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('new-automation');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(SelectedDependenciesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to new-automation!');
  });
});
