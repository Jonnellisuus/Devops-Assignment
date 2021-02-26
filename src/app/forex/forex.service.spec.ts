import { TestBed } from '@angular/core/testing';

import {ForexService} from './forex.service';
import {HttpClient} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {ForexRates} from './forex-rates';

describe('ForexRatesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let forexService: ForexService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ForexService]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    forexService = TestBed.inject(ForexService);
  });
  afterEach(() => {
    httpTestingController.verify();
  });

  describe('get forex rates', () => {
    let expectedRate: ForexRates;

    beforeEach(() => {
      expectedRate = {base: 'EUR', date: '2021-02-26', rates: []};
    });

    it('should return one forex rate for EUR', () => {
      forexService.getRatesData().subscribe(
        rates => expect(rates).toEqual(expectedRate,
          'should return expected values'), fail
      );
      const req = httpTestingController.expectOne(forexService.url);
      expect(req.request.method).toEqual('GET');

      req.flush(expectedRate);
    });
  });
});
