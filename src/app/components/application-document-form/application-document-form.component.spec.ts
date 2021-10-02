import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationDocumentFormComponent } from './application-document-form.component';

describe('ApplicationDocumentFormComponent', () => {
  let component: ApplicationDocumentFormComponent;
  let fixture: ComponentFixture<ApplicationDocumentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationDocumentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationDocumentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
