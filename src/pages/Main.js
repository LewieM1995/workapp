import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

function Main() {

  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Menu</h4>
          <Link to='/' className='main-button'>Search for Items</Link>
          <Link to='manualblend' className='main-button'>Manual Blend Submit</Link>
          <Link to='batchpost' className='main-button'>Batch Submit</Link>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  ) 
}

export default Main



/* <div className='header-container'>
        <header className='main-header'>
            <div className='button-container'>
                <Link to='/' className='main-button'>Batch Submit</Link>
                <Link to='manualblend' className='main-button'>Manual Blend Submit</Link>
                <Link to='searchpage' className='main-button'>Search for Items</Link>
                <button className="menu-toggle">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
            </div>
        </header>
    </div> */