import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'

// import Button from 'material-ui/Button';
// import classNames from 'classnames';
// import Card, { CardContent } from 'material-ui/Card';
// import AssignmentInd from '@material-ui/icons/AssignmentInd';
// import Input from '@material-ui/icons/Input';
import Grid from 'material-ui/Grid'

import { Route, Switch } from 'react-router-dom'
import Login from './Login'
import Registration from './Registration'
import Welcome from './Welcome'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword';

class Main extends Component {
  render() {
    const { classes } = this.props
    
    return(
      <div>
        <Grid container spacing={0} className={classes.root}>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/resetpassword" component={ResetPassword} />
          <Route path="/" component={Welcome} />
        </Switch>
        </Grid>
      </div>
    )
  }
}

const styles = theme => ({
  root:{
    display: 'flex',
    height: '100%',
    padding: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

export default withStyles(styles)(Main)