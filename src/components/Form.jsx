import React from 'react';
import PropTypes from 'prop-types';

// import './style.css';

class Form extends React.Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form action="">
        <input
          className="input-text"
          id="cardName"
          name="cardName"
          data-testid="name-input"
          placeholder="Nome da Carta"
          type="text"
          value={ cardName }
          onChange={ onInputChange }
        />
        <hr />
        <textarea
          className="input-text"
          id="cardDescription"
          name="cardDescription"
          data-testid="description-input"
          placeholder="Descrição"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <hr />
        <input
          className="input-text"
          id="cardAttr1"
          name="cardAttr1"
          data-testid="attr1-input"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <input
          className="input-text"
          id="cardAttr2"
          name="cardAttr2"
          data-testid="attr2-input"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <input
          className="input-text"
          id="cardAttr3"
          name="cardAttr3"
          data-testid="attr3-input"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <hr />
        <input
          className="input-text"
          id="cardImage"
          name="cardImage"
          data-testid="image-input"
          placeholder="Insira endereço url"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <hr />
        <label htmlFor="cardRare">
          Raridade:
          <select
            className="input-select"
            data-testid="rare-input"
            name="cardRare"
            id="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="Normal" style={ { color: 'blue' } }>Normal</option>
            <option value="Raro" style={ { color: 'purple' } }>Raro</option>
            <option value="Muito raro" style={ { color: 'orange' } }>Muito raro</option>
          </select>
        </label>
        { hasTrunfo
          ? <span> Você já tem um Super Trunfo em seu baralho.</span>
          : (
            <label htmlFor="cardTrunfo">
              Super trunfo?
              <input
                className="input-checkBox"
                data-testid="trunfo-input"
                type="checkbox"
                id="cardTrunfo"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          ) }
        <input
          className="btn-save"
          id="save"
          name="save"
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          value="Criar carta"
        />
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
