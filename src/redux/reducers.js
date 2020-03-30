import { combineReducers } from 'redux';

import todoListReducer from '../components/reducer';

const rootReducer = combineReducers({
    todoList: todoListReducer,
});

export default rootReducer;