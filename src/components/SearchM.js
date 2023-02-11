import React, { useEffect, useState } from 'react'

function SearchM() {

  const [search, setSearch] = useState('');
  const [codes, setCodes] = useState([]);

  const dbtwo = 'http://localhost:4000/manualBlends';

 async function getData(){
  const res = await fetch(dbtwo);
  const info = await res.json();
  setCodes(info)
  console.log(search.toLowerCase() === ''
  ? info
  : info.filter(item => item.batchNum.toLowerCase().includes(search) || item.date.toString().includes(search) || item.jobnum.toString().toLowerCase().includes(search) || item.productcode.toString().toLowerCase().includes(search)))
 }

 const filteredInfo = codes

 const batchSubmit = (e) => {
  e.preventDefault();
  getData()
 }


  return (
    <>
      <form className='search-form' onSubmit={batchSubmit}>
        <div className='search-div'>
          <input className='search-input' type='text' placeholder='Enter Date or Batch Number' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <label className='search-label'>Enter Date or Batch Number</label>
        </div>
          <button className='search-button' type='submit'>Find Items</button>
      </form>
    <div className='output-table'>
      <table className='table table-striped'>
          <thead>
            <tr>
              <th>Batch Number</th>
              <th>Product Code</th>
              <th>Recipe %</th>
              <th>Target (KG)</th>
              <th>Actual (KG)</th>
              <th>Initials</th>
              <th>Formula Code</th>
              <th>Job Number</th>
              <th>Design Code</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {filteredInfo.filter((item) => 
          search.toLowerCase() === ""
          ? !item
          : item.batchNum.toLowerCase().includes(search) || item.date.toString().includes(search)
          ).map((item) => (
            <tr key={item.id}>
                <td>{item.batchNum}</td>
                <td>{item.productcode}</td>
                <td>{item.recipePer}</td>
                <td>{item.targetW}</td>
                <td>{item.actualW}</td>
                <td>{item.Tinitials}</td>
                <td>{item.formulaCode}</td>
                <td>{item.jobnum}</td>
                <td>{item.designcode}</td>
                <td>{item.date}</td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
    </>
  )
}

export default SearchM