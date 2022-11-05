import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let id = 0
// generate unique id
const getId = () => ++id
// initial todos
const initialTodos = [
  { id: getId(), name: "Take a nap", completed: false },
  { id: getId(), name: "Learn React", completed: true },
  { id: getId(), name: "Have fun", completed: false },
]

// App component
export default class App extends React.Component {
  // initial state
  state = {
    todos: initialTodos,
    shouldShowCompleteds: true,
    input: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    // add new todo to state
    this.setState({
      // spread existing todos
      ...this.state,
      // add new todo object to todos array
      todos: this.state.todos.concat({
        id: getId(),
        name: this.state.input,
        completed: false,
      }),
      // reset input
      input: ''
    })
  }

  onChange = evt => {
    const { value } = evt.target
    this.setState({
      // spread existing state
      ...this.state,
      // update input value
      input: value,
    })
  }

  toggleShouldShow = () => {
    this.setState({
      ...this.state,
      // toggle shouldShowCompleteds value
      shouldShowCompleteds: !this.state.shouldShowCompleteds
    })
  }

  toggleCompleted = id => () => {
    this.setState({
      ...this.state,
      // map over todos and toggle completed value
      todos: this.state.todos.map(td => {
        // if id matches, toggle completed value and return else return todo
        return td.id == id
          ? { ...td, completed: !td.completed }
          : td
      })
    })
  }

  render() {
    return (
      <div>
        {/* TodoList component */}
        <TodoList
          todos={this.state.todos}
          displayCompleteds={this.state.shouldShowCompleteds}
          toggleCompleted={this.toggleCompleted}
        />
        {/* Form component */}
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
