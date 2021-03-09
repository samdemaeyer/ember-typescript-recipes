import Model, { attr, belongsTo } from '@ember-data/model'
import RecipeDetailModel from 'typescript-recipes/models/recipe-detail'
import { TCategories } from 'typescript-recipes/types/category'

export default class RecipesModel extends Model {
  @attr('string') declare title: string
  @attr('string') declare description: string
  @attr('string') declare image: string | ArrayBuffer | null
  @attr('string') declare category: TCategories
  @attr('boolean') declare isFavourite: boolean
  @attr('number') declare rating: number

  @belongsTo('recipe-detail') declare recipeDetail: RecipeDetailModel
}
