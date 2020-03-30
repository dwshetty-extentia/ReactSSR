import {
  ADD_TODOLIST_ITEM,
  DELETE_TODOLIST_ITEM,
  FETCH_LIST_ERROR,
  FETCH_LIST_PENDING,
  FETCH_LIST_SUCCESS,
  TOGGLE_TODOLIST_ITEM
} from './actionTypes';

const fetchTodoListPending = () => ({
  type: FETCH_LIST_PENDING
});

const fetchTodoListSuccess = payload => ({
  type: FETCH_LIST_SUCCESS,
  payload,
});

const fetchTodoListError = payload => ({
  type: FETCH_LIST_ERROR,
  payload,
});

export const fetchTodoList = () => dispatch => {
  dispatch(fetchTodoListPending());
  fetch(`assets/data.json`)
    .then(response => response.json())
    .then(json => dispatch(fetchTodoListSuccess(json)))
    .catch(err => dispatch(fetchTodoListError(err)));
};

export const toggleTodoListItem = payload => ({
  type: TOGGLE_TODOLIST_ITEM,
  payload
});

export const addTodoListItem = payload => ({
  type: ADD_TODOLIST_ITEM,
  payload
});

export const deleteTodoListItem = payload => ({
  type: DELETE_TODOLIST_ITEM,
  payload
});