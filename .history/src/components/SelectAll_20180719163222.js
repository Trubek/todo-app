import React from 'react';

const SelectAll = (props) => (
    <div className='select-all'>
        <input type='checkbox' onClick={() => props.selectAll()}/>
        Select All
    </div>
)

export default SelectAll;