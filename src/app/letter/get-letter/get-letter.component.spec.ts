import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLetterComponent } from './get-letter.component';

describe('GetLetterComponent', () => {
  let component: GetLetterComponent;
  let fixture: ComponentFixture<GetLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
