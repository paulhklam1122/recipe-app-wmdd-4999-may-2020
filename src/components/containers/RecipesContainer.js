import React, { Component } from 'react'
import { getRecipes } from '../../services/api'
import Form from '../forms/Form'
import Recipes from '../layout/Recipes'
import Loading from '../layout/Loading'

class RecipesContainer extends Component {
  state = {
    searchQuery: '',
    recipes: [],
    isLoading: false
  }

  fetchRecipes = e => {
    const { searchQuery } = this.state
    e.preventDefault()

    this.setState({
      isLoading: true
    })

    getRecipes(searchQuery).then(
      recipes => {
        this.setState({
          recipes,
          isLoading: false
        })
      },
      error => {
        alert('Error', `Something went wrong! ${error}`)
      }
    )
  }

  handleInputChange = searchQuery => {
    this.setState({
      searchQuery
    })
  }

  render() {
    const { isLoading, recipes } = this.state
    return (
      <div>
        <Form
          onInputChange={this.handleInputChange}
          onSubmit={this.fetchRecipes}
        />
        {isLoading ? <Loading /> : <Recipes recipes={recipes} />}
      </div>
    )
  }
}

export default RecipesContainer
