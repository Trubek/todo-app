import React from 'react';

const Filter = (props) => (
    <div>
        <select onChange={function(test) { props.filterList(test.value)}}>
            <option>All</option>
            <option>Completed</option>
            <option>Active</option>
        </select>
    </div>
)

export default Filter;