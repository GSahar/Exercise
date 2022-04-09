import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDocumentDetailComponent } from './form-add-document-detail.component';

describe('FormAddDocumentDetailComponent', () => {
  let component: FormAddDocumentDetailComponent;
  let fixture: ComponentFixture<FormAddDocumentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddDocumentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddDocumentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
