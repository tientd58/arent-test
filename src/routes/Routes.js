import React, { Suspense } from 'react'
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from 'react-router-dom';

import { AuthenRoots, AuthorRoots } from './paths';
import MainLayout from '../components/layout/MainLayout';

export const Routes = ({currentUser}) => {
  const Roots = currentUser ? AuthorRoots : AuthenRoots;
  return (
    <Suspense fallback={null}>
      <RoutesReactRouterDom>
        {
          Roots.map((route) => {
            if (route.path) {
              return (
                <Route
                  exact
                  key={route.key}
                  path={route.path}
                  element={<MainLayout>{React.createElement(route.element)}</MainLayout>}
                />
              );
            }
            return null;
          })
        }
        <Route path="*" element={<Navigate to="/404" />} />
      </RoutesReactRouterDom>
    </Suspense>
  )
}
