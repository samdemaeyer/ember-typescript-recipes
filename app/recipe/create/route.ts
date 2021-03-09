import Route from '@ember/routing/route'
import RecipeModel from 'typescript-recipes/models/recipe'

export default class RecipeCreateRoute extends Route {
  model(): RecipeModel {
    return this.store.createRecord('recipe', {
      recipeDetail: this.store.createRecord('recipe-detail', {
        ingredients: ['', ''],
        preparationSteps: ['', ''],
      }),
    })
  }
}
