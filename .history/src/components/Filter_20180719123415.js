import React from 'react';

const Filter = (props) => (
    <div>
        <select onChange={() => {let test = this; props.filterList(test)}}>
            <option>All</option>
            <option>Completed</option>
            <option>Active</option>
        </select>
    </div>
)

export default Filter;