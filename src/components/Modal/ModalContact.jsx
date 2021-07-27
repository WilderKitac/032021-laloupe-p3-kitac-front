import React from 'react';
import './ModalContact.css';

export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log('cliked');
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
                  <input className="btnContact" type="submit" value="Envoyer" onClick={this.handleShowDialog} />
                  <input className="btnContact" type="submit" value="Annuler" onClick={this.handleShowDialog} />
                </form>
              </div>
            </section>
          </dialog>
        )}
      </div>
    );
  }
}
