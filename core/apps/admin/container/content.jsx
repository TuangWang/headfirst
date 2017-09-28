/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-28T14:54:53+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: content.jsx
 * @Last modified by:   xf
 * @Last modified time: 2017-09-28T16:32:07+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


import React from 'react'
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Config from './config';
import Home from './home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const styles = theme => ({
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

class MainContent extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const classes = this.props.classes
    return (
      <main className={classes.content}>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/config" component={Config} />
      </main>
    )
  }
}

export default withStyles(styles)(MainContent);
