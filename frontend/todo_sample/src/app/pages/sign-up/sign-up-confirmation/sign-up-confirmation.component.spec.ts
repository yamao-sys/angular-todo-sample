import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmationComponent } from './sign-up-confirmation.component';

describe('SignUpConfirmationComponent', () => {
  let component: SignUpConfirmationComponent;
  let fixture: ComponentFixture<SignUpConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpConfirmationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpConfirmationComponent);
    component = fixture.componentInstance;
    component.signUpInputs = {
      name: 'test_name',
      email: 'test@example.com',
      password: 'Passwor1',
      passwordConfirm: 'Passwor1',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
