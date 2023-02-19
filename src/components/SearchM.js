import React, { useState } from 'react'

function SearchM() {

  const [search, setSearch] = useState('');
  const [codes, setCodes] = useState([]);

  const dbtwo = 'http://localhost:4000/manualBlends';

 async function getData(){
  const res = await fetch(dbtwo);
  const info = await res.json();
  setCodes(info)
 };

 const filteredInfo = codes;

 const batchSubmit = (e) => {
  e.preventDefault();
  getData()
 };


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
      <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Blend Information</th>
              <th>Date</th>
              <th>Formula</th>
              <th>Job Number</th>
              <th>Design</th>
              <th>Initals</th>
            </tr>
          </thead>
            <tbody>
              {filteredInfo.filter((item) => 
                    item.Tinitials.toLowerCase().includes(search.toLowerCase()) ||
                    item.formulaCode.toLowerCase().includes(search.toLowerCase()) || 
                    item.jobnum.toLowerCase().includes(search.toLowerCase()) || 
                    item.designcode.toLowerCase().includes(search.toLowerCase()) || 
                    item.date.toString().includes(search.toLowerCase())
                    ).map((item) => (
                      <tr key={item.id}>
                      <td style={{width: 420 + "px" }}>
                          <table>
                            <tbody>
                              {item.comp.filter((compItem) => 
                                compItem.batchNo.toLowerCase().includes(search.toLowerCase())
                              ).map((compItem) => (
                                <tr key={compItem.id}>
                                  <td>{compItem.batchNo}</td>
                                  <td>{compItem.productCode}</td>
                                  <td>{compItem.recipe}</td>
                                  <td>{compItem.target}</td>
                                  <td>{compItem.actual}</td>
                                </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                        <td>{item.date}</td>
                        <td>{item.formulaCode}</td>
                        <td>{item.jobnum}</td>
                        <td>{item.designcode}</td>
                        <td>{item.Tinitials}</td>
                    </tr>
              ))}
           </tbody>
      </table>
    </div>
  </>
 )
}

export default SearchM