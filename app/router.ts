import EmberRouter from '@ember/routing/router'
import config from 'typescript-recipes/config/environment'

export default class Router extends EmberRouter {
  location = config.locationType
  rootURL = config.rootURL
}

Router.map(function (): void {
  this.route('recipe', function (): void {
    this.route('create')
    this.route('show', { path: '/:recipe_id' }, function (): void {
      this.route('edit')
    })
  })
  this.route('404', { path: '/*path' })
})
