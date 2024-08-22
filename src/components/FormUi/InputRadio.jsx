import React from 'react'

const InputRadio = ({ Label, register, errors, required, radionOption, type }) => {

    return (
        <div className='input_div'>
            <div className='input_checkbox'>
                {radionOption?.map((val,ind) =>
                    <div className='input_checkbox' key={ind}>
                        <input
                            type={type}
                            {...register(Label, { required: required })} />
                        <label>
                            {val}
                        </label>
                    </div>
                )}
            </div>
            {errors?.[`${Label}`]?.type && <small className='error_msg' >{errors?.[`${Label}`]?.message}</small>}
        </div>
    )
}

export default InputRadio