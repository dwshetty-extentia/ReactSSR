import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from './index.jsx';
import {
    addTodoListItem,
    deleteTodoListItem,
    fetchTodoList,
    toggleTodoListItem
} from './actions';

const mapStateToProps = ({ 
    todoList: {
        isFetching = false,
        todoList = []
    } = {}
 }) => ({
    isFetching,
    todoList
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addTodoListItem,
    deleteTodoListItem,
    fetchTodoList,
    toggleTodoListItem
}, dispatch);
   
export default connect(mapStateToProps, mapDispatchToProps)(App);