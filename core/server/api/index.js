/**
 * @Author: Xiao Feng Wang  <xf>
 * @Date:   2017-09-08T16:01:56+08:00
 * @Email:  wangxiaofeng@hualala.com
 * @Filename: index.js
 * @Last modified by:   xf
 * @Last modified time: 2017-09-23T11:08:00+08:00
 * @Copyright: Copyright(c) 2017-present Hualala Co.,Ltd.
 */

let _           = require("lodash"),
  Koa           = require("koa"),
  Promise       = require("bluebird");

/**
 * ### Cache Invalidation Header
 * Calculate the header string for the X-Cache-Invalidate: header.
 * The resulting string instructs any cache in front of the blog that request has occurred which invalidates any cached
 * versions of the listed URIs.
 *
 * `/*` is used to mean the entire cache is invalid
 *
 * @private
 * @param {request} req Original HTTP Request
 * @param {Object} result API method result
 * @return {String} Resolves to header string
 */
// cacheInvalidationHeader = function cacheInvalidationHeader(req, result) {
//   var parsedUrl = req._parsedUrl.pathname.replace(/^\/|\/$/g, '').split('/'),
//     method = req.method,
//     endpoint = parsedUrl[0],
//     subdir = parsedUrl[1],
//     jsonResult = result.toJSON ? result.toJSON() : result,
//     INVALIDATE_ALL = '/*',
//     post,
//     hasStatusChanged,
//     wasPublishedUpdated;
//
//   if (isActiveThemeUpdate(method, endpoint, result)) {
//     // Special case for if we're overwriting an active theme
//     return INVALIDATE_ALL;
//   } else if (['POST', 'PUT', 'DELETE'].indexOf(method) > -1) {
//     if (endpoint === 'schedules' && subdir === 'posts') {
//       return INVALIDATE_ALL;
//     }
//     if (['settings', 'users', 'db', 'tags'].indexOf(endpoint) > -1) {
//       return INVALIDATE_ALL;
//     } else if (endpoint === 'posts') {
//       if (method === 'DELETE') {
//         return INVALIDATE_ALL;
//       }
//
//       post = jsonResult.posts[0];
//       hasStatusChanged = post.statusChanged;
//       // Invalidate cache when post was updated but not when post is draft
//       wasPublishedUpdated = method === 'PUT' && post.status === 'published';
//
//       // Remove the statusChanged value from the response
//       delete post.statusChanged;
//
//       // Don't set x-cache-invalidate header for drafts
//       if (hasStatusChanged || wasPublishedUpdated) {
//         return INVALIDATE_ALL;
//       } else {
//         return utils.url.urlFor({
//           relativeUrl: utils.url.urlJoin('/', config.get('routeKeywords').preview, post.uuid, '/')
//         });
//       }
//     }
//   }
// };
//
// addHeaders = function addHeaders(apiMethod, ctx, result) {
//   var cacheInvalidation,
//     location,
//     contentDisposition;
//
//   cacheInvalidation = cacheInvalidationHeader(ctx.request, result);
//   if (cacheInvalidation) {
//     res.set({
//       'X-Cache-Invalidate': cacheInvalidation
//     });
//   }
//
//   if (req.method === 'POST') {
//     location = locationHeader(ctx.request, result);
//     if (location) {
//       res.set({
//         Location: location
//       });
//       // The location header indicates that a new object was created.
//       // In this case the status code should be 201 Created
//       res.status(201);
//     }
//   }
//
//   // Add Export Content-Disposition Header
//   if (apiMethod === db.exportContent) {
//     contentDisposition = contentDispositionHeaderExport()
//       .then(function addContentDispositionHeaderExport(header) {
//         res.set({
//           'Content-Disposition': header
//         });
//       });
//   }
//
//   // Add Subscribers Content-Disposition Header
//   if (apiMethod === subscribers.exportCSV) {
//     contentDisposition = contentDispositionHeaderSubscribers()
//       .then(function addContentDispositionHeaderSubscribers(header) {
//         ctx.response.set({
//           'Content-Disposition': header,
//           'Content-Type': 'text/csv'
//         });
//       });
//   }
//
//   return contentDisposition;
// };

/**
 * ### http
 * Decorator for API functions which are called via an HTTP request. Take the api method and wraps it so that it gets
 * data from the request and returns a sensible JSON response
 * @public
 * @param {Function} apiMethod API method to call
 * @param {Function} middleware format function to called by route when a matching request is made
 */
export let http = (apiMethod) => {
  return (ctx, next) => {
    // we define 2 properties for using as arguments in API calls
    let req = ctx.request;
    let object = ctx.request.body;
    let options = _.extend({}, req.file, {
      ip: ctx.request.ip
    }, ctx.request.query, ctx.request.params, {
      context: {
        // @TODO: forward the client and user obj in 1.0 (options.context.user.id)
        // user
      }
    });

    // If this's a GET or DELETE, req.body should be null, so we only have options (route and query params)
    // If this is a PUT, POST, or PATCH, req.body is an object
    if (_.isEmpty(object)) {
      object = options;
      options = {}
    }

    // your handler get passed in the original resolved result as parameter,
    // but the value you returned within your handler is ignored.
    // This gives you a chance to do whatever sort of manipulation on the original resolved value with the peace in mind
    // that it won't affect others.
    return apiMethod(object, options).tap(function onSuccess(response) {
      // Add X-Cache-Invalidate, Location, and content-disposition headers
      // return addHeaders(apiMethod, ctx, res, (response || {}));
      return response
    }).then((response) => {
      if (ctx.request.method === 'DELETE') {
        return ctx.response.status(204).end();
      }
      // Keep CSV header and formatting
      if (ctx.response.get('Content-Type') && ctx.response.get('Content-Type').indexOf('text/csv') === 0) {
        return ctx.response.status(200).send(response);
      }

      // CASE: api method response wants to handle the express response
      // example: serve files (stream)
      if (_.isFunction(response)) {
        return response(req, res, next);
      }

      // Send a properly formatting HTTP response containing the data with correct headers
      ctx.response.body = (response || {});
    }).catch((error) => {
      // To be handled by the API middleware
      next(error);
    })
  }
}

module.exports = {
  http: http,
  // API Endpoints

  configuration: require("./configuration")
}
