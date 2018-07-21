import React from 'react'

const SaveButton = (props) => (
    <div className='buttonDiv'>
        <button className='buttonDiv-save' onClick={() => props.saveList()}>Save</button>
    </div>
)

export default SaveButton;