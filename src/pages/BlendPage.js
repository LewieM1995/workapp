import React from 'react'
import ManualBlend from '../components/ManualBlend'
import { useState } from 'react';
import './mblendpage.css'

function BlendPage() {

  
const [batchNo, setBatchNo] = useState('');
const [productName, setProductName] = useState('');
const [productCode, setProductCode] = useState('');

const onSubmit = (e) => {
 e.preventDefault();

 const batch = {batchNo, productName, productCode};
 console.log(batch);
}

  return (
    <div className='manual-blend-container'>
      <form className='form-large'>
      <ManualBlend onSubmit={onSubmit} setBatchNo={setBatchNo} setProductName={setProductName} setProductCode={setProductCode} productCode={productCode} batchNo={batchNo} productName={productName}/>
      <button className='manual-button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BlendPage