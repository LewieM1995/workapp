import React, { useState } from 'react'
import './manualblend.css'
import ManualBTwo from './ManualBTwo'


function ManualBlend({ batchNo, productCode, setBatchNo, setProductCode, recipe, setActual, setRecipe, actual, setDesginCode, designCode, target, setTarget, initials, setInitials, formula, setFormula, jobNum, setJobNum, comp, setComp}){



const addComp = (e) => {
  //e.prenventDefault();
  setComp([...comp, {id : comp.length + 1, productCode: '', recipe: '', target: '', actual: '', batchNo: ''}]);
}; 

const handleChange = (e, id) => {
    if (!e.target) {
      return;
    }
    
    const newComp = [...comp];
    const index = newComp.findIndex(index => index.id === id);
    newComp[index][e.target.name] = e.target.value;
    setComp(newComp);
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
          <label className='manual-label'required>Tech Initals</label>
        </div>
      </div>
      <div className='wrapper-mbt'>
      {comp.map((item) => (
            <ManualBTwo
              comp={comp}
              setComp={setComp}
              key={item.id}
              id={item.id}
              setBatchNo={(e) => handleChange(e, item.id)}
              batchNo={batchNo}
              setProductCode={(e) => handleChange(e, item.id)}
              productCode={productCode}
              setRecipe={(e) => handleChange(e, item.id)}
              recipe={recipe}
              setTarget={(e) => handleChange(e, item.id)}
              target={target}
              setActual={(e) => handleChange(e, item.id)}
              actual={actual}
            />
          ))}
        <button className='btn btn-warning' onClick={addComp} type='button'>+</button>
      </div>
    </div>

  )
}

export default ManualBlend