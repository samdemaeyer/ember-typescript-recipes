import Model, { attr } from '@ember-data/model'
import { SafeString } from '@ember/template/-private/handlebars'

export default class RecipeDetailModel extends Model {
  @attr('string') declare image: string | ArrayBuffer | null
  @attr('string') declare description: SafeString
  @attr('string') declare serves: string
  @attr() declare ingredients: string[]
  @attr() declare preparationSteps: string[]
}
