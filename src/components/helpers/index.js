export const getRecipeIdFromUri = uri => {
  const array = uri.split('#')
  const id = array[array.length - 1]
  return id
}
