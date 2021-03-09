import Controller from '@ember/controller'
import { action } from '@ember/object'

export default class RecipeEditController extends Controller {
  // TODO: Convert to task and add `Saving...` to button
  @action
  async submitRecipe(e: Event): Promise<void> {
    e.preventDefault()
    await this.model.recipeDetail.content.save()
    await this.model.save()
    this.transitionToRoute('recipe.show', this.model.id)
  }
}
