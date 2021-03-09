// Types for compiled templates
declare module 'ember-typescript-recipes/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile'

  const tmpl: TemplateFactory
  export default tmpl
}
