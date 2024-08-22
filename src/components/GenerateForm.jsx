import React from 'react'

const GenerateForm = ({ item, isEdited, setIsEdited, handleDelet }) => {

    return (<div className="form-generate">
        <div className='show_field'>
            <div className='show_button'><p>&rarr;</p><p>{item.Label}</p></div>
            <div className='show_button'>
                {(isEdited.status && isEdited?.data?.id === item.id)
                    ? <button
                        className='edit_button'
                        onClick={() => setIsEdited((pre) => { return { ...pre, status: false, data: {} } })} >
                        Cancell update
                    </button>
                    : <button
                        className='edit_button'
                        onClick={() => setIsEdited((pre) => { return { ...pre, status: true, data: item } })} >
                        Edit
                    </button>}
                <button className='delete_button' onClick={() => { handleDelet(item) }} >Delete</button>
            </div>
        </div>
    </div>
    )
}

export default GenerateForm