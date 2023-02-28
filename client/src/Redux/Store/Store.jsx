import { createStore, applyMiddleware } from 'redux'
import { compositeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import rootReducer from '../Reducer/Reducer'

const store = createStore(rootReducer,
    compositeWithDevTools(applyMiddleware(thunk)))

export default store;