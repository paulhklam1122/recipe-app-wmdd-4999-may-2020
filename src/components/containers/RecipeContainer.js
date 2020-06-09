import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { getRecipe } from '../../services/api'
import Loading from '../layout/Loading'
import Recipe from '../layout/Recipe'

class RecipeContainer extends Component {
  state = {
    isLoading: false,
    recipe: {}
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    const uri = this.props.location.state.uri

    getRecipe(uri).then(recipe => {
      this.setState({
        isLoading: false,
        recipe
      })
    })
  }

  render() {
    const { isLoading, recipe } = this.state
    const { label, image, source, url } = recipe

    return (
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <Recipe
            label={label}
            imageUrl={image}
            source={source}
            sourceUrl={url}
          />
        )}
      </div>
    )
  }
}

export default withRouter(RecipeContainer)
