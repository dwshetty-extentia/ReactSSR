import { 
  ADD_TODOLIST_ITEM,
  DELETE_TODOLIST_ITEM,
  FETCH_LIST_ERROR,
  FETCH_LIST_PENDING, 
  FETCH_LIST_SUCCESS,
  TOGGLE_TODOLIST_ITEM
} from './actionTypes';

const initialState = { 
  isFetching: false, 
  todoList: []
};

const todoListReducer = (state = initialState, { type = '', payload = ''} = {}) => {
  const {
    todoList = []
  } = state;
  
  switch (type) {
    case ADD_TODOLIST_ITEM:
      return {
        ...state,
        todoList: [
          ...todoList,
          {
            id: todoList.length + 1,
            name: payload,
          }
        ]
      };
    case DELETE_TODOLIST_ITEM:
      const deleteItemIndex = todoList.findIndex(({ id = -1 }) => id === payload);
      const updatedTodoList = [ ...todoList ];
      updatedTodoList.splice(deleteItemIndex, 1);
      return {
        ...state,
        todoList: updatedTodoList
      };
    case FETCH_LIST_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        todoList: payload,
      };
    case FETCH_LIST_ERROR:
      return {
        ...state,
        isFetching: false,
        todoListError: payload,
      };
    case TOGGLE_TODOLIST_ITEM:
      const toggleItemIndex = todoList.findIndex(({ id = -1 }) => id === payload);
      const { done } = todoList[toggleItemIndex];
      return {
        ...state,
        todoList: [
          ...todoList.slice(0, toggleItemIndex),
          {
            ...todoList[toggleItemIndex],
            done: !done,
          },
          ...todoList.slice(toggleItemIndex + 1),
        ]
      };
    default:
      return state;
  }
}

export default todoListReducer;
