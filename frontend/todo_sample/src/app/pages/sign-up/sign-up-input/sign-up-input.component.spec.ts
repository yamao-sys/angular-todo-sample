import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpInputComponent } from './sign-up-input.component';

describe('SignUpInputComponent', () => {
  let component: SignUpInputComponent;
  let fixture: ComponentFixture<SignUpInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpInputComponent);
    component = fixture.componentInstance;
    component.signUpInputs = {
      name: 'test_name',
      email: 'test@example.com',
      password: 'Passwor1',
      passwordConfirm: 'Passwor1',
    };
    component.validationErrors = {
      errors: {
        name: ['test_name_error'],
        email: ['test_email_error'],
        password: ['test_password_error'],
        passwordConfirm: ['test_password_confirm_error'],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
