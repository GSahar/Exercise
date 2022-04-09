import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddDocumentComponent } from './form-add-document.component';

describe('FormAddDocumentComponent', () => {
  let component: FormAddDocumentComponent;
  let fixture: ComponentFixture<FormAddDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
