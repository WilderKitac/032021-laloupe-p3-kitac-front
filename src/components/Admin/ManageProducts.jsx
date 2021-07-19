import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './adminForms.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function ManageProducts() {
  const [fileSelected, setFileSelected] = useState([]);
  const [prodName, setProdName] = useState(null);
  const [prodDesc, setProdDesc] = useState(null);
  const [prodDiff, setProdDiff] = useState(null);
  const [prodTime, setProdTime] = useState(null);
  const [prodPrice, setProdPrice] = useState(null);
  const [prodPieces, setProdPieces] = useState(null);
  const [prodSupply, setProdSupply] = useState(0);
  const [suppliesList, setSuppliesList] = useState(null);
  const [categoryList, setCategoryList] = useState(null);
  const [catArray, setCatArray] = useState([]);

  const onChangeFile = (event) => {
    const { type } = event.target.files[0];
    if (type !== 'image/png' || type !== 'image/jpeg') {
      setFileSelected(event.target.files);
    } else {
      alert("Veuillez selectionner un format d'image valide");
    }
  };

  // fonction soumission création produit (informations principales)
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      name: prodName,
      description: prodDesc,
      difficulty: prodDiff,
      completion_time: prodTime,
      product_price: prodPrice,
      pieces: prodPieces,
      supplies_id: prodSupply,
      category_ids: catArray,
    };
    axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/products`,
      data: data,
    })
      .then((data) => data.data)
      .then(() => {
        alert('Produit créé avec succès');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  //fonction pour récupération de(s) catégorie(s)
  const attachCat = (e) => {
    const tempCatArray = [...catArray];
    if (e.target.checked === true) {
      tempCatArray.push(e.target.id);
    } else {
      tempCatArray.splice(tempCatArray.indexOf(e.target.id), 1);
    }
    setCatArray(tempCatArray);
  };

  //fonction pour soumission multiples images
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

  //récupération des données fournitures
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/supplies`)
      .then((resp) => resp.json())
      .then((data) => {
        setSuppliesList(data);
      });
  }, []);
  //récupération des données boutiques
  useEffect(() => {
    fetch(`${API_BASE_URL}/api/categories`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  return (
    <section className="prod_admin">
      <h1>Gestion des Produits</h1>
      <div className="prod_div">
        <h2>Création</h2>
        <h3>Informations produit</h3>
        <form className="mat_form" onSubmit={submitData}>
          <label>
            Nom du produit:
            <input type="text" className="mat_input" value={prodName} onChange={(e) => setProdName(e.target.value)} />
          </label>
          <label>
            Description:
            <input type="text" className="mat_input" value={prodDesc} onChange={(e) => setProdDesc(e.target.value)} />
          </label>
          <label>
            Difficulté:
            <select
              name="Difficulty"
              className="mat_input"
              value={prodDiff}
              onBlur={(e) => setProdDiff(e.target.value)}
              onChange={(e) => setProdDiff(e.target.value)}>
              <option value="Facile">Facile</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Difficile">Difficile</option>
            </select>
          </label>
          <label>
            Temps de réalisation:
            <input type="number" className="mat_input" value={prodTime} onChange={(e) => setProdTime(e.target.value)} />
          </label>
          <label>
            Prix:
            <input type="number" className="mat_input" value={prodPrice} onChange={(e) => setProdPrice(e.target.value)} />
          </label>
          <label>
            Types de pièces:
            <input type="text" className="mat_input" value={prodPieces} onChange={(e) => setProdPieces(e.target.value)} />
          </label>
          <label>
            Fournitures:
            <select
              id="prod_supplyToSelect"
              onBlur={(item) => {
                item.target.value === 'Aucune'
                  ? setProdSupply(0)
                  : setProdSupply(suppliesList?.filter((suppl) => suppl.title.includes(item.target.value))[0].id);
              }}
              onChange={(item) => {
                item.target.value === 'Aucune'
                  ? setProdSupply(0)
                  : setProdSupply(suppliesList?.filter((suppl) => suppl.title.includes(item.target.value))[0].id);
              }}>
              <option defaultValue="unselect">Aucune</option>
              {suppliesList?.map((item, index) => (
                <option key={index} value={item.title}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <div>
            <h4>Categorie(s) :</h4>
            {categoryList?.map((item, index) => (
              <div key={index}>
                <input type="checkbox" id={item.id} name={item.name} onChange={attachCat}></input>
                <label htmlFor={item.name}>{item.name}</label>
              </div>
            ))}
          </div>
          <button className="prod_button" type="submit">
            Enregistrer le produit
          </button>
        </form>
        <h3>Insérer des images</h3>
        <form className="prod_form" onSubmit={submitFiles}>
          <label htmlFor="file">
            <input type="file" accept="image/*" onChange={onChangeFile} multiple />
          </label>
          <button className="prod_button" type="submit">
            Charger les fichiers
          </button>
          {/* {file && <img src={`${API_BASE_URL}/image/${file.filename}`} alt="fichier chargé" />} */}
        </form>
      </div>
    </section>
  );
}

export default ManageProducts;
