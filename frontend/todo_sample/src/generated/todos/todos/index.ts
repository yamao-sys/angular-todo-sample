/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../@types';

export type Methods = DefineMethods<{
  /** TODOの作成 */
  post: {
    status: 201;
    /** TODOの作成成功 */
    resBody: Types.CreateTodoResponseDto;
    reqBody: Types.CreateTodoDto;
  };

  /** TODOの一覧取得 */
  get: {
    status: 200;
    /** TODOの一覧取得成功 */
    resBody: Types.FetchAllTodoResponseDto;
  };
}>;
