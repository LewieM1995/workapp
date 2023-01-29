import React from 'react'
import './manualblend.css'
import ManualBTwo from './ManualBTwo'


function ManualBlend() {



  return (
    <div className='inner-manual-container'>
      <div className='manual-form' >
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Formula Code'/>
          <label className='manual-label' required>Formula Code</label>
        </div>
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Job Number'/>
          <label className='manual-label' required>Job Number</label>
        </div>
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Design Code'/>
          <label className='manual-label' required>Design Code</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Tech Initals'/>
            <label className='recipe-label' required>Tech Initals</label>
        </div>
      </div>
      <ManualBTwo />
      <ManualBTwo />
      <ManualBTwo />
      <ManualBTwo />
    </div>
  )
}

export default ManualBlend