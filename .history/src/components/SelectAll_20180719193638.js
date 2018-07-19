import React from 'react';

const SelectAll = (props) => (
    <div className='select-all'>
        <input type='checkbox' onChange={function() {props.selectAll(this)}}/>
        Select All
    </div>
)

export default SelectAll;