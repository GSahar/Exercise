import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelDocumentComponent } from './tabel-document.component';

describe('TabelDocumentComponent', () => {
  let component: TabelDocumentComponent;
  let fixture: ComponentFixture<TabelDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
