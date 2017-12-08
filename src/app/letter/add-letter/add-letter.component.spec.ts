import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLetterComponent } from './add-letter.component';

describe('AddLetterComponent', () => {
  let component: AddLetterComponent;
  let fixture: ComponentFixture<AddLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
