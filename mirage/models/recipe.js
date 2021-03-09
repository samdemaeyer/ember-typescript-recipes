import { Model, belongsTo } from 'ember-cli-mirage'

export default Model.extend({
  recipeDetail: belongsTo('recipe-detail'),
})
