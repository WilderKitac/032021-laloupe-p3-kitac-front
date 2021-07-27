import React from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import AdminUser from './AdminUser';
import Material from './CreateMaterial';
import Product from './ManageProducts';
import './adminForms.css';

export default function AdminPage() {
  const { path } = useRouteMatch();

  return (
    <div id="admin_container">
      <h1>Page Administrateur</h1>
      <nav className="admin_nav">
        <Link to={`${path}/users`} className="admin_nav_link">
          <p>Utilisateurs</p>
        </Link>
        <Link to={`${path}/Material`} className="admin_nav_link">
          <p>Matières</p>
        </Link>
        <Link to={`${path}/Product`} className="admin_nav_link">
          <p>Produits</p>
        </Link>
      </nav>
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
