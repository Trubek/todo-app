import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <div>
                <select onChange={function () { this.props.filterList(this.value) }}>
                    <option value='all'>All</option>
                    <option value='completed'>Completed</option>
                    <option value='active'>Active</option>
                </select>
            </div>
        )
    }
}
