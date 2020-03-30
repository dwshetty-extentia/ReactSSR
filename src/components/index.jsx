import React, { Component, Fragment } from 'react';
import AddTodo from './AddTodo/index.jsx';
import TodoList from './TodoList/index.jsx';

class App extends Component {
  componentDidMount() {
    const { fetchTodoList } = this.props
    fetchTodoList();
  }

  render() {
    const { 
      addTodoListItem,
      deleteTodoListItem,
      isFetching, 
      todoList,
      toggleTodoListItem
    } = this.props;
    const todoListLength = todoList.length;

    return (
      <Fragment>
        <h1>Demo TodoList App</h1>
        {
          isFetching 
          && <h2>Loading...</h2>
        }
        {
          !isFetching 
          && <AddTodo addTodoListItem={addTodoListItem}/>
        }
        {
          !isFetching 
          && (
            (
              todoListLength === 0 
              && <h2>Sorry, no Todo items available.</h2>
            ) 
            || (
              todoListLength > 0 
              && (
                <Fragment>
                  <TodoList 
                    todoList={todoList} 
                    toggleTodoListItem={toggleTodoListItem}
                    deleteTodoListItem={deleteTodoListItem}
                  />
                </Fragment>
              )
            )
          )
        }
      </Fragment>
    );
  }
}
 
export default App;