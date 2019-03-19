import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoCompoComponent } from './compo-compo.component';

describe('CompoCompoComponent', () => {
  let component: CompoCompoComponent;
  let fixture: ComponentFixture<CompoCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
