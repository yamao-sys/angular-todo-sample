/* eslint-disable */
/** TODOのDTO */
export type TodoDto = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
};

/** TODO作成のrequest DTO */
export type CreateTodoDto = {
  title: string;
  content?: string | null | undefined;
};

/** TODOのDTO */
export type CreateTodoResponseDto = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
};

/** TODO一覧取得のレスポンスDTO */
export type FetchAllTodoResponseDto = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
}[];

/** TODOのDTO */
export type FetchTodoResponseDto = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
};

/** TODO更新のrequest DTO */
export type UpdateTodoDto = {
  title: string;
  content?: string | null | undefined;
};

/** TODOのDTO */
export type UpdateTodoResponseDto = {
  id: number;
  title: string;
  content: string | null;
  createdAt: string;
  updatedAt: string;
};

/** TODOの削除のレスポンスDTO */
export type DeleteTodoResponseDto = {
  result: boolean;
};
