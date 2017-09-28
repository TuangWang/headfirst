/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-26T10:31:57+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-26T16:36:10+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */


import Router from 'koa-router'

const router = new Router()

router.get("/", (ctx, next) => {
  ctx.render({
    title: '哗啦啦',
    keyword: '哗啦啦',
    description: '哗啦啦平台',
  })
})

export default router
