import React from 'react';

const Filter = (props) => (
    <div>
        <select onChange={function() {props.filterList(this.value)}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='active'>Active</option>
        </select>
    </div>
)

export default Filter;