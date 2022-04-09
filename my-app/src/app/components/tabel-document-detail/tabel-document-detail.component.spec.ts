import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelDocumentDetailComponent } from './tabel-document-detail.component';

describe('TabelDocumentDetailComponent', () => {
  let component: TabelDocumentDetailComponent;
  let fixture: ComponentFixture<TabelDocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelDocumentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
