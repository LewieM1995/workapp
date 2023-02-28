import React from 'react'
import ManualBlend from '../components/ManualBlend'
import { useState } from 'react';
import './blendpost.css'


function BlendPage() {

const dbtwo = `https://work-application-backend.onrender.com/manualblends`;

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
    body: {
      Tinitials: initials.toUpperCase(),
      formulaCode: formula.toUpperCase(),
      jobnum: jobNum.toUpperCase(),
      designcode: designCode.toUpperCase(),
      date: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
      comp: comp.map((item) => ({
        id: item.id,
        batchNo: item.batchNo.toUpperCase(),
        productCode: item.productCode.toUpperCase(),
        recipe: item.recipe + "%",
        target: item.target + "KG",
        actual: item.actual + "KG"
      }))
    },
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
      <button className='manual-button' type='submit'>Submit <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-folder-plus" viewBox="0 0 16 16">
  <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
  <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
</svg></button>
      </form>
    </div>
  )
}

export default BlendPage
