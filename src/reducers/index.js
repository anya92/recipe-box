import { LOAD_RECIPES, ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';
import update from 'react-addons-update';

const recipe = (action) => {
  let { title, image, ingredients, description } = action;
  return {
    id: `${Math.floor(Math.random() * 100000)}`,
    title,
    image,
    ingredients,
    description
  };
};

const removeById = (state = [], id) => {
  const recipes = state.filter(recipe => recipe.id !== id);
  return recipes;
};

const editRecipe = (state = [], action) => {
  let { title, image, ingredients, description, id } = action;
  const index = state.findIndex(recipe => recipe.id === id);
  let recipe = {
    id,
    title,
    image,
    ingredients,
    description
  };
  const recipes = update(state, {$splice: [[index, 1, recipe]]});
  return recipes;
};

const recipes = (state = [], action) => {
  let recipes = null;
  state = read_cookie('recipes');

  switch(action.type) {
  case LOAD_RECIPES:
    recipes = [...state, ...action.sampleRecipes];
    bake_cookie('recipes', recipes);  
    return recipes;
  case ADD_RECIPE:
    recipes = [...state, recipe(action)];
    bake_cookie('recipes', recipes);
    return recipes;
  case DELETE_RECIPE:
    recipes = removeById(state, action.id);
    bake_cookie('recipes', recipes);
    return recipes; 
  case EDIT_RECIPE: 
    recipes = editRecipe(state, action);
    bake_cookie('recipes', recipes);
    return recipes; 
  default:
    return state;
  }
};

export default recipes;
