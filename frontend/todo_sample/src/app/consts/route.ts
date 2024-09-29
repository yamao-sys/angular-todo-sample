export const NAVIGATION_LIST = {
  top: '',
  auth: {
    signUp: 'auth/sign_up',
    signIn: 'auth/sign_in',
  },
  todos: {
    list: 'todos/list',
    new: 'todos/new',
    edit: 'todos/edit/:id',
  },
};

export const NAVIGATION_PAGE = {
  top: '/',
  auth: {
    signUp: '/auth/sign_up',
    signIn: '/auth/sign_in',
  },
  todos: {
    list: '/todos/list',
    new: '/todos/new',
    edit: '/todos/edit',
  },
};

export const NOT_NEEDS_SIGNED_IN_PAGE = [
  NAVIGATION_PAGE.top,
  NAVIGATION_PAGE.auth.signUp,
  NAVIGATION_PAGE.auth.signIn,
];
