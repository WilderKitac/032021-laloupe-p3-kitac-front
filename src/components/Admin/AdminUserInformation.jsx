import React from 'react';

export default function AdminUserInformation({ firstname, lastname, adress, role, email, phone }) {
  return (
    <figure>
      <h3>{firstname}</h3>
      <h4>{lastname}</h4>
      <p>{adress}</p>
      <p>{role}</p>
      <figcaption>
        {email} - {phone}
      </figcaption>
    </figure>
  );
}
