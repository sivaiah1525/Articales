import { TestBed } from '@angular/core/testing';

import { ArticalesService } from './articales.service';

describe('ArticalesService', () => {
  let service: ArticalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
