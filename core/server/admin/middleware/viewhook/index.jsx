/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T10:40:57+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T16:39:31+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


import React from 'react'
import ReactDOMServer from 'react-dom/server'
import beautiful from 'js-beautify'

import html from './html'
import Isomorph from '../../../../apps/admin/common/helpers/Isomorph'

export default function viewhook(options = {
  'beautiful' : true,
  'internals': true
}) {
  const _options = Object.assign({}, options)

  return async (ctx, next)=>{
    // ctx.store = Isomorph.createStore()
    ctx.store = {};
    ctx.history = {};
    // ctx.history = Isomorph.createHistory(ctx.store, ctx.path)

    ctx.render = (pageInfo, internals = _options.internals ) => {
      // const render = internals ? ReactDOMServer.renderToString : ReactDOMServer.rendeToStaticMarkup;
      const render = () => {}
      let markup = render( <Isomorph store={ctx.store} history={ctx.history} />)

      if(_options.beautiful) {
        markup = beautiful.html(markup)
      }

      ctx.type = 'html'
      // ctx.body = html(pageInfo, markup, ctx.store.getState())
      ctx.body = html(pageInfo, markup, {})
    }

    await next()
  }
}
