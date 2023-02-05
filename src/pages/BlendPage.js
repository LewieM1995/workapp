import React from 'react'
import ManualBlend from '../components/ManualBlend'
import { useState } from 'react';
import './mblendpage.css'

function BlendPage() {

const dbtwo = 'http://localhost:4000/manualBlends';
  
const [batchNo, setBatchNo] = useState('');
const [productCode, setProductCode] = useState('');
const [recipe, setRecipe] = useState('');
const [target, setTarget] = useState('');
const [actual, setActual] = useState('');
const [initials, setInitials] = useState('');
const [formula, setFormula] = useState('');
const [jobNum, setJobNum] = useState('');
const [designCode, setDesginCode] = useState('');

const onSubmit = (e) => {
//e.preventDefault();
 
  const batch = {batchNo, productCode, recipe, target, actual, initials, formula, jobNum, designCode};
  console.log(batch);
 
  fetch(dbtwo, {
   method: 'POST',
   body: JSON.stringify({
      batchNum : batchNo.toUpperCase(),
      productcode: productCode.toUpperCase(),
      recipePer: recipe + '%',
      targetW: target + 'KG',
      actualW: actual + 'KG',
      Tinitials: initials.toUpperCase(),
      formulaCode: formula.toUpperCase(),
      jobnum: jobNum.toUpperCase(),
      designcode: designCode.toUpperCase(),
      date: new Date()
   })
 })
 }

  return (
    <div className='manual-blend-container'>
      <form className='form-large' onSubmit={onSubmit}>
      <ManualBlend onSubmit={onSubmit} 
      setBatchNo={setBatchNo} 
      setProductCode={setProductCode} 
      productCode={productCode} 
      batchNo={batchNo} 
      recipe={recipe}
      setRecipe={setRecipe}
      target={target}
      setTarget={setTarget}
      actual={actual}
      setActual={setActual}
      initials={initials}
      setInitials={setInitials}
      formula={formula}
      setFormula={setFormula}
      jobNum={jobNum}
      setJobNum={setJobNum}
      designCode={designCode}
      setDesginCode={setDesginCode}
      />
      <button className='manual-button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BlendPage