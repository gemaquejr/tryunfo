import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Filters from './components/Filters';

import './reset.css';
import './style.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      allCards: [],
      filterValue: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const inputValue = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: inputValue }, () => {
      this.setState({ isSaveButtonDisabled: this.formValidation() });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((preventDefault) => (
      { allCards: [...preventDefault.allCards, this.newCard()] }
    ));
    this.clearForm();
    this.trunfoIsChecked();
  };

  newCard = () => {
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
    } = this.state;

    const actualCreateCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };

    return actualCreateCard;
  };

  clearForm = () => {
    this.setState((
      {
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        isSaveButtonDisabled: true,
      }));
  }

  formValidation = () => {
    let {
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const { cardName, cardDescription, cardImage } = this.state;

    const atualState = [cardName, cardDescription, cardImage];
    const maxSolo = 90;
    const minSolo = 0;
    const maxValueTotal = 210;

    cardAttr1 = Number(cardAttr1);
    cardAttr2 = Number(cardAttr2);
    cardAttr3 = Number(cardAttr3);

    if (atualState.some((verification) => verification === '')) return true;
    if (cardAttr1 < minSolo || cardAttr1 > maxSolo || cardAttr1 === '') return true;
    if (cardAttr2 < minSolo || cardAttr2 > maxSolo || cardAttr2 === '') return true;
    if (cardAttr3 < minSolo || cardAttr3 > maxSolo || cardAttr3 === '') return true;
    if ((cardAttr1 + cardAttr2 + cardAttr3) > maxValueTotal) return true;
    return false;
  }

  deleteCardClick = (atualCard) => {
    const { allCards } = this.state;
    const newState = allCards.filter((card) => card !== atualCard);
    this.setState({
      allCards: newState,
    }, () => this.trunfoIsChecked());
  }

  trunfoIsChecked = () => {
    const { cardTrunfo } = this.state;
    if (cardTrunfo) {
      this.setState(
        { hasTrunfo: true },
      );
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  filterChange = ({ target }) => {
    const { name, value } = target;
    const filterValue = target.type === 'checkbox' ? target.checked : value;
    this.setState({ [name]: filterValue }, () => {
      this.allFilterCards();
    });
  };

  allFilterCards = () => {
    const { allCards, filterValue, filterRare, filterTrunfo } = this.state;
    const trunfoCard = allCards.filter(({ cardTrunfo }) => cardTrunfo);

    if (filterTrunfo) return trunfoCard;
    let filteredCards = allCards.filter((card) => card.cardName.includes(filterValue));
    if (filterRare !== 'todas') {
      filteredCards = filteredCards.filter(({ cardRare }) => cardRare === filterRare);
    }
    return filteredCards;
  };

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
      deleteCardClick,
      filterValue,
      filterRare,
      filterTrunfo,
    } = this.state;

    const atualStates = {
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
      deleteCardClick,
    };

    return (
      <div className="container_app">
        <h1>Tryunfo</h1>
        <div className="container_main">
          <Form
            { ...atualStates }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <section className="container_preview">
            <p className="p-title">Pré-visualização</p>
            <Card { ...atualStates } />
          </section>
        </div>
        <div className="container_deck">
          <Filters
            filterChange={ this.filterChange }
            filterValue={ filterValue }
            filterRare={ filterRare }
            filterTrunfo={ filterTrunfo }
          />
          <Deck
            allFilterCards={ this.allFilterCards }
            deleteCardClick={ this.deleteCardClick }
          />
        </div>
      </div>
    );
  }
}
export default App;
