import { TestBed, inject } from '@angular/core/testing';

import { SendLetterService } from './send-letter.service';

describe('SendLetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendLetterService]
    });
  });

  it('should be created', inject([SendLetterService], (service: SendLetterService) => {
    expect(service).toBeTruthy();
  }));
});
