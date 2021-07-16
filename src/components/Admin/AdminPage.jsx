import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminUser from './AdminUser';
import Material from './CreateMaterial';
import Product from './ManageProducts';

export default function AdminPage() {
  const { path } = useRouteMatch();

  return (
    <div>
      <h1>Page Administrateur</h1>
      <Switch>
        <Route path={`${path}/users`}>
          <AdminUser />
        </Route>
        <Route path={`${path}/Material`}>
          <Material />
        </Route>
        <Route path={`${path}/Product`}>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}
