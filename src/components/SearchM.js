import React, { useState } from 'react'
import LoadingComp from './LoadingComp';

function SearchM() {

  const [search, setSearch] = useState('');
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState()

  const dbtwo = `https://work-application-backend.onrender.com/manualblends?search=${search}`;

  async function getData() {
    try {
      setLoading(true);
      const res = await fetch(dbtwo);
      const data = await res.json();
      setCodes(data.data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
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
          {!loading ? (
            filteredInfo.length > 0 ? (
              filteredInfo.map((item) => {
                let compTable = null;
                if (item.comp) {
                  compTable = (
                    <table>
                      <tbody>
                        {item.comp.map((compItem) => (
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
                  );
                }
                return (
                  <tr key={item.id}>
                    <td style={{ width: 420 + "px" }}>{compTable}</td>
                    <td>{item.date}</td>
                    <td>{item.formulaCode}</td>
                    <td>{item.jobnum}</td>
                    <td>{item.designcode}</td>
                    <td>{item.Tinitials}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>No results found</td>
              </tr>
            )
          ) : (
            <LoadingComp />
          )}
          </tbody>
      </table>
    </div>
  </>
 )
}

export default SearchM
