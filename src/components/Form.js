import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="cardName">
            <input type="text" data-testid="name-input" />
          </label>
          <label htmlFor="cardDescription">
            <textarea data-testid="description-input" />
          </label>
          <label htmlFor="cardAttr1">
            <textarea type="number" data-testid="attr1-input" />
          </label>
          <label htmlFor="cardAttr2">
            <textarea type="number" data-testid="attr2-input" />
          </label>
          <label htmlFor="cardAttr3">
            <textarea type="number" data-testid="attr3-input" />
          </label>
          <label htmlFor="cardImage">
            <input type="text" data-testid="image-input" />
          </label>
          <label htmlFor="cardValue">
            <select data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <input type="checkbox" data-testid="trunfo-input" />
          </label>
          <button type="submit" data-testid="save-button">
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
