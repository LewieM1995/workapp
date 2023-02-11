import React from 'react'

function ManualBTwo({ batchNo, productCode, setBatchNo, setProductCode, recipe, target, actual, setRecipe, setTarget, setActual}) {
  
    return (
    <div className='mbtwo-container'>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Product Code' value={productCode} onChange={(e) => setProductCode(e.target.value)}/>
            <label className='recipe-label' required>Product Code</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Batch No' value={batchNo} onChange={(e) => setBatchNo(e.target.value)}/>
            <label className='recipe-label' required>Batch No</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Recipe' value={recipe} onChange={(e) => setRecipe(e.target.value)}/>
            <label className='recipe-label'  required>Recipe %</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Target (KG)' value={target} onChange={(e) => setTarget(e.target.value)}/>
            <label className='recipe-label'  required>Target (KG)</label>
        </div>
        <div className='recipe-input-div'>
            <input type='text' className='recipe-input' placeholder='Actual (KG)' value={actual} onChange={(e) => setActual(e.target.value)}/>
            <label className='recipe-label'  required>Actual (KG)</label>
        </div>
    </div>
  )
}

export default ManualBTwo