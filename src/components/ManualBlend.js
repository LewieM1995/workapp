import React from 'react'
import './manualblend.css'
import ManualBTwo from './ManualBTwo'


function ManualBlend({ batchNo, productCode, setBatchNo, setProductCode, recipe, setActual, setRecipe, actual, setDesginCode, designCode, target, setTarget, initials, setInitials, formula, setFormula, jobNum, setJobNum}){



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
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Tech Initals' value={initials} onChange={(e) => setInitials(e.target.value)} />
            <label className='recipe-label'required>Tech Initals</label>
        </div>
      </div>
      <ManualBTwo setBatchNo={setBatchNo} setProductCode={setProductCode} productCode={productCode} batchNo={batchNo} recipe={recipe}
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
      setDesginCode={setDesginCode}/>
    </div>
  )
}

export default ManualBlend