import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Home() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/categories/`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log(categories);

  return (
    <section className="h_Main">
      <div className="backroundHome">
        <div className="encadreTitre">
          <h1 className="titreHome">TITRE</h1>
          <h2 className="titreHome">Sous Titre</h2>
          <p className="titreHome">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s
          </p>
        </div>
        <div className="encadreShop">
          <h1 className="titleShop">LA BOUTIK A KITS</h1>
          <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay>
            {categories?.map((item) => (
              <>
                <img key={`image ${item.id}`} src={item.img_link} alt={item.img_alt} />
                <Link to={`/shop/${item.id}/${item.name}`} key={item.id} className="legend">
                  {item.name}
                </Link>
              </>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="h_separe">
        <hr></hr>
      </div>
      <div className="h_Texte">
        <h1 className="h_PartiTwo">Apprendre a coudre avec Kitac</h1>
        <h2 className="h_PartiTwo">Un concept original</h2>
        <p className="h_PartiTwo">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s.
        </p>
      </div>
      <div className="h_ImageHome">
        <img alt="imageHome" src="https://picsum.photos/150/100" />
        <img alt="imageHome2" src="https://picsum.photos/150/100" />
      </div>
      <div className="h_Bouton">
        <button className="h_cart_button">Je me lance</button>
      </div>
      <div className="h_separe">
        <hr></hr>
      </div>
      <div className="h_Texte">
        <h1>L&apos;EQUIPE</h1>
        <h2>Sous-tire</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s.
        </p>
      </div>
      <div className="h_EncadreCrea">
        <figure className="h_figure">
          <img className="h_imgCreatrice" alt="Angélique" src="./src/img/Angelique.png" />
          <figcaption>Angélique</figcaption>
        </figure>
        <figure className="h_figure">
          <img className="h_imgCreatrice" alt="Valérie" src="./src/img/Valerie.png" />
          <figcaption>Valérie</figcaption>
        </figure>
      </div>
      <div className="h_Bouton">
        <button className="h_cart_button">Faisons connaissance</button>
      </div>
    </section>
  );
}

export default Home;
