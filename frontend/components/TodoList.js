import React from 'react'
import Todo from './Todo'

// TodoList component. Renders a list of todos. It takes in a list of todos and a function to toggle a todo as completed. It then maps over the list of todos and renders a Todo component for each todo. It also passes in the toggleCompleted function to the Todo component.
export default class TodoList extends React.Component {
  render() {
    return (
      <div id="todos">
        <h2>Todos:</h2>
        {
          this.props.todos.reduce((acc, td) => {
            if (this.props.displayCompleteds || !td.completed) return acc.concat(
              <Todo
                key={td.id}
                toggleCompleted={this.props.toggleCompleted}
                todo={td}
              />
            )
            return acc
          }, [])
        }
      </div>
    )
  }
}
