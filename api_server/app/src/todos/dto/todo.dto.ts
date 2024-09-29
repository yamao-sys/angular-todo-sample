import { Todo } from '@prisma/client';

export class TodoDto {
  id: number;

  title: string;

  content: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(partial: Partial<Todo>) {
    Object.assign(this, partial);
  }
}
