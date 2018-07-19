import React from 'react'

const SaveButton = (props) => {
    <div>
        <button className='button' onClick={() => props.saveList()}>Save</button>
    </div>
}

export default SaveButton;