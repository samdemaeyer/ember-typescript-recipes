import Controller from '@ember/controller'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'
import { restartableTask } from 'ember-concurrency-decorators'
import { TaskGenerator, timeout } from 'ember-concurrency'
import RecipeModel from 'typescript-recipes/models/recipe'

export default class IndexController extends Controller {
  queryParams = ['category', 'search']

  @tracked category = null
  @tracked search = '';

  @restartableTask
  *debounceSearch({
    target,
  }: {
    target: HTMLInputElement
  }): TaskGenerator<void> {
    yield timeout(500)
    this.search = target.value
  }

  @action
  toggleFavourite(recipe: RecipeModel): void {
    recipe.isFavourite = !recipe.isFavourite
    recipe.save()
  }
}
