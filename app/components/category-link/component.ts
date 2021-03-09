import Component from '@glimmer/component'
import { TCategories } from 'typescript-recipes/types/category'

interface ComponentArgs {
  category: TCategories
  selected: TCategories
}

export default class CategoryLinkComponent extends Component<ComponentArgs> {
  get isActive(): boolean {
    return this.args.category === this.args.selected
  }

  get categoryQuery(): TCategories | null {
    return this.isActive ? null : this.args.category
  }
}
