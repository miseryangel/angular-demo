import { TestBed } from '@angular/core/testing';

import { ZenQuoteService } from './zen-quote.service';

describe('ZenQuoteService', () => {
  let service: ZenQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZenQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
