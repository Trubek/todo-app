import React from 'react';

const Filter = (props) => (
    <div>
        <select onChange={function() { props.filterList(this.value)}}>
            <option>All</option>
            <option>Completed</option>
            <option>Active</option>
        </select>
    </div>
)

export default Filter;