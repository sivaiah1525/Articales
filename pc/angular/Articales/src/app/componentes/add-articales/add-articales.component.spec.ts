import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticalesComponent } from './add-articales.component';

describe('AddArticalesComponent', () => {
  let component: AddArticalesComponent;
  let fixture: ComponentFixture<AddArticalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
