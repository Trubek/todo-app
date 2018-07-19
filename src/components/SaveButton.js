import React from 'react'

const SaveButton = (props) => (
    <div className='button-save'>
        <button className='button' onClick={() => props.saveList()}>Save</button>
    </div>
)

export default SaveButton;