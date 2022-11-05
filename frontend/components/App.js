import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0

const getId = () => ++id

const initialTodos = [
  { id: getId(), name: "Take a nap", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]

export default class App extends React.Component {
  state = {
    todos: initialTodos,
    shouldShowCompleteds: true,
    input: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({
        id: getId(),
        name: this.state.input,
        completed: false,
      }),
      input: ''
    })
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      ...this.state,
      input: value,
    })
  }

  toggleShouldShow = () => {
    this.setState({
      ...this.state,
      shouldShowCompleteds: !this.state.shouldShowCompleteds
    })
  }

  toggleCompleted = id => () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(td => {
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          displayCompleteds={this.state.shouldShowCompleteds}
          toggleCompleted={this.toggleCompleted}
        />
        <Form
          value={this.state.input}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          toggleShouldShow={this.toggleShouldShow}
          shouldShow={this.state.shouldShowCompleteds}
          disabled={!this.state.input.length}
        />
      </div>
    )
  }
}
