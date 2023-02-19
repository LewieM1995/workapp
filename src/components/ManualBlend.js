import React, { useState } from 'react'
import './manualblend.css'
import ManualBTwo from './ManualBTwo'


function ManualBlend({ setDesginCode, designCode, initials, setInitials, formula, setFormula, jobNum, setJobNum, comp, setComp}){


const addComp = () => {
  //e.prenventDefault();
  if (comp.length >= 5){
    return;
  } else {
  setComp([...comp, {id : comp.length + 1, productCode: '', recipe: '', target: '', actual: '', batchNo: ''}]); 
  }
}; 


  return (
    <div className='inner-manual-container'>
      <div className='manual-form' >
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Formula Code' value={formula} onChange={(e) => setFormula(e.target.value)}/>
          <label className='manual-label'  required>Formula Code</label>
        </div>
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Job Number' value={jobNum} onChange={(e) => setJobNum(e.target.value)}/>
          <label className='manual-label'  required>Job Number</label>
        </div>
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Design Code' value={designCode} onChange={(e) => setDesginCode(e.target.value)}/>
          <label className='manual-label'  required>Design Code</label>
        </div>
        <div className='manual-input-div'>
          <input type='text' className='manual-input' placeholder='Tech Initals' value={initials} onChange={(e) => setInitials(e.target.value)} />
          <label className='manual-label' required>Tech Initals</label>
        </div>
      </div>
      <div className='wrapper-mbt'>
      {comp.map((item) => (
            <ManualBTwo
              comp={comp}
              setComp={setComp}
              key={item.id}
              id={item.id}
            />
          ))}
        <button className='btn' onClick={addComp} type='button'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-bar-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z"/>
</svg></button>
      </div>
    </div>

  )
}

export default ManualBlend