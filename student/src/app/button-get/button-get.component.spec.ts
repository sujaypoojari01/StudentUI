import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGetComponent } from './button-get.component';

describe('ButtonGetComponent', () => {
  let component: ButtonGetComponent;
  let fixture: ComponentFixture<ButtonGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
