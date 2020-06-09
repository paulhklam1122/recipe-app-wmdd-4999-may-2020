import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const getStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}))

const Form = props => {
  const classes = getStyles()
  return (
    <form onSubmit={props.onSubmit} className={classes.form}>
      <TextField
        label='Search Ingredients'
        name='searchQuery'
        className={classes.textField}
        onChange={e => props.onInputChange(e.target.value)}
        margin='normal'
        variant='outlined'
      />
      <Button className={classes.button} variant='outlined' type='submit'>
        Search
      </Button>
    </form>
  )
}

export default Form
