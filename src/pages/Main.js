import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './main.css';

function Main() {

  return (
    <div className='header-container'>
        <header className='main-header'>
            <div className='button-container'>
                <Link to='/' className='main-button'>Batch Tracking</Link>
                <Link to='manualblend' className='main-button'>Manual Blend Tracking</Link>
                <Link to='search' className='main-button'>Search for Items</Link>  
            </div>
        </header>
    </div>
  ) 
}

export default Main