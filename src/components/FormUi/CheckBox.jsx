import React from 'react'

const CheckBox = ({ Label, register, required, errors, type }) => {
    return (
        <div className='input_div'>
            <div className='input_checkbox'>
                <input type={type} {...register(Label, { required: required })} />
                <label>
                    {Label}
                </label>
            </div>
            {errors?.[`${Label}`]?.type && <small className='error_msg' >{errors?.[`${Label}`]?.message}</small>}
        </div>
    )
}

export default CheckBox