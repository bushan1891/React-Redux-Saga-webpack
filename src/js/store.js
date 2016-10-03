import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import createSagaMiddleware from 'redux-saga'
import {Hello} from './sagas/rootsaga.js'


import reducer from "./reducers"

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware,logger(),thunk)
export default createStore(reducer, middleware)


// need to add 'babel pollyfill' at entry webpack.config
sagaMiddleware.run(Hello);