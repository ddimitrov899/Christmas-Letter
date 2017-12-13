import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListingLettersComponent } from './card-listing-letters.component';

describe('CardListingLettersComponent', () => {
  let component: CardListingLettersComponent;
  let fixture: ComponentFixture<CardListingLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardListingLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListingLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
