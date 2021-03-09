import Route from '@ember/routing/route'
import DS from 'ember-data'
import RecipeModel from 'typescript-recipes/models/recipe'

interface IRecipeQueryParams {
  search: string
  'filter[category]': string
}

export default class ApplicationRoute extends Route {
  queryParams = {
    category: {
      refreshModel: true,
    },
    search: {
      refreshModel: true,
    },
  }

  async model({
    category,
    search,
  }: {
    category: string
    search: string
  }): Promise<DS.PromiseArray<RecipeModel>> {
    if (category || search) {
      const searchObject = {} as IRecipeQueryParams
      category && (searchObject['filter[category]'] = category)
      search && (searchObject.search = search)
      return this.store.query('recipe', searchObject)
    }
    const recipes = await this.store.findAll('recipe', { reload: true })
    return recipes.filter((recipe: RecipeModel) => !recipe.isNew)
  }
}
