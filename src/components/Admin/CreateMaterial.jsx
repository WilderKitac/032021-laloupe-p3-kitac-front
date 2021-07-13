import React, { useState } from 'react';
import axios from 'axios';
import './CreateMaterial.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function CreateMaterial() {
  const [fileSelected, setFileSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== 'image/png' || type !== 'image/jpeg') {
      setFileSelected(event.target.files[0]);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };
  const submitFile = (e) => {
    e.preventDefault();
    if (fileSelected) {
      const data = new FormData();
      data.append('file', fileSelected);
      data.append(
        'configuration',
        JSON.stringify({
          material_type: type,
          material_price: price,
          quantity,
        }),
      );
      console.log(data);
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/materials`,
        data,
      })
        .then((data) => data.data)
        .then((data) => {
          console.log(data);
          setFile({
            filename: data.image,
          });
          setType('');
          setPrice('');
          setQuantity('');
        })
        .catch((err) => {
          alert('Création du lien échouée');
        });
    }
  };
  return (
    <section>
      <h1>Page d&apos;administration : création d&apos;une matière</h1>
      <form className="mat_form" onSubmit={submitFile}>
        <label>
          Nom de la matière:
          <input type="text" className="mat_input" value={type} onChange={(e) => setType(e.target.value)} placeholder="Coton, soie,..." />
        </label>
        <label>
          Prix de la matière:
          <input type="number" className="mat_input" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Quantité disponible:
          <input type="number" className="mat_input" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <label htmlFor="file">
          {/* <img src="./src/img/upload.png" alt="selection_image" id="mat_upload" /> */}
          <input type="file" accept="image/*" onChange={onChangeFile} />
        </label>
        <button id="mat_button" type="submit">
          Charger le fichier
        </button>
        {file && <img src={`${API_BASE_URL}/image/${file.filename}`} alt="test" />}
      </form>
    </section>
  );
}

export default CreateMaterial;
