import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default function AdminUserDelete({ users }) {
  const [userToDelete, setUserToDelete] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);

  const deleteUser = (e) => {
    let id = idToDelete;
    e.preventDefault();
    axios({
      method: 'DELETE',
      url: `${API_BASE_URL}/api/users/${id}`,
    })
      .then(() => {
        //ceci permet de recharger la pagse à chaque suppression
        window.location.reload();
        alert('Utilisateur supprimé avec succès');
      })
      .catch(() => {
        alert('La suppression a échoué');
      });
  };
  return (
    <div className="admin_div">
      <h2>Suppression</h2>
      <form className="admin_form" onSubmit={deleteUser}>
        <label>
          Saisissez l&apos;utilisateur recherché
          <input type="text" placeholder="Nom de l'utilisateur" value={userToDelete} onChange={(item) => setUserToDelete(item.target.value)} />
        </label>
        {
          <table className="admin_dataTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>email</th>
                <th>rôle</th>
                <th> Effacer ?</th>
              </tr>
            </thead>
            <tbody>
              {users
                ?.filter((user) => user.name.startsWith(userToDelete))
                .map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    <td>
                      <button
                        className="prod_button"
                        type="submit"
                        onClick={() => {
                          setIdToDelete(item.id);
                        }}>
                        Effacer
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        }
      </form>
    </div>
  );
}
