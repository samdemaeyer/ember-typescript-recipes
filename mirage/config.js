export default function () {
  this.get('/recipes', (schema, { queryParams }) => {
    const category = queryParams['filter[category]']
    const search = queryParams.search?.toLowerCase()
    const recipes = category
      ? schema.recipes.where({ category })
      : schema.recipes.all()

    if (search) {
      return recipes.filter(({ attrs }) => {
        return (
          attrs.title.toLowerCase().includes(search) ||
          attrs.description.toLowerCase().includes(search)
        )
      })
    }

    return recipes
  })

  this.get('/recipes/:id')
  this.get('/recipes/:id')
  this.patch('/recipes/:id')
  this.post('/recipes')
  this.get('/recipe-details')
  this.patch('/recipe-details/:id')
  this.post('/recipe-details')
}
