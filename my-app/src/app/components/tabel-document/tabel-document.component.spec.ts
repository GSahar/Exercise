import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelDocumentComponent } from './tabel-document.component';
import { TabelDocumentService } from '../../services/tabel-document.service';

describe('TabelDocumentComponent', () => {
  let component: TabelDocumentComponent;
  let fixture: ComponentFixture<TabelDocumentComponent>;
  let service: TabelDocumentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelDocumentComponent ]
    })
    .compileComponents();
    service = TestBed.inject(TabelDocumentService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
