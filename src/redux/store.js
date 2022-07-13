// import { createStore, combineReducers} from 'redux';
import { legacy_createStore as createStore,combineReducers} from 'redux'
import CountReducer from './reducer/counterReducer';
 
const rootReducer = combineReducers({
    count: CountReducer,
});
 
export const store = createStore(rootReducer);