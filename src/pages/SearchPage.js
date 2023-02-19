import React, { useState } from 'react'
import SearchB from '../components/SearchB';
import SearchM from '../components/SearchM';

function SearchPage() {

    const [toggle, setToggle] = useState(false)

    const handleToggle = (e) => {
        e.preventDefault();
        setToggle(!toggle);
    }

  return (
    <>
        <div className='higher-wrapper'>
            <div className='btn-wrapper'>
                <button type='button' onClick={handleToggle} className='btn-search'>{toggle ? 'Batch Tracking' : 'Manual Blends' }</button>
            </div>
            <div className='search-wrapper'>
                {toggle ? <SearchB/> : <SearchM/>}
            </div>
        </div>
    </>
  )
}

export default SearchPage