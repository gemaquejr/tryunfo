import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AlbumCards extends React.Component {
  render() {
    const { allFilterCards, deleteCardClick } = this.props;
    return (
      <div className="container_cards">
        { allFilterCards().map((card) => (
          <div key={ card.cardName } className="container_card">
            <Card
              cardTitle
              { ...card }
            />
            <button
              className="button_delete_Card"
              onClick={ () => deleteCardClick(card) }
              name={ cardName }
              data-testid="delete-button"
              type="button"
            >
              Excluir
            </button>

          </div>
        )) }
      </div>
    );
  }
}
export default AlbumCards;

AlbumCards.propTypes = {
  allFilterCards: PropTypes.func.isRequired,
  deleteCardClick: PropTypes.func.isRequired,
};
