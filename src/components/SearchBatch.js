import React, { useState } from 'react'

function SearchBatch() {

  const [data, setData] = useState('');
  const [codes, setCodes] = useState('');

  let dbtwo = 'http://localhost:4000/manualBlends';

 async function getData(){
  const res = await fetch(dbtwo);
  const info = await res.text();
  setCodes(info);
  console.log(info)
 }

 const batchSubmit = (e) => {
  e.preventDefault();
  getData()
 }


 /*const manualBlends = [
 {   
      batchNum: "2YATOH7788",
      productcode: "FXDEV116",
      recipePer: "40%",
      targetW: "10KG",
      actualW: "10KG",
      Tinitials: "LM",
      formulaCode: "FXDEV116",
      jobnum: "PPO2-0002293",
      designcode: "0352-0099",
      id: 1
 }
 ]*/

  return (
    <>
      <form className='search-form' onSubmit={batchSubmit}>
        <div className='search-div'>
          <input className='search-input' type='text' placeholder='Enter Date or Batch Number' value={data} onChange={(e) => setData(e.target.value)}/>
          <label className='search-label'>Enter Date or Batch Number</label>
        </div>
          <button className='search-button' type='submit'>Find Items</button>
      </form>
      <section className='output-section'>
          <header className='output-header'>
            <ul>
              <li>BatchNo</li>
              <li>ProductCode</li>
              <li>ProductName</li>
              <li>DesignCode</li>
              <li>FormulaCode</li>
              <li>Recipe%</li>
              <li>ActualKG</li>
              <li>TargetKG</li>
              <li>JobNum</li>
              <li>Initials</li>
            </ul>
          </header>
          <div className='output'></div>
      </section>
    </>
  )
}

export default SearchBatch