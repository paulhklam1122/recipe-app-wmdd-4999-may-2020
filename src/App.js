import React from 'react'
import './App.css'
import RecipesContainer from './components/containers/RecipesContainer'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Recipe Search</h1>
      </header>
      <RecipesContainer />
    </div>
  )
}

export default App
