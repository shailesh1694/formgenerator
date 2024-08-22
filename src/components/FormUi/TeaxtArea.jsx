import React from 'react'

const TeaxtArea = ({ Label, register, errors, required }) => {
    return (
        <div className='input_div'>
            <label>
                {Label}
            </label>
            <textarea
                {...register(Label, { required: required })}
            />
            {errors?.[`${Label}`]?.type && <small className='error_msg' >{errors?.[`${Label}`]?.message}</small>}
        </div>
    )
}

export default TeaxtArea