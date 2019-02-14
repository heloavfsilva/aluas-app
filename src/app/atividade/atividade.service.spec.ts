import { TestBed } from '@angular/core/testing';

import { AtividadeService } from './atividade.service';

describe('AtividadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtividadeService = TestBed.get(AtividadeService);
    expect(service).toBeTruthy();
  });
});
