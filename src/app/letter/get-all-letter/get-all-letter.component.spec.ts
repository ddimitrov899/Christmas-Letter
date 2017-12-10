import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLetterComponent } from './get-all-letter.component';

describe('GetAllLetterComponent', () => {
  let component: GetAllLetterComponent;
  let fixture: ComponentFixture<GetAllLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
