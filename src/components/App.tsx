import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchTodos();
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  renderTodos = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => this.props.deleteTodo(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };
  render() {
    console.log(this.props.todos);
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        <div>{this.renderTodos()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return {
    todos: state.todos
  };
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
