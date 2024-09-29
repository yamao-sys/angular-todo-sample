import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteTodo, fetchTodos } from 'apis/todoApi';
import { BaseButtonComponent } from 'app/components/base-button/base-button.component';
import { TodoDto } from 'generated/todos/@types';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule, BaseButtonComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent implements OnInit {
  constructor(private router: Router) {}

  todos: TodoDto[] = [];

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    fetchTodos()
      .then((result) => (this.todos = result))
      .catch((e) => console.log(e.messages));
  }

  handleRouteToEditPage(id: number) {
    this.router.navigate(['todos/edit', id]);
  }

  handleDeleteReadingRecord(id: number) {
    if (!window.confirm('本当に削除しますか？')) return;

    deleteTodo(String(id))
      .then((result) => {
        if (result) {
          window.alert('TODOの削除に成功しました');
          this.refreshTodos();
        } else {
          window.alert('TODOの削除に失敗しました');
        }
      })
      .catch((e) => console.log(e.messages));
  }
}
