import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllLettersComponent } from './list-all-letters.component';

describe('ListAllLettersComponent', () => {
  let component: ListAllLettersComponent;
  let fixture: ComponentFixture<ListAllLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
