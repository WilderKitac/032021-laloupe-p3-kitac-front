import React from 'react';
import axios from 'axios';
import './ModalContact.css';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default class ModalContact extends React.Component {
  state = { isOpen: false, name: '', email: '', message: '' };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('cliked');
  };

  sendEmail = (event) => {
    event.preventDefault();
    const dataContact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(dataContact);
    axios({
      method: 'POST',
      url: `${API_BASE_URL}/api/contact`,
      data: dataContact,
    })
      .then((data) => data.data)
      .then(() => {
        this.handleShowDialog();
        alert('Votre message a été envoyé');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    return (
      <div>
        <img
          className="imageModal"
          src="https://bucket.mlcdn.com/a/3123/3123652/images/575af8a8a85f73d0cf1a0fec08f2380cdf1d956e.jpeg"
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog className="dialog" open>
            <section>
              <div>
                <form className="formulaireContact" onSubmit={this.sendEmail}>
                  <label className="formulaireContact">
                    Nom :
                    <input className="inputName"
                      type="text"
                      name="name"
                      onChange={(event) => {
                        this.setState({ name: event.target.value });
                      }}
                    />
                  </label>
                  <label className="formulaireContact">
                    Email :
                    <input className="inputName"
                      type="text"
                      email="email"
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />
                  </label>

                  <label className="formulaireContact">
                    Message :
                    <textarea className="messageContact"
                      name="name"
                      onChange={(event) => {
                        this.setState({ message: event.target.value });
                      }}
                    />
                  </label>
                  <input className="buttonContact" type="submit" value="Envoyer" />
                  <button className="buttonContact" type="button" onClick={this.handleShowDialog}>
                    Annuler
                  </button>
                </form>
              </div>
            </section>
          </dialog>
        )}
      </div>
    );
  }
}
