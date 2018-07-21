import React from 'react';

const SelectAll = (props) => (
    <div className='select-all'>
        <label className='box'>
            <input className='checkbox-input' type='checkbox' onChange={function(e) {props.selectAll(e)}}/>
            Select All
            <span className='checkmark'></span>
        </label>
    </div>
)

export default SelectAll;