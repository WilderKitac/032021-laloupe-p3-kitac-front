import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Formik, Form, Field, useField, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import './AdminUserCreate.css';

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
  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    const userToCreate = { ...values };
    userToCreate.adress = `${values.rue} ${values.codePostal} ${values.ville}`;
    delete userToCreate.rue;
    delete userToCreate.codePostal;
    delete userToCreate.ville;

    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/user',
      withCredentials: true,
      data: userToCreate,
    })
      .then((data) => {
        // console.log(data);
        resetForm({ values: '' });
        alert('Utilisateur créé avec succès');
      })
      .catch((err) => {
        alert(err);
      });
    // }
  };

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
            <div className="text">
              <div>
                <label htmlFor="firstname">
                  Prénom:
                  <Field name="firstname" id="firstname" />
                  <ErrorMessage name="firstname" component="div" />
                </label>
                <label htmlFor="lastname">
                  Nom:
                  <Field name="lastname" id="lastname" />
                  <ErrorMessage name="lastname" component="div" />
                </label>
                <label htmlFor="email">
                  Email:
                  <Field name="email" id="email" />
                  <ErrorMessage name="email" component="div" />
                </label>
                <label htmlFor="password">
                  Mot de passe:
                  <Field name="password" id="password" />
                  <ErrorMessage name="password" component="div" />
                </label>
                <label htmlFor="phone">
                  Numéro de téléphone:
                  <Field name="phone" id="phone" />
                  <ErrorMessage name="phone" component="div" />
                </label>
                <label htmlFor="rue">
                  Rue:
                  <Field name="rue" id="rue" />
                  <ErrorMessage name="rue" component="div" />
                </label>
                <label htmlFor="codePostal">
                  Code Postal:
                  <Field name="codePostal" id="codePostal" />
                  <ErrorMessage name="codePostal" component="div" />
                </label>
                <label htmlFor="ville">
                  Ville/Commune:
                  <Field name="ville" id="ville" />
                  <ErrorMessage name="ville" component="div" />
                </label>
              </div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
