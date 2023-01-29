import React, { useEffect, useState } from 'react'
import BatchTrack from '../components/BatchTrack'
import './batchpage.css'

function BatchPage () {

const [batchNo, setBatchNo] = useState('');
const [productName, setProductName] = useState('');
const [productCode, setProductCode] = useState('');
const db = 'http://localhost:8000/batchCodes';

const onSubmit = (e) => {
 //e.preventDefault();

 const batch = {batchNo, productName, productCode};
 console.log(batch);

 fetch(db, {
  method: 'POST',
  body: JSON.stringify({
    batchNum : batchNo,
    productname : productName,
    productcode: productCode
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
}



  return (
    <div className='batch-page-container'>
      <BatchTrack onSubmit={onSubmit} setBatchNo={setBatchNo} setProductName={setProductName} setProductCode={setProductCode} productCode={productCode} batchNo={batchNo} productName={productName} />
    </div>
  )
}

export default BatchPage