import { TestBed, inject } from '@angular/core/testing';

import { JogoserviceService } from './jogoservice.service';

describe('JogoserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoserviceService]
    });
  });

  it('should be created', inject([JogoserviceService], (service: JogoserviceService) => {
    expect(service).toBeTruthy();
  }));
});
