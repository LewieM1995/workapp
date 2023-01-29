import React from 'react'

function ManualBTwo() {
  return (
    <div className='mbtwo-container'>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Product Code'/>
            <label className='recipe-label' required>Product Code</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Batch No'/>
            <label className='recipe-label' required>Batch No</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Recipe'/>
            <label className='recipe-label' required>Recipe %</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Target (KG)'/>
            <label className='recipe-label' required>Target (KG)</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Actual (KG)'/>
            <label className='recipe-label' required>Actual (KG)</label>
        </div>

    </div>
  )
}

export default ManualBTwo