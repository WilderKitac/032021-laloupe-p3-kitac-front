import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { useHistory } from 'react-router-dom';
import './Home.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

function Home() {
  const [categories, setCategories] = useState();
  const history = useHistory();

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
          <h1 className="titreHome">KITAC</h1>
          <h2 className="titreHome">Pour le plaisir de coudre</h2>
          <p className="titreHome">
            Kitac vous propose des articles (vêtements et accessoires) composés de pièces de tissu prête s à assembler à la machine à coudre :{' '}
            <strong>les kits à coudre</strong>
          </p>
        </div>
        <div className="Pomme">
          <div className="encadreShop">
            <h1 className="titleShop">LA BOUTIK A KITS</h1>
            <Carousel showThumbs={false} infiniteLoop={true} showStatus={false} autoPlay className="carrouselHome">
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
      </div>
      <div className="h_separe">
        <hr></hr>
      </div>
      <div className="h_Texte">
        <h1 className="h_PartiTwo">Apprendre a coudre avec Kitac</h1>
        <h2 className="h_PartiTwo">Un concept original</h2>
        <p className="h_PartiTwo">
          Kitac vous proposera bientôt des packs de formation à la couture comportant des pièces de tissus et un accès à une plateforme e-learning.
        </p>
      </div>
      <div className="h_ImageHome">
        <img className="coutureOne" alt="imageHome" src="/src/img/coutureOne.jpg" />
        <img className="coutureTwo" alt="imageHome2" src="/src/img/coutureTwo.webp" />
      </div>
      <div className="h_Bouton">
        <button className="h_cart_button" onClick={() => history.push('/Construction')}>
          Je me lance
        </button>
      </div>
      <div className="h_separe">
        <hr></hr>
      </div>
      <div className="h_Texte">
        <h1>L&apos;EQUIPE</h1>
        <h2>Sous-tire</h2>
        <p>
          Angélique et Valérie souhaitent mettre en place un modèle éco-responsable innovant d’apprentissage et de production à la demande tout en
          réunissant valeurs, passions et compétences au sein d’un même projet.
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
        <button className="h_cart_button" onClick={() => history.push('/Kezako')}>
          Faisons connaissance
        </button>
      </div>
    </section>
  );
}

export default Home;
