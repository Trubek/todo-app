import React from 'react';

const SelectAll = (props) => (
    <div>
        <input type='checkbox' onClick={() => props.selectAll()}/>
        Select All
    </div>
)

export default SelectAll;