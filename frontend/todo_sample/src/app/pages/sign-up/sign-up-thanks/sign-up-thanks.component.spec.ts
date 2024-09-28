import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpThanksComponent } from './sign-up-thanks.component';

describe('SignUpThanksComponent', () => {
  let component: SignUpThanksComponent;
  let fixture: ComponentFixture<SignUpThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpThanksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
