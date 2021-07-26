import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './adminForms.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function CreateMaterial() {
  const [fileSelected, setFileSelected] = useState(null);
  const [file, setFile] = useState(null);
  const [type, setType] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [matList, setMatList] = useState(null);
  const [selectedMat, setSelectedMat] = useState('Matière');
  const [idToUpdate, setIdToUpdate] = useState(null);
  const [matToDelete, setMatToDelete] = useState('');
  const [idToDelete, setIdToDelete] = useState(null);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== 'image/png' || type !== 'image/jpeg') {
      setFileSelected(event.target.files[0]);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };
  // fonction pour création
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
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/materials`,
        data,
      })
        .then((data) => data.data)
        .then((data) => {
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
  //récupération des informations pour mise à jour
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/materials`)
      .then((resp) => resp.json())
      .then((data) => {
        setMatList(data);
      });
  }, []);

  // fonction pour mise à jour
  const updateFile = (e) => {
    let id = idToUpdate;
    let data;
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
      axios({
        method: 'POST',
        url: `${API_BASE_URL}/api/materials/withImage/${id}`,
        data,
      })
        .then((data) => data.data)
        .then((data) => {
          setFile({
            filename: data.image,
          });
          setType('');
          setPrice('');
          setQuantity('');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      data = {
        material_type: type,
        material_price: price,
        quantity,
      };
      axios({
        method: 'PUT',
        url: `${API_BASE_URL}/api/materials/${id}`,
        data,
      })
        .then(() => {
          alert('Matière mise à jour avec succès');
        })
        .catch(() => {
          alert('La mise à jour a échoué');
        });
    }
  };

  const deleteMat = (e) => {
    let id = idToDelete;
    e.preventDefault();
    axios({
      method: 'DELETE',
      url: `${API_BASE_URL}/api/materials/${id}`,
    })
      .then(() => {
        alert('Matière supprimée avec succès');
      })
      .catch(() => {
        alert('La suppression a échoué');
      });
  };

  return (
    <section className="mat_admin">
      <h1>Gestion des matières</h1>
      <div className="mat_div">
        <h2>Création</h2>
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
          <button className="mat_button" type="submit">
            Charger le fichier
          </button>
          {file && <img src={`${API_BASE_URL}/image/${file.filename}`} alt="fichier chargé" />}
        </form>
      </div>
      <div className="mat_div">
        <h2>Modification</h2>
        <select
          id="mat_matToSelect"
          value={selectedMat}
          onBlur={(item) => {
            setSelectedMat(item.target.value);
            setType(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].material_type);
            setPrice(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].material_price);
            setQuantity(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].quantity);
          }}
          onChange={(item) => {
            setSelectedMat(item.target.value);
            setType(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].material_type);
            setPrice(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].material_price);
            setQuantity(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].quantity);
          }}>
          <option defaultValue="unselect">Sélectionner la matière à modifier</option>
          {matList?.map((item, index) => (
            <option key={index} value={item.material_type}>
              {item.material_type}
            </option>
          ))}
        </select>
        <h3>Informations matières:</h3>
        {matList
          ?.filter((item) => item.material_type.includes(selectedMat))
          .map((item, index) => (
            <form className="mat_form" key={`form_${index}`} onSubmit={updateFile}>
              <p>Identifiant matière: {item.id}</p>
              <p>Type : {item.material_type}</p>
              <label>
                Nouveau nom : <input type="text" key={index} value={type} onChange={(e) => setType(e.target.value)}></input>
              </label>
              <p>Prix : {item.material_price.toFixed(2)} €</p>
              <label>
                Nouveau prix : <input type="number" key={index} value={price} onChange={(e) => setPrice(e.target.value)}></input>
              </label>
              <p>Quantité : {item.quantity} </p>
              <label>
                Nouvelle quantité : <input type="number" key={index} value={quantity} onChange={(e) => setQuantity(e.target.value)}></input>
              </label>
              <p>
                Aperçu :
                <img src={`${API_BASE_URL}/image/${item.image}`} alt={item.material_type} />
              </p>
              <label>
                <input type="file" accept="image/*" onChange={onChangeFile} />
              </label>
              <button className="mat_button" type="submit" onClick={() => setIdToUpdate(item.id)}>
                Mettre à jour
              </button>
            </form>
          ))}
      </div>
      <div className="mat_div">
        <h2>Suppression</h2>
        <select
          id="mat_matToDelete"
          value={matToDelete}
          onBlur={(item) => {
            setMatToDelete(item.target.value);
            setIdToDelete(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].id);
          }}
          onChange={(item) => {
            setMatToDelete(item.target.value);
            setIdToDelete(matList?.filter((mat) => mat.material_type.includes(item.target.value))[0].id);
          }}>
          <option defaultValue="unselect">Sélectionner la matière à supprimer</option>
          {matList?.map((item, index) => (
            <option key={index} value={item.material_type}>
              {item.material_type}
            </option>
          ))}
        </select>
        <form className="mat_form" onSubmit={deleteMat}>
          <button className="mat_button" type="submit">
            Effacer
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateMaterial;
