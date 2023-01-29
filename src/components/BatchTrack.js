import React from 'react'
import './batchtrack.css'

function BatchTrack({ batchNo, productName, productCode, onSubmit, setBatchNo, setProductName, setProductCode}) {



  return (
      <form className='batch-form' onSubmit={onSubmit}>
        <div className='input-div'>
          <input type='text' className='batch-input' placeholder='Batch Number' value={batchNo} onChange={(e) => setBatchNo(e.target.value)}/>
          <label className='batch-label' required>Batch Number</label>
        </div>
        <div className='input-div'>
          <input type='text' className='batch-input' placeholder='Product Name'value={productName} onChange={(e) => setProductName(e.target.value)}/>
          <label className='batch-label' required>Product Name</label>
        </div>
        <div className='input-div'>
          <input type='text' className='batch-input' placeholder='Product Code' value={productCode} onChange={(e) => setProductCode(e.target.value)}/>
          <label className='batch-label' required>Product Code</label>
        </div>
          <button className='batch-button' type='submit'>Submit</button>
      </form>
  )
}

export default BatchTrack