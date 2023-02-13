import React from 'react';

const ManualBTwo = ({ comp, setComp, id }) => {

  /*const handleInputChange = (event, index) => {
    const newComp = [...comp];
    newComp[index][event.target.name] = event.target.value;
    setComp(newComp);
  };*/

  const handleInputChange = (event) => {
    const newComp = [...comp];
    const index = newComp.findIndex(item => item.id === id);
    newComp[index][event.target.name] = event.target.value;
    setComp(newComp);
  };

  
  return (
    <div className='mbtwo-container'>
      <div className='recipe-input-div'>
        <input type='text' className='recipe-input' placeholder='Product Code' name="productCode" value={comp.productCode} onChange={(e) => handleInputChange(e, 0)} />
        <label className='recipe-label' required>Product Code</label>
      </div>
      <div className='recipe-input-div'>
        <input type='text' className='recipe-input' placeholder='Batch No' name="batchNo" value={comp.batchNo} onChange={(e) => handleInputChange(e, 0)} />
        <label className='recipe-label' required>Batch No</label>
      </div>
      <div className='recipe-input-div'>
        <input type='text' className='recipe-input' placeholder='Recipe' name="recipe" value={comp.recipe} onChange={(e) => handleInputChange(e, 0)} />
        <label className='recipe-label' required>Recipe %</label>
      </div>
      <div className='recipe-input-div'>
        <input type='text' className='recipe-input' placeholder='Target (KG)' name="target" value={comp.target} onChange={(e) => handleInputChange(e, 0)} />
        <label className='recipe-label' required>Target (KG)</label>
      </div>
      <div className='recipe-input-div'>
        <input type='text' className='recipe-input' placeholder='Actual (KG)' name="actual" value={comp.actual} onChange={(e) => handleInputChange(e, 0)} />
        <label className='recipe-label' required>Actual (KG)</label>
      </div>
    </div>
  )
};

export default ManualBTwo;