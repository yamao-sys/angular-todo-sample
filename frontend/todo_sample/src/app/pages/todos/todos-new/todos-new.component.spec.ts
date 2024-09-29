import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosNewComponent } from './todos-new.component';

describe('TodosNewComponent', () => {
  let component: TodosNewComponent;
  let fixture: ComponentFixture<TodosNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
