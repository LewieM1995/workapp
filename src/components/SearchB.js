import React, { useState } from 'react';
import LoadingComp from './LoadingComp';
import './search.css'

function SearchB() {

  const [search, setSearch] = useState('');
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState()

  const db = `https://work-application-backend.onrender.com/batchitems?search=${search}`;


 async function getData() {
    try {
      setLoading(true);
      const res = await fetch(db);
      const info = await res.json();
      setCodes(info);
      console.log(info)
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
      <form className='searchB-form' onSubmit={batchSubmit}>
        <div className='searchB-Ddiv'>
          <input className='searchB-input' type='text' placeholder='Enter Date or Batch Number' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <label className='searchB-label'>Enter Date or Batch Number</label>
        </div>
          <button className='searchB-button' type='submit'>Find Items</button>
      </form>
    <div className='outputB-table'>
      <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Batch Number</th>
              <th>Product Code</th>
              <th>Product Name</th>
            </tr>
          </thead>
            <tbody>
              {! loading ? (
                filteredInfo.length > 0 ? (
                filteredInfo.filter((item) =>  
                    item.batchNum.toLowerCase().includes(search.toLowerCase()) ||
                    item.productcode.toLowerCase().includes(search.toLowerCase()) || 
                    item.productname.toLowerCase().includes(search.toLowerCase()) || 
                    item.date.toString().includes(search.toLowerCase())
              ).map((item) => (
                      <tr key={item.id}>
                        <td style={{width: 420 + "px" }}>{item.date}</td>
                        <td>{item.batchNum}</td>
                        <td>{item.productcode}</td>
                        <td>{item.productname}</td>
                    </tr>
              ))) : (
                <tr>
                  <td colSpan={6}>No results Found</td>
                </tr>
              )
              ) : (
                <LoadingComp/>
              )}
           </tbody>
      </table>
    </div>
  </>
 )
}

export default SearchB