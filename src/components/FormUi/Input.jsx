import React from 'react'

const Input = ({ Label, register, required, errors, type,placeholder }) => {

    return (
        <div className='input_div'>
            <label>
                {Label}
            </label>
            <input
                placeholder={placeholder}
                type={type}
                {...register(Label, { required: required })}
            />
            {errors?.[`${Label}`]?.type && <small className='error_msg' >{errors?.[`${Label}`]?.message}</small>}
        </div>
    )
}

export default Input