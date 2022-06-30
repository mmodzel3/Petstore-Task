import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PetsService } from './pets.service';
import petsMock from '../../mocks/pets/pets-mock';
import { HttpParams } from '@angular/common/http';

describe('PetsService', () => {
  let service: PetsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule], });
    service = TestBed.inject(PetsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get available pets from server', () => {
    service.getAvailablePets().subscribe(pets => {
      expect(pets).toEqual(petsMock);
    });

    const req = httpMock.expectOne(`pet/findByStatus?status=available`);
    expect(req.request.method).toBe("GET");

    req.flush(petsMock);
  });
});
