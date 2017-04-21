import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRecipe } from '../actions';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: '',
      image: '',
      ingredients: '',
      description: ''
    };
  }

  addRecipe(event) {
    event.preventDefault();
    const ingredients = this.state.ingredients.split(',');
    this.props.addRecipe(this.state.title, this.state.image, ingredients,this.state.description);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="add">
      <h2>Dodaj Nowy Przepis</h2>
        <form 
        className="add-form col-md-6 col-md-offset-3"
        onSubmit={e => this.addRecipe(e)}>
          <div className="form-group">
          <label htmlFor="title">Nazwa potrawy</label>
            <input type="text" className="form-control" id="title" placeholder="Nazwa" required
              onChange={e => this.setState({ title: e.target.value})}/>
              
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Składniki</label>
            <textarea className="form-control" id="ingredients" placeholder="Składniki oddzielone przecinkiem" rows="2" onChange={e => this.setState({ ingredients: e.target.value})} 
            required/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Opis potrawy</label>
            <textarea className="form-control" id="description" placeholder="Opis" rows="3" onChange={e => this.setState({ description: e.target.value})}
            required/>
          </div>
           <div className="form-group">
            <label htmlFor="image">Zdjęcie</label>
            <input type="text" className="form-control" id="image" placeholder="https:\\ " onChange={e => this.setState({ image: e.target.value})}
            required/>
          </div>
          <div className="form-buttons">
            <Link to="/" className="btn">ANULUJ</Link>
            <button type="submit" className="btn">DODAJ</button>
          </div>
        </form>
        
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     recipes: state
//   };
// }

export default connect(null, { addRecipe })(AddRecipe);
