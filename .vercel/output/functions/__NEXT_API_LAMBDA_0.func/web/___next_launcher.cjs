"use strict";
// The Next.js builder can emit the project in a subdirectory depending on how
// many folder levels of `node_modules` are traced. To ensure `process.cwd()`
// returns the proper path, we change the directory to the folder with the
// launcher. This mimics `yarn workspace run` behavior.
process.chdir(__dirname);
const region = process.env.VERCEL_REGION || process.env.NOW_REGION;
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = region === 'dev1' ? 'development' : 'production';
}
if (process.env.NODE_ENV !== 'production' && region !== 'dev1') {
    console.warn(`Warning: NODE_ENV was incorrectly set to "${process.env.NODE_ENV}", this value is being overridden to "production"`);
    process.env.NODE_ENV = 'production';
}
// @ts-ignore
// eslint-disable-next-line
let page = {};

              const url = require('url');

              function stripLocalePath(pathname) { return pathname }

              page = function(req, res) {
                try {
                  const pages = {
                    '/api/exit-preview': () => require('./.next/serverless/pages/api/exit-preview.js'),
'/api/login': () => require('./.next/serverless/pages/api/login.js'),
'/api/logout': () => require('./.next/serverless/pages/api/logout.js'),
'/api/preview': () => require('./.next/serverless/pages/api/preview.js'),
'/api/rpc/[[...blitz]]': () => require('./.next/serverless/pages/api/rpc/[[...blitz]].js'),
'/api/signup': () => require('./.next/serverless/pages/api/signup.js')
                    
                  }
                  let toRender = req.headers['x-nextjs-page']

                  if (!toRender) {
                    try {
                      const { pathname } = url.parse(req.url)
                      toRender = stripLocalePath(pathname).replace(/\/$/, '') || '/index'
                    } catch (_) {
                      // handle failing to parse url
                      res.statusCode = 400
                      return res.end('Bad Request')
                    }
                  }

                  let currentPage = pages[toRender]

                  if (
                    toRender &&
                    !currentPage
                  ) {
                    if (toRender.includes('/_next/data')) {
                      toRender = toRender
                        .replace(new RegExp('/_next/data/gfMdDWFaVLaCyab5tF7Ne/'), '/')
                        .replace(/\.json$/, '')

                      toRender = stripLocalePath(toRender) || '/index'
                      currentPage = pages[toRender]
                    }

                    if (!currentPage) {
                      // for prerendered dynamic routes (/blog/post-1) we need to
                      // find the match since it won't match the page directly
                      const dynamicRoutes = [{"src":"^/api/rpc(?:/(?<blitz>.+?))?(?:/)?$","dest":"/api/rpc/[[...blitz]]?blitz=$blitz"}]

                      for (const route of dynamicRoutes) {
                        const matcher = new RegExp(route.src)

                        if (matcher.test(toRender)) {
                          toRender = url.parse(route.dest).pathname
                          currentPage = pages[toRender]
                          break
                        }
                      }
                    }
                  }

                  if (!currentPage) {
                    console.error(
                      "pages in lambda:",
                      Object.keys(pages),
                      "page header received:",
                      req.headers["x-nextjs-page"]
                    );
                    throw new Error(
                      "Failed to find matching page in lambda for: " +
                        JSON.stringify(
                          {
                            toRender,
                            url: req.url,
                            header: req.headers["x-nextjs-page"],
                          },
                          null,
                          2
                        )
                    );
                  }

                  const mod = currentPage()
                  const method = mod.render || mod.default || mod

                  return method(req, res)
                } catch (err) {
                  console.error('Unhandled error during request:', err)
                  throw err
                }
              }
              
// page.render is for React rendering
// page.default is for /api rendering
// page is for module.exports in /api
module.exports = page.render || page.default || page;
