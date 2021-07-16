import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateMaterial.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ManageProducts() {
  const [fileSelected, setFileSelected] = useState([]);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== 'image/png' || type !== 'image/jpeg') {
      setFileSelected(event.target.files);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };

  const submitFiles = (e) => {
    e.preventDefault();
    if (fileSelected) {
      const data = new FormData();
      for (let i = 0; i < fileSelected.length; i++) {
        data.append('files', fileSelected[i]);
      }
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/productsimages/multer`,
        data: data,
      })
        .then((data) => data.data)
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  return (
    <section className="prod_admin">
      <h1>Gestion des Produits</h1>
      <div className="prod_div">
        <h2>Création</h2>
        <h3>Insérer des images</h3>
        <form className="prod_form" onSubmit={submitFiles}>
          <label htmlFor="file">
            <input type="file" accept="image/*" onChange={onChangeFile} multiple />
          </label>
          <button className="prod_button" type="submit">
            Charger le fichier
          </button>
          {/* {file && <img src={`${API_BASE_URL}/image/${file.filename}`} alt="fichier chargé" />} */}
        </form>
      </div>
    </section>
  );
}

export default ManageProducts;
