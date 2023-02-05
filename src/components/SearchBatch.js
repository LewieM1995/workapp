import React, { useState } from 'react'

function SearchBatch() {

  const [search, setSearch] = useState('');
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
const manualBlends = [
  {
    "batchNum": "2YAT",
    "productcode": "gfdgdfg",
    "recipePer": "gfdg",
    "targetW": "gdfg",
    "actualW": "gfdg",
    "Tinitials": "gfdgdf",
    "formulaCode": "gfdg",
    "jobnum": "gdfg",
    "designcode": "gfdg",
    "id": 1
  },
  {
    "batchNum": "2YAT334455",
    "productcode": "FXDEV116",
    "recipePer": "50",
    "targetW": "10",
    "actualW": "10",
    "Tinitials": "LM",
    "formulaCode": "FXDEV116",
    "jobnum": "PPO2-00223344",
    "designcode": "0352-0352",
    "date": "2023-02-04T22:21:55.813Z",
    "id": 2
  },
  {
    "batchNum": "FDGDFGDFG",
    "productcode": "GFDG",
    "recipePer": "33%",
    "targetW": "gfdg",
    "actualW": "gdfg",
    "Tinitials": "gdfg",
    "formulaCode": "dfgdfg",
    "jobnum": "fdg",
    "designcode": "gdfg",
    "date": "2023-02-04T22:53:31.595Z",
    "id": 3
  },
  {
    "batchNum": "TERT",
    "productcode": "TERTER",
    "recipePer": "21%",
    "targetW": "12KG",
    "actualW": "12KG",
    "Tinitials": "REW",
    "formulaCode": "TRETERT",
    "jobnum": "ETERTERT",
    "designcode": "TRETERT",
    "date": "2023-02-04T22:54:52.093Z",
    "id": 4
  }
 ]

  return (
    <>
      <form className='search-form' onSubmit={batchSubmit}>
        <div className='search-div'>
          <input className='search-input' type='text' placeholder='Enter Date or Batch Number' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <label className='search-label'>Enter Date or Batch Number</label>
        </div>
          <button className='search-button' type='submit'>Find Items</button>
      </form>
      <table className='output-table'>
          <thead className='output-thead'>
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
          {manualBlends.filter((item) => {
            return search.toLowerCase() === '' ? item : item.batchNum.toLowerCase().includes(search);
          }).map((item) => (
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
    </>
  )
}

export default SearchBatch