/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../@types';

export type Methods = DefineMethods<{
  /** TODOの取得 */
  get: {
    status: 200;
    /** TODOの取得成功 */
    resBody: Types.FetchTodoResponseDto;
  };

  /** TODOの更新 */
  patch: {
    status: 200;
    /** TODOの更新成功 */
    resBody: Types.UpdateTodoResponseDto;
    reqBody: Types.UpdateTodoDto;
  };

  /** TODOの削除 */
  delete: {
    status: 200;
    /** TODOの削除成功 */
    resBody: Types.DeleteTodoResponseDto;
  };
}>;
