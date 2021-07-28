import React from 'react';
import './ModalEquipe.css';

export default class ModalEquipe extends React.Component {
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
          alt="noo image"
        />
        {this.state.isOpen && (
            <dialog className="dialog" open onClick={this.handleShowDialog}>
              <h3 className="modalTitre">Notre équipe</h3>
              <h3 className="modalText">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, illum odit impedit autem quasi quidem eos doloribus veritatis nisi ab
                fuga atque aperiam voluptates facere nemo! Vero labore maxime fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                suscipit maxime ut. Deleniti nam tempora quas quis praesentium laborum inventore assumenda, dolorem, perferendis ducimus blanditiis
                quae saepe, laudantium quo vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dignissimos possimus voluptates
                molestias harum, aliquam maiores recusandae assumenda consequatur iure nam tempora neque ducimus dolor delectus non. Optio, quo
                explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat corporis laboriosam excepturi nemo. Id quaerat ad totam ea
                itaque accusamus officia, dolore repellendus saepe ducimus facere recusandae cupiditate quibusdam nemo!
              </h3>
            </dialog>
        )}
      </div>
    );
  }
}
