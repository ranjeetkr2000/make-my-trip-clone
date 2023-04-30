import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookingPage extends Component {
  render() {
    return (
      <div className='booking_page'>
        <h3>Complete Your Booking</h3>
        <div>
            <div>

            </div>
        </div>
        <div>

        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        from: state.searchReducer.from,
        to:state.searchReducer.to,
    }
}

export default connect(mapStateToProps)(BookingPage);