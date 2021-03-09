// Types for compiled templates
declare module 'typescript-recipes/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile'

  const tmpl: TemplateFactory
  export default tmpl
}
