import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fetchTodo, patchUpdateTodo } from 'apis/todoApi';
import { BaseFormBoxComponent } from 'app/components/base-form-box/base-form-box.component';
import { InputFormComponent } from 'app/components/input-form/input-form.component';
import { SubmitButtonComponent } from 'app/components/molecules/submit-button/submit-button.component';
import { UpdateTodoDto } from 'generated/todos/@types';

@Component({
  selector: 'app-todos-edit',
  standalone: true,
  imports: [BaseFormBoxComponent, InputFormComponent, SubmitButtonComponent],
  templateUrl: './todos-edit.component.html',
  styleUrl: './todos-edit.component.css',
})
export class TodosEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  todoInput: UpdateTodoDto;
  todoId: string;

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.todoId = routeParams.get('id') ?? '';

    fetchTodo(this.todoId)
      .then((result) => (this.todoInput = result))
      .catch((e) => console.log(e.messages));
  }

  updateTodoInputs(key: keyof UpdateTodoDto, value: string) {
    this.todoInput[key] = value;
  }

  handleUpdateTodo() {
    patchUpdateTodo(this.todoId, this.todoInput).then(() => {
      window.alert('TODOの更新に成功しました!');
      this.router.navigate(['todos/list']);
    });
  }
}
