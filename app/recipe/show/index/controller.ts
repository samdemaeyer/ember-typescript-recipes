import Controller from '@ember/controller'
import { htmlSafe } from '@ember/template'
import { SafeString } from '@ember/template/-private/handlebars'

export default class RecipeShowController extends Controller {
  get description(): SafeString {
    return htmlSafe(this.model.recipeDetail.get('description'))
  }
}
