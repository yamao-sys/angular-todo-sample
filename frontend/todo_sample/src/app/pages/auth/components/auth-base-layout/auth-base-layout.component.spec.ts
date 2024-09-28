import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBaseLayoutComponent } from './auth-base-layout.component';

describe('AuthBaseLayoutComponent', () => {
  let component: AuthBaseLayoutComponent;
  let fixture: ComponentFixture<AuthBaseLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthBaseLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthBaseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
