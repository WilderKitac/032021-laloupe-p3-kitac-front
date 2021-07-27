import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section>
      <div>
        <img className="photoContact"
          src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/5ef204bb10b93fdbe5e601bb_contact-2860030_1920-1024x683.jpg"
          alt=""
        />
        <form className="formulaireContact">
          <label className="formulaireContact">
            Nom :
            <input type="text" name="name" />
          </label>
          <label className="formulaireContact">
            Email :
            <input type="text" email="email" />
          </label>

          <label className="formulaireContact">
            Message :
            <input type="text" name="name" />
          </label>
          <input className="btnContact" type="submit" value="Envoyer" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
