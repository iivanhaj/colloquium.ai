import React, {useEffect} from 'react'
import './home.css'
import homeImg from '../../Assets/homeImg.png'
import {IoLocationSharp} from 'react-icons/io5'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { init } from 'aos'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'> 
      <div className='overlay'></div>
      <img src={homeImg} alt='interview' />
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up"
          className='smallText'>
            Travel
          </span>
          <h1 data-aos="fade-up"
          className='homeTitle'>
            Adventure
          </h1>
        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination : </label>
            <div className='input flex'>
              <input type="text" placeholder="Enter your name here..."/>
              <IoLocationSharp className="icon"/>
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor='date'>Select your date : </label>
            <div className='input flex'>
              <input type="date"/>
            </div>
          </div>

          <div className='priceInput'>
            <div className="label_total flex">
              <label htmlFor="price">Max price: </label>
              <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
              <input type="range" max="5000" min="1000"/>
            </div>
          </div>
          
          <div className='searchOptions flex'>
            <AiOutlineSearch className='icon'/>
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className='rightIcons'>
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <FiTwitter className="icon"/>
          </div>

          <div className='leftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home