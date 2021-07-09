import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminUserInformation from './AdminUserInformation';
import AdminUserCreate from './AdminUserCreate';

export default function AdminUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/api/user',
      withCredentials: true,
    })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div>
      <h2>Gestion des utilisateurs</h2>
      <ul>
        {users.map((user) => (
          <li key>
            <AdminUserInformation {...user} />
          </li>
        ))}
      </ul>
      <AdminUserCreate />
    </div>
  );
}
