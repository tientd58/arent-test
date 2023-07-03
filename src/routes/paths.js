import { lazy } from 'react'

import { PATH_NAME } from './pathName';

const Signin = lazy(() =>
  import('../pages/Signin').then(module => ({
    default: module.default,
  })),
);
const Signup = lazy(() =>
  import('../pages/Signup').then(module => ({
    default: module.default,
  })),
);
const ColumnPage = lazy(() =>
  import('../pages/ColumnPage').then(module => ({
    default: module.default,
  })),
);
const TopPage = lazy(() =>
  import('../pages/TopPage').then(module => ({
    default: module.default,
  })),
);
const MyRecord = lazy(() =>
  import('../pages/MyRecord').then(module => ({
    default: module.default,
  })),
);
const NotFound = lazy(() =>
  import('../pages/NotFound').then(module => ({
    default: module.NotFound,
  })),
);

export const AuthorRoots = [
  {
    key: 'home',
    name: 'Home',
    path: PATH_NAME.ROOT,
    element: TopPage,
  },
  {
    key: 'column-page',
    name: 'Column Page',
    path: PATH_NAME.COLUMN_PAGE,
    element: ColumnPage,
  },
  {
    key: 'top-page',
    name: 'Top Page',
    path: PATH_NAME.TOP_PAGE,
    element: TopPage,
  },
  {
    key: 'my-record',
    name: 'My Record',
    path: PATH_NAME.MY_RECORD,
    element: MyRecord,
  },
  {
    key: 'not-found',
    name: 'Not Found',
    path: PATH_NAME.NOT_FOUND,
    element: NotFound,
  },
];

export const AuthenRoots = [
  {
    key: 'default',
    name: 'Default',
    path: PATH_NAME.ROOT,
    element: ColumnPage,
  },
  {
    key: 'signin',
    name: 'Signin',
    path: PATH_NAME.SIGNIN,
    element: Signin,
  },
  {
    key: 'signup',
    name: 'Signup',
    path: PATH_NAME.SIGNUP,
    element: Signup,
  },
  {
    key: 'not-found',
    name: 'Not Found',
    path: PATH_NAME.NOT_FOUND,
    element: NotFound,
  },
  {
    key: 'column-page',
    name: 'Column Page',
    path: PATH_NAME.COLUMN_PAGE,
    element: ColumnPage,
  },
];
