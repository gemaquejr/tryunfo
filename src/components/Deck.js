import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { savedCard } = this.props;
    return (
      <div>
        { savedCard.map((value) => (
          <Card
            key={ value.cardName }
            { ...value }
          />
        ))}
      </div>
    );
  }
}

Deck.propTypes = {
  savedCard: PropTypes.arrayOf(PropTypes.shape({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  })).isRequired,
};

export default Deck;
