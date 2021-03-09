import Component from '@glimmer/component'
import { htmlSafe } from '@ember/template'
import { SafeString } from '@ember/template/-private/handlebars'

interface ComponentArgs {
  rating: number
}

export default class StarRatingComponent extends Component<ComponentArgs> {
  maxRating = 5

  get calculateRatingWidth(): SafeString {
    return htmlSafe(`width: ${(this.args.rating / this.maxRating) * 100}%`)
  }
}
