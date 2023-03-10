import React, { useState } from 'react'
import BatchTrack from '../components/BatchTrack'
import './batchpost.css'

function BatchPage () {

const [batchNo, setBatchNo] = useState('');
const [productName, setProductName] = useState('');
const [productCode, setProductCode] = useState('');
const db = 'https://work-application-backend.onrender.com/batchitems';

const onSubmit = (e) => {
 //e.preventDefault();

  if (
    batchNo === '' ||
    productName === '' ||
    productCode === '' )
 {
    return;
  }

 const batch = {batchNo, productName, productCode};
 console.log(batch);

 fetch(db, {
  method: 'POST',
  body: JSON.stringify({
    batchNum : batchNo.toUpperCase(),
    productname : productName.toUpperCase(),
    productcode: productCode.toUpperCase(),
    date: new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
};



  return (
    <div className='batch-page-container'>
      <BatchTrack onSubmit={onSubmit} setBatchNo={setBatchNo} setProductName={setProductName} setProductCode={setProductCode} productCode={productCode} batchNo={batchNo} productName={productName} />
    </div>
  )
}

export default BatchPage
