import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestouilleComponent } from './testouille.component';

describe('TestouilleComponent', () => {
  let component: TestouilleComponent;
  let fixture: ComponentFixture<TestouilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestouilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestouilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
