import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todos';
import { incId } from '../actions/nextId';

class TodoForm extends React.Component {
  state = { name: '' }
  
  onChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { dispatch, id } = this.props;
    let { name } = this.state;
    let todo = { name, complete: false, id } 
    dispatch(addTodo(todo))
    dispatch(incId())
    this.setState({ name: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.name} onChange={this.onChange} />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(TodoForm);
