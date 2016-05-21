import { injectReducer } from 'app/reducers'

export default (store) => ({
  path: 'import',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Import = require('./Import').default
      const reducer = require('./importReducer').default

      /*  Add the reducer to the store on key 'import'  */
      injectReducer(store, { key: 'import', reducer })

      /*  Return getComponent   */
      cb(null, Import)

    /* Webpack named bundle   */
    }, 'import')
  }
})
