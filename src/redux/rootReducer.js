import { combineReducers } from 'redux'
import bibleReducer from './bible/bibleReducer'

const rootReducer = combineReducers({
  bible: bibleReducer,
  
})

export default rootReducer