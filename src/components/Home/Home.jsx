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
    <div>
      <section className="backroundHome">
        <section className="encadreTitre">
          <h1 className="titreHome">TITRE</h1>
          <h2 className="titreHome">Sous Titre</h2>
          <p className="titreHome">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever
            since the 1500s
          </p>
        </section>
        <section className="encadreShop">
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
        </section>
      </section>
    </div>
  );
}

export default Home;
