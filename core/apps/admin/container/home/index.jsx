/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-28T16:28:13+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.jsx
 * @Last modified by:   xf
 * @Last modified time: 2017-10-10T17:42:39+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


import React from 'react'
import {Grid, withStyles, TextField} from 'material-ui';
import HfEditor from '../editor'

class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: null,
    }

    this.onTextFieldChange = this.onTextFieldChange.bind(this)
  }

  render(){
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <TextField fullWidth={true} placeholder="请输入文章标题" onChange={this.onTextFieldChange} />
        </Grid>
        <Grid item xs={12}>
          <HfEditor />
        </Grid>
      </Grid>
    )
  }

  onTextFieldChange(event, newVal){
    this.setState({
      title: newVal
    })
  }
}

export default Home
