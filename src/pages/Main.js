import React from 'react'
import { Link } from 'react-router-dom';
import './main.css';

function Main() {

  return (
    <div className='header-container'>
        <header className='main-header'>
            <div className='button-container'>
                <Link to='/' className='main-button'>Batch Submit</Link>
                <Link to='manualblend' className='main-button'>Manual Blend Submit</Link>
                <Link to='searchpage' className='main-button'>Search for Items</Link>
            </div>
        </header>
    </div>
  ) 
}

export default Main