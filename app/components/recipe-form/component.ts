import Component from '@glimmer/component'
import { action, set } from '@ember/object'
import { tracked } from '@glimmer/tracking'
import RecipeModel from 'typescript-recipes/models/recipe'

interface ComponentArgs {
  recipe: RecipeModel
}

export default class RecipeFormComponent extends Component<ComponentArgs> {
  @tracked imageLabel = 'Choose file'

  @action
  mutateValue(attr: keyof RecipeModel, e: { target: HTMLInputElement }): void {
    set(this.args.recipe, attr, e.target.value)
  }

  @action
  mutateArray(
    attr: 'preparationSteps' | 'ingredients',
    i: number,
    e: { target: HTMLInputElement }
  ): void {
    this.args.recipe.recipeDetail.get(attr)[i] = e.target.value
  }

  @action
  uploadImage({ target }: { target: HTMLInputElement }): void {
    if (target.files) {
      const reader = new FileReader()
      reader.readAsDataURL(target.files[0])
      const imageName = target.files[0].name

      reader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          this.args.recipe.image = e.target.result
          this.args.recipe.recipeDetail.image = e.target.result
          this.imageLabel = imageName
        }
      })
    }
  }

  @action
  addNewInput(attr: 'preparationSteps' | 'ingredients', e: Event): void {
    e.preventDefault()
    this.args.recipe.recipeDetail.get(attr).pushObject('')
  }
}
