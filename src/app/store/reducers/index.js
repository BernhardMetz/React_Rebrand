import { combineReducers } from 'redux';
import user from './user.reducers';

const createReducer = (asyncReducers) =>
    combineReducers({
        user,
        ...asyncReducers
    });

export default createReducer;
