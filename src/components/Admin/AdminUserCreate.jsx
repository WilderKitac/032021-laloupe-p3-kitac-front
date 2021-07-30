import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../context/contextProvider';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import './AdminUserCreate.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const UserValidation = object().shape({
  firstname: string().required('Le prénom est requis'),
  lastname: string().required('Le nom est requis'),
  email: string().required('email requis').email('Veuillez saisir un email valide'),
  password: string()
    .required('Le mot de passe est requis')
    .min(8, 'Le mot de passe doit avoir au moins 8 caractères')
    .max(32, 'Le mot de passe doit avoir au maximun 32 caractères')
    .matches(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.;!@#$%^&*])',
      'Votre mot de passe doit contenir au moins une lettre minuscule et une lettre majuscule et un caractère spécial .;!@#$%^&*',
    ),
  phone: string()
    .required('Le numéro de téléphone est requis')
    .min(6, 'Le numéro de téléphone doit contenir au moins 6 chiffres')
    .max(10, 'Le numéro de téléphone doit contenir au maximum 10 chiffres')
    .matches('^[0-9]{6,10}$', 'Le numéro de téléphone doit contenir que des chiffres'),
  rue: string().required('La rue est requise'),
  codePostal: string()
    .required('Le code postal est requis')
    // .min(5, 'Le code postal doit contenir 5 chiffres')
    // .max(5, 'Le code postal doit contenir 5 chiffres')
    .matches('^[0-9]{5,5}$', 'Le code postal ne doit contenir que des chiffres, au nombre de 5'),
  ville: string().required('La ville est requise'),
});

export default function AdminUserCreate() {
  const [rolesList, setRolesList] = useState(null);
  const [roleId, setRoleId] = useState(0);
  const [{ jwt }] = useStateValue();

  const handleSubmit = (values, { resetForm }) => {
    const userToCreate = { ...values };
    userToCreate.name = `${values.firstname} ${values.lastname}`;
    userToCreate.address = `${values.rue} ${values.codePostal} ${values.ville}`;
    userToCreate.clearPassword = `${values.password}`;
    userToCreate.user_types_id = `${roleId}`;
    delete userToCreate.rue;
    delete userToCreate.codePostal;
    delete userToCreate.ville;
    delete userToCreate.firstname;
    delete userToCreate.lastname;
    delete userToCreate.password;

    axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/users`,
      withCredentials: true,
      headers: { authorization: `Bearer ${jwt}` },
      data: userToCreate,
    })
      .then(() => {
        resetForm({ values: '' });
        alert('Utilisateur créé avec succès');
      })
      .catch((err) => {
        alert(err);
      });
    // }
  };

  //récupération des rôles
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/userTypes`)
      .then((resp) => resp.json())
      .then((data) => {
        setRolesList(data);
      });
  }, []);

  return (
    <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        rue: '',
        codePostal: '',
        ville: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={UserValidation}>
      {() => {
        return (
          <Form>
            <div className="admin_div">
              <h2>Création d&apos;un utilisateur</h2>
              <div className="admin_form">
                <label htmlFor="firstname">
                  Prénom :
                  <Field name="firstname" id="firstname" />
                  <ErrorMessage name="firstname" component="div" />
                </label>
                <label htmlFor="lastname">
                  Nom :
                  <Field name="lastname" id="lastname" />
                  <ErrorMessage name="lastname" component="div" />
                </label>
                <label htmlFor="email">
                  Email :
                  <Field name="email" id="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label htmlFor="password">
                  Mot de passe :
                  <Field name="password" id="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
                <label htmlFor="phone">
                  Numéro de téléphone :
                  <Field name="phone" id="phone" />
                  <ErrorMessage name="phone" component="div" />
                </label>
                <label htmlFor="rue">
                  Rue :
                  <Field name="rue" id="rue" />
                  <ErrorMessage name="rue" component="div" />
                </label>
                <label htmlFor="codePostal">
                  Code Postal :
                  <Field name="codePostal" id="codePostal" />
                  <ErrorMessage name="codePostal" component="div" />
                </label>
                <label htmlFor="ville">
                  Ville/Commune :
                  <Field name="ville" id="ville" />
                  <ErrorMessage name="ville" component="div" />
                </label>
                <label htmlFor="userType">
                  Sélectionner le rôle :
                  <Field
                    name="userType"
                    as="select"
                    onBlur={(item) => {
                      item.target.value === 'Aucune'
                        ? setRoleId('')
                        : setRoleId(rolesList?.filter((role) => role.title.includes(item.target.value))[0].id);
                    }}
                    onChange={(item) => {
                      item.target.value === 'Aucune'
                        ? setRoleId('')
                        : setRoleId(rolesList?.filter((role) => role.title.includes(item.target.value))[0].id);
                    }}>
                    {rolesList?.map((item, index) => (
                      <option key={index} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </Field>
                </label>
                <button type="submit" className="_button">
                  Submit
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
