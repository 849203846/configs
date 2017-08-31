import list from './list';
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export default combineReducers({
    list,
    router: routerReducer
});