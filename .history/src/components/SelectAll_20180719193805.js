import React from 'react';

const SelectAll = (props) => (
    <div className='select-all'>
        <input type='checkbox' onChange={function(e) {props.selectAll(e)}}/>
        Select All
    </div>
)

export default SelectAll;