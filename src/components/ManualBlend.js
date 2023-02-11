import React, { useState } from 'react'
import './manualblend.css'
import ManualBTwo from './ManualBTwo'


function ManualBlend({ batchNo, productCode, setBatchNo, setProductCode, recipe, setActual, setRecipe, actual, setDesginCode, designCode, target, setTarget, initials, setInitials, formula, setFormula, jobNum, setJobNum}){

const [comp, setComp] = useState([{id: 1, produceCode: '', recipe: '', target: '', initials: '', actual: '', batchNo: '', formula: '', jobNum: '', designCode: ''}]);

const addComp = (e) => {
  //e.prenventDefault();
  setComp([...comp, {id : comp.length++, produceCode: '', recipe: '', target: '', initials: '', actual: '', batchNo: '', formula: '', jobNum: '', designCode: ''}]);
}; 

const handleChange = (e, id) => {
  const newComp = [...comp];
  const index = newComp.findIndex(index => comp.id === id);
  newComp[index][e.target.name] = e.target.value;
  setComp(newComp);
}

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
              key={comp.id}
              id={comp.id}
              setBatchNo={(e) => handleChange(e, comp.id)}
              batchNo={comp.batchNo}
              setProductCode={(e) => handleChange(e, comp.id)}
              productCode={comp.produceCode}
              setRecipe={(e) => handleChange(e, comp.id)}
              recipe={comp.recipe}
              setTarget={(e) => handleChange(e, comp.id)}
              target={comp.target}
              setActual={(e) => handleChange(e, comp.id)}
              actual={comp.actual}
              setInitials={(e) => handleChange(e, comp.id)}
              initials={comp.initials}
              setFormula={(e) => handleChange(e, comp.id)}
              formula={comp.formula}
              setJobNum={(e) => handleChange(e, comp.id)}
              jobNum={comp.jobNum}
              setDesginCode={(e) => handleChange(e, comp.id)}
              designCode={comp.designCode}
            />
          ))}
        <button className='btn btn-primary' onClick={addComp} type='button'></button>
      </div>
    </div>

  )
}

export default ManualBlend