import React from 'react'

const Select = ({ Label, register, required, errors, selectOptions }) => {

    return (
        <div className='input_div'>
            <label>
                {Label}
            </label>
            <select {...register(Label, { required: required })}>
                <option className='firstCapital' value={""}>{`Select ${Label}`}</option>
                {selectOptions.map((item, inde) => <option className='firstCapital' value={item} key={inde}>{item}</option>)}
            </select>
            {errors?.[`${Label}`]?.type && <small className='error_msg' >{errors?.[`${Label}`]?.message}</small>}
        </div>
    )
}

export default Select