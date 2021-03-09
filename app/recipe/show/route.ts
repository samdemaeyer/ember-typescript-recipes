import Route from '@ember/routing/route'
import RecipeModel from 'typescript-recipes/models/recipe'

export default class RecipeShowRoute extends Route {
  model({ recipe_id }: { recipe_id: string }): RecipeModel {
    const params = { include: 'recipeDetail' }
    return this.store.findRecord('recipe', recipe_id, params)
  }
}
