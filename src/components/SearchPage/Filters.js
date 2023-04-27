import React, { Component } from 'react'

class Filters extends Component {
  render() {
    return (
        <div className='filters'>
            <div>
                <h6 className='fw-bold'>Popular Filters</h6>
            </div>
            <div className='filter'>
                <div className='my-2'>
                    <input type="checkbox" id="AirAsia" className='me-2'/>
                    <label htmlFor='AirAsia'>Air Asia</label>
                </div>

                <div className='my-2'>
                    <input type="checkbox" id="Air-India" className='me-2'/>
                    <label htmlFor='Air India'>Air India</label>
                </div>

                <div className='my-2'>
                    <input type="checkbox" id="Go-Air" className='me-2'/>
                    <label htmlFor='Go-Air'>Go Air</label>
                </div>
                
                <div className='my-2'>
                    <input type="checkbox" id="IndiGo" className='me-2'/>
                    <label htmlFor='IndiGo'>Indigo</label>
                </div>

                <div className='my-2'>
                    <input type="checkbox" id="Vistara" className='me-2'/>
                    <label htmlFor='Vistara'>Vistara</label>
                </div>

            </div>
        </div>
    )
  }
}

export default Filters