import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <p className="title-card" data-testid="name-card">
          { cardName }
        </p>
        <img
          className="image-card"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          { cardDescription }
        </p>
        <hr />
        <p className="paragraph-style" data-testid="attr1-card">
          Atributo 1................
          { cardAttr1 }
        </p>
        <p className="paragraph-style" data-testid="attr2-card">
          Atributo 2................
          { cardAttr2 }
        </p>
        <p className="paragraph-style" data-testid="attr3-card">
          Atributo 3................
          { cardAttr3 }
        </p>
        <hr />
        <p data-testid="rare-card">
          { cardRare }
        </p>
        { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
