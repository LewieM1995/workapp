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
          <button className='batch-button' type='submit'>Submit  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
  <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
  <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
</svg></button>
      </form>
  )
}

export default BatchTrack