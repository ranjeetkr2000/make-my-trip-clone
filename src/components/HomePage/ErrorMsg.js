import React, { Component } from 'react'

class ErrorMsg extends Component {
  render() {
    return (
      <div className='err_msg'>
        <i className="fa-solid fa-triangle-exclamation me-2"></i>
        <small>From & To Airports cannot be same</small>
      </div>
    )
  }
}

export default ErrorMsg