import React from 'react'

function ManualBTwo({ comp, setComp, batchNo, productCode, setBatchNo, setProductCode, recipe, target, actual, setRecipe, setTarget, setActual}) {
  
    return (
    <div className='mbtwo-container'>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Product Code' name='productCode' value={comp.productCode} onChange={(e) => setProductCode(e.target.value)}/>
            <label className='recipe-label' required>Product Code</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Batch No' name='batchNo' value={comp.batchNo} onChange={(e) => setBatchNo(e.target.value)}/>
            <label className='recipe-label' required>Batch No</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Recipe' name='recipe' value={comp.recipe} onChange={(e) => setRecipe(e.target.value)}/>
            <label className='recipe-label'  required>Recipe %</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Target (KG)' name='target' value={comp.target} onChange={(e) => setTarget(e.target.value)}/>
            <label className='recipe-label'  required>Target (KG)</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Actual (KG)' name='actual' value={comp.actual} onChange={(e) => setActual(e.target.value)}/>
            <label className='recipe-label'  required>Actual (KG)</label>
        </div>
    </div>
  )
}

export default ManualBTwo