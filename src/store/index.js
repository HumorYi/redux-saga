import { loginReducer } from './loginReducer'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../action/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({ user: loginReducer }), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
