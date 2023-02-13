import React from 'react'
import ManualBlend from '../components/ManualBlend'
import { useState } from 'react';
import './mblendpage.css'
import { act } from 'react-dom/test-utils';

function BlendPage() {

const dbtwo = 'http://localhost:4000/manualBlends';

const [initials, setInitials] = useState('');
const [formula, setFormula] = useState('');
const [jobNum, setJobNum] = useState('');
const [designCode, setDesginCode] = useState('');

const [comp, setComp] = useState([{id: 1, productCode: "", recipe: "", target: "" , actual: "", batchNo: ""}]);

const onSubmit = (e) => {
//e.preventDefault();

  if (
    initials === '' ||
    formula === '' ||
    jobNum === '' ||
    designCode === '' ||
    comp.some((item) => item.productCode === '' || item.recipe === '' || item.target === '' || item.actual === '' || item.batchNo === '')
  ) {
    return;
  }
  
  const batch = {initials, formula, jobNum, designCode, comp};
  console.log(batch);
  

  fetch(dbtwo, {
    method: 'POST',
    body: JSON.stringify({
      Tinitials: initials.toUpperCase(),
      formulaCode: formula.toUpperCase(),
      jobnum: jobNum.toUpperCase(),
      designcode: designCode.toUpperCase(),
      date: new Date(),
      comp: comp.map((item) => ({
        id: item.id,
        batchNo: item.batchNo.toUpperCase(),
        productCode: item.productCode.toUpperCase(),
        recipe: item.recipe + "%",
        target: item.target + "KG",
        actual: item.actual + "KG"
      }))
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  });
};

  return (
    <div className='manual-blend-container'>
      <form className='form-large' onSubmit={onSubmit}>
      <ManualBlend onSubmit={onSubmit} 
      initials={initials}
      setInitials={setInitials}
      formula={formula}
      setFormula={setFormula}
      jobNum={jobNum}
      setJobNum={setJobNum}
      designCode={designCode}
      setDesginCode={setDesginCode}
      comp={comp}
      setComp={setComp}
      />
      <button className='manual-button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default BlendPage