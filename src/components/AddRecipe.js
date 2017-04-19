import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../actions';

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    
    this. state = {
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
  }

  render() {
    return (
      <div>
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
            <textarea className="form-control" id="ingredients" placeholder="Składniki oddzielone przecinkiem" rows="2" onChange={e => this.setState({ ingredients: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Opis potrawy</label>
            <textarea className="form-control" id="description" placeholder="Opis" rows="3" onChange={e => this.setState({ description: e.target.value})}/>
          </div>
           <div className="form-group">
            <label htmlFor="image">Zdjęcie</label>
            <input type="text" className="form-control" id="image" placeholder="https:\\ " onChange={e => this.setState({ image: e.target.value})}/>
          </div>
          <input type="submit" className="btn btn-lg btn-default" />
        </form>
      </div>
    );
  }
}

          // <Link to="/" className="btn btn-lg btn-danger">Anuluj</Link>
// function mapStateToProps(state) {
//   return {
//     recipes: state
//   };
// }

export default connect(null, { addRecipe })(AddRecipe);
