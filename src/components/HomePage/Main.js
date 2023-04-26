import React, { Component } from 'react'

import logo from "../../images/mmtLogoWhite.png";
import discountIcon from "../../images/discount.png";
import briefCase from "../../images/briefcase.png";
import tripsImg from "../../images/trips.png"

import "./Main.css"
import Header from '../Header';
import indiaFlag from "../../images/india.png"
import HeroSection from './HeroSection';

class Main extends Component {
  render() {
    return (
      <div className='main'>
        <Header />
        <header className='hero_header p-2'>  
            <div className="navbar-brand">
                <img src={logo} alt="logo" />
            </div>
            <div className='d-flex'>
                <img src={discountIcon} alt="icon" className='icon me-2'/>
                <div className='d-flex flex-column me-3'> 
                    <span className='fw-bold'>Super Offers</span>
                    <small>Explore great deals and offers</small>
                </div>

                <img src={briefCase} alt="icon" className='icon me-2'/>
                <div className='d-flex flex-column me-3'>
                    <span className='fw-bold'>Introducing myBiz</span>
                    <small>Business Travel Solution</small>
                </div>

                <img src={tripsImg} alt="icon" className='icon me-2'/>
                <div className='d-flex flex-column me-3'>
                    <span className='fw-bold'>My Trips</span>
                    <small>Manage Your Bookings</small>
                </div>
                <button className='btn btn-primary'>
                    <small>Login or Create Account</small>
                </button>
                <div className='d-flex align-items-center btn btn-secondary text-white'>
                    <span><img src={indiaFlag} alt="india"className="flag"/> </span>
                    <small> IN | ENG | INR</small>
                </div>
            </div>
        </header>
        <HeroSection />
      </div>
    )
  }
}

export default Main;