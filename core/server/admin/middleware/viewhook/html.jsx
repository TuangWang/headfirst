/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T10:54:48+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: html.js
 * @Last modified by:   xf
 * @Last modified time: 2017-10-10T10:54:23+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

import path from 'path'
import fs from 'fs'

export default function html(pageInfo, content, state) {
  return (`
    <!DOCTYPE html>
        <html>
        <head>
            <meta charSet="utf-8"/>
            <title>Head First</title>
            <meta name="description" content=${pageInfo.description}/>
            <meta name="keyword" content=${pageInfo.keyword}/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        </head>
        <body>
            <div id="app" style="height:100%">
            </div>
            <script src="http://localhost:8082/main.bundle.js"></script>
          </body>
        </html>
    `)
}
