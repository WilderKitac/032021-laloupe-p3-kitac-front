import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';

function Home() {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`http://localhost:8000/api/categories/`)
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log(categories);

  return (
    <section>
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
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay>
            {categories?.map((item) => (
              <>
                <img src={item.img_link} alt={item.img_alt} />
                <a href="/ProductSheet" key={item.id} className="legend">
                  {item.name}
                </a>
              </>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="h_Texte">
        <h1>Apprendre a coudre avec Kitac</h1>
        <h2>Un concept original</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s.
        </p>
      </div>
      <div className="h_ImageHome">
        <img alt="imageHome" src="https://picsum.photos/150/100" />
        <img alt="imageHome2" src="https://picsum.photos/150/100" />
      </div>
      <div className="h_Bouton">
        <button className="ps_cart_button">Je me lance</button>
      </div>

      <div className="h_Texte">
        <h1>L'EQUIPE</h1>
        <h2>Sous-tire</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since
          the 1500s.
        </p>
      </div>
      <div className="h_EncadreCrea">
        <img className="h_imgCreatrice" alt="Angélique" src="./src/img/Angelique.png" />
        <img className="h_imgCreatrice" alt="Valérie" src="./src/img/Valerie.png" />
      </div>
      <div className="h_Bouton">
        <button className="ps_cart_button">Faisons connaissance</button>
      </div>
      <div className="h_NewsLetter">
        <p>Restez informés des nouveautés en aveant-première.</p>
        <p>Promis, On va pas vous spammer !</p>
      </div>
    </section>
  );
}

export default Home;
