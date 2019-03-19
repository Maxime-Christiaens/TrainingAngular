import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarhammerComponent } from './warhammer.component';

describe('WarhammerComponent', () => {
  let component: WarhammerComponent;
  let fixture: ComponentFixture<WarhammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarhammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarhammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
