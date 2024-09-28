import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormBoxComponent } from './base-form-box.component';

describe('BaseFormBoxComponent', () => {
  let component: BaseFormBoxComponent;
  let fixture: ComponentFixture<BaseFormBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseFormBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseFormBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
