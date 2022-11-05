import React from 'react'

export default class Form extends React.Component {
  render() {
    {/* // destructure props */}
    const {
      value,
      onSubmit,
      onChange,
      toggleShouldShow,
      shouldShow,
      disabled,
    } = this.props
    return (
      <>
        <form id="todoForm" onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="Type todo"
          />
          <input disabled={disabled} type="submit" />
        </form>

        <button onClick={toggleShouldShow}>
          {shouldShow ? 'Hide' : 'Show'} Completed
        </button>
      </>
    )
  }
}
