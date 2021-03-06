import React, { Component } from 'react'; 
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editRecipe } from '../actions';

class SingleRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      title: props.recipe.title,
      image: props.recipe.image,
      ingredients: props.recipe.ingredients,
      description: props.recipe.description
    };
  }

  editRecipe(event, id) {
    event.preventDefault();
    console.log(typeof this.state.ingredients);
    const ingredients = typeof this.state.ingredients === 'string' ? (this.state.ingredients).split(',') : this.state.ingredients;
    this.props.editRecipe(this.state.title, this.state.image, ingredients, this.state.description, id);
    this.setState({ editing: false });
  }

  render() {
    const { recipe } = this.props;
    return (
      <div>
        {
          !this.state.editing
          ? <figure className="single-recipe col-md-6 col-md-offset-3">
              <img className="responsive" src={recipe.image} alt={recipe.title} />
              <figcaption className="">
              <div className="recipe-title">
                <Link to='/' className="btn-back">&lt;</Link>
               <h2>{recipe.title}</h2></div>
               <hr/>
                <p>{recipe.description}</p>
                <div><hr/>
                <h3>Składniki</h3>
                  {
                    recipe.ingredients.map((ingredient, i) => {
                      return (
                         <li key={i}>{ingredient}</li>
                      );
                    })
                 }
                </div>
                
              <a onClick={() => this.setState({ editing: true })} className="btn btn-edit">Edytuj</a>
              </figcaption>
            </figure>
            // editing 
          : <div> 
              <form 
                className="add-form col-md-6 col-md-offset-3"
                onSubmit={(e) => this.editRecipe(e, recipe.id)}
              >
              <h2>Edytuj Przepis</h2>
          <div className="form-group">
            <label htmlFor="title">Nazwa potrawy</label>
            <input type="text" className="form-control" id="title" defaultValue={recipe.title} name="title"
              onChange={e => this.setState({title: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="ingredients">Składniki</label>
            <textarea className="form-control" id="ingredients" defaultValue={recipe.ingredients} rows="2" onChange={e => this.setState({ ingredients: e.target.value})} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Opis potrawy</label>
            <textarea className="form-control" id="description" defaultValue={recipe.description} rows="3" onChange={e => this.setState({ description: e.target.value})}/>
          </div>
           <div className="form-group">
            <label htmlFor="image">Zdjęcie</label>
            <input type="text" className="form-control" id="image" defaultValue={recipe.image} onChange={e => this.setState({ image: e.target.value})}/>
          </div>
          <div className="form-buttons">
          
          <button type="submit" className="btn btn-edit">EDYTUJ</button>
          </div>
        </form>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.recipeId;
  const recipe = state.filter(recipe => recipe.id === id)[0];
  return {
    recipe: recipe
  };
}

export default connect(mapStateToProps, { editRecipe })(SingleRecipe);
