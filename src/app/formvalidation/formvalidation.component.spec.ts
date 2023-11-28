import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormvalidationComponent } from './formvalidation.component';

describe('FormvalidationComponent', () => {
  let component: FormvalidationComponent;
  let fixture: ComponentFixture<FormvalidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormvalidationComponent]
    });
    fixture = TestBed.createComponent(FormvalidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
