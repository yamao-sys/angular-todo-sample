import type { AspidaClient, BasicHeaders } from 'aspida';
import type { Methods as Methods_1l17dp7 } from './todos';
import type { Methods as Methods_1614r9x } from './todos/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/todos';
  const GET = 'GET';
  const POST = 'POST';
  const DELETE = 'DELETE';
  const PATCH = 'PATCH';

  return {
    todos: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * TODOの取得
           * @returns TODOの取得成功
           */
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1614r9x['get']['resBody'],
              BasicHeaders,
              Methods_1614r9x['get']['status']
            >(prefix, prefix1, GET, option).json(),
          /**
           * TODOの取得
           * @returns TODOの取得成功
           */
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1614r9x['get']['resBody'],
              BasicHeaders,
              Methods_1614r9x['get']['status']
            >(prefix, prefix1, GET, option)
              .json()
              .then((r) => r.body),
          /**
           * TODOの更新
           * @returns TODOの更新成功
           */
          patch: (option: { body: Methods_1614r9x['patch']['reqBody']; config?: T | undefined }) =>
            fetch<
              Methods_1614r9x['patch']['resBody'],
              BasicHeaders,
              Methods_1614r9x['patch']['status']
            >(prefix, prefix1, PATCH, option).json(),
          /**
           * TODOの更新
           * @returns TODOの更新成功
           */
          $patch: (option: { body: Methods_1614r9x['patch']['reqBody']; config?: T | undefined }) =>
            fetch<
              Methods_1614r9x['patch']['resBody'],
              BasicHeaders,
              Methods_1614r9x['patch']['status']
            >(prefix, prefix1, PATCH, option)
              .json()
              .then((r) => r.body),
          /**
           * TODOの削除
           * @returns TODOの削除成功
           */
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1614r9x['delete']['resBody'],
              BasicHeaders,
              Methods_1614r9x['delete']['status']
            >(prefix, prefix1, DELETE, option).json(),
          /**
           * TODOの削除
           * @returns TODOの削除成功
           */
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<
              Methods_1614r9x['delete']['resBody'],
              BasicHeaders,
              Methods_1614r9x['delete']['status']
            >(prefix, prefix1, DELETE, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * TODOの作成
       * @returns TODOの作成成功
       */
      post: (option: { body: Methods_1l17dp7['post']['reqBody']; config?: T | undefined }) =>
        fetch<Methods_1l17dp7['post']['resBody'], BasicHeaders, Methods_1l17dp7['post']['status']>(
          prefix,
          PATH0,
          POST,
          option,
        ).json(),
      /**
       * TODOの作成
       * @returns TODOの作成成功
       */
      $post: (option: { body: Methods_1l17dp7['post']['reqBody']; config?: T | undefined }) =>
        fetch<Methods_1l17dp7['post']['resBody'], BasicHeaders, Methods_1l17dp7['post']['status']>(
          prefix,
          PATH0,
          POST,
          option,
        )
          .json()
          .then((r) => r.body),
      /**
       * TODOの一覧取得
       * @returns TODOの一覧取得成功
       */
      get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1l17dp7['get']['resBody'], BasicHeaders, Methods_1l17dp7['get']['status']>(
          prefix,
          PATH0,
          GET,
          option,
        ).json(),
      /**
       * TODOの一覧取得
       * @returns TODOの一覧取得成功
       */
      $get: (option?: { config?: T | undefined } | undefined) =>
        fetch<Methods_1l17dp7['get']['resBody'], BasicHeaders, Methods_1l17dp7['get']['status']>(
          prefix,
          PATH0,
          GET,
          option,
        )
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
