import React from 'react'

// Todo component. Renders a single todo item. onClick handler is passed in as a prop and is called when the todo is clicked. This is how we can pass data from a child component to a parent component. It looks at the id of the todo and passes it to the parent component's toggleCompleted function. It also renders the todo name and a checkbox that is checked if the todo is completed.
export default class Todo extends React.Component {
  render() {
    return (
      <div onClick={this.props.toggleCompleted(this.props.todo.id)} className="todo">
        {this.props.todo.name}{this.props.todo.completed ? ' ✔️' : ''}
      </div>
    )
  }
}
