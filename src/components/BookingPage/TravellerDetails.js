import React, { Component } from 'react'
import ContactDetails from './ContactDetails'

class TravellerDetails extends Component {
  render() {
    return (
      <div>
        <h5 className='fw-bold'>Traveller Details</h5>
        <ContactDetails />
      </div>
    )
  }
}

export default TravellerDetails