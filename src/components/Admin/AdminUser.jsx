import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context/contextProvider';
import axios from 'axios';
import AdminUserInformation from './AdminUserInformation';
import AdminUserCreate from './AdminUserCreate';
import AdminUserDelete from './AdminUserDelete';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function AdminUser() {
  const [users, setUsers] = useState([]);
  const [{ jwt }] = useStateValue();

  useEffect(() => {
    if (jwt) {
      axios({
        method: 'GET',
        url: `${API_BASE_URL}/api/users`,
        withCredentials: true,
        headers: { authorization: `Bearer ${jwt}` },
      })
        .then((data) => {
          // console.log(data);
          setUsers(data.data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [jwt]);
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
      <AdminUserDelete users={users} />
    </div>
  );
}
