import aspida, { FetchConfig } from '@aspida/fetch';
import api from 'generated/todos/$api';
import { CreateTodoDto, UpdateTodoDto } from 'generated/todos/@types';

const getTodoApiClient = (options?: FetchConfig) => {
  const baseFetchConditions = {
    baseURL: import.meta.env['NG_APP_BASE_API_URL'],
    throwHttpErrors: true,
  };

  return api(aspida(fetch, { ...baseFetchConditions, ...(options || {}) }));
};

export const fetchTodos = async () => {
  return await getTodoApiClient().todos.$get();
};

export const fetchTodo = async (id: string) => {
  return await getTodoApiClient().todos._id(id).$get();
};

export const postCreateTodo = async (data: CreateTodoDto) => {
  return await getTodoApiClient().todos.post({
    body: {
      title: data.title,
      content: data.content,
    },
  });
};

export const patchUpdateTodo = async (id: string, inputTodo: UpdateTodoDto) => {
  return await getTodoApiClient().todos._id(id).$patch({
    body: inputTodo,
  });
};

export const deleteTodo = async (id: string) => {
  return await getTodoApiClient().todos._id(id).$delete();
};
