import { LOAD_RECIPES, ADD_RECIPE, DELETE_RECIPE, EDIT_RECIPE } from '../constants';

export const loadRecipes = (sampleRecipes) => {
  const action = {
    type: LOAD_RECIPES,
    sampleRecipes
  };
  return action;
};

export const addRecipe = (title, image, ingredients, description) => {
  const action = {
    type: ADD_RECIPE,
    title,
    image,
    ingredients,
    description
  };
  return action;
};

export const deleteRecipe = (id) => {
  const action = {
    type: DELETE_RECIPE,
    id
  };
  return action;
};

export const editRecipe = (id) => {
  const action = {
    type: EDIT_RECIPE,
    id
  };
  return action;
};
