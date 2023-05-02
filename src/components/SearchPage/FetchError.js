import React, { Component } from 'react'

class FetchError extends Component {
  render() {
    return (
      <div className='fetch_error'>
        <h4 className='text-dark'>NETWORK PROBLEM</h4>
        <p>We are unable to connect to our systems from your device. Please try again after a while</p>
        <button className='refresh_btn' onClick={() => window.location.reload()}>
            REFRESH
        </button>
      </div>
    )
  }
}

export default FetchError;