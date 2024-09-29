import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { postCreateTodo } from 'apis/todoApi';
import { BaseFormBoxComponent } from 'app/components/base-form-box/base-form-box.component';
import { InputFormComponent } from 'app/components/input-form/input-form.component';
import { SubmitButtonComponent } from 'app/components/molecules/submit-button/submit-button.component';
import { CreateTodoDto } from 'generated/todos/@types';

@Component({
  selector: 'app-todos-new',
  standalone: true,
  imports: [BaseFormBoxComponent, InputFormComponent, SubmitButtonComponent],
  templateUrl: './todos-new.component.html',
  styleUrl: './todos-new.component.css',
})
export class TodosNewComponent {
  constructor(private router: Router) {}

  todoInput: CreateTodoDto = {
    title: '',
    content: '',
  };

  updateTodoInputs(key: keyof CreateTodoDto, value: string) {
    this.todoInput[key] = value;
  }

  handleCreateTodo() {
    postCreateTodo(this.todoInput).then(() => {
      window.alert('TODOの作成に成功しました!');
      this.router.navigate(['todos/list']);
    });
  }
}
