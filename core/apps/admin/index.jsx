/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-27T11:22:34+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-28T16:33:21+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import { match } from 'react-router';
import Drawer from './container/index'
require("./assets/stylesheets/reset.css");
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
// import configureStore from "./redux/configureStore.jsx";

class AdminApp extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Router>
        <Drawer />
      </Router>
    )
  }
}

ReactDOM.render(
  <AdminApp />,
  document.getElementById("app")
)
