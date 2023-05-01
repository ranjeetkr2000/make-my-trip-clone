import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./BookingPage.css";

class BookingPage extends Component {
  render() {
    return (
      <div className='booking_page'>
        <h3>Complete Your Booking</h3>
        <div className='booking_details'>
            <div className='booking_flight'>
                <div className='booking_flight_details'>
                    <div className='booking_city'>
                        <div>
                            <h4>{this.props.from.city}</h4>
                            <i className="fa-solid fa-arrow-right"></i>
                            <h4>{this.props.to.city}</h4>
                        </div>

                        <div className='cancel_fees'>
                            Cancellation fees apply
                        </div>
                    </div>

                    <div className='date'>
                        
                    </div>

                </div>
            </div>
            <div>

            </div>

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