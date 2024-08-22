import React, { useState } from 'react'
import TestForm from './TestForm'

const ShowForms = ({ showFroms }) => {
    const [testForm, SetTestForm] = useState({ status: false, data: [] })

    return (
        <>
            {
                testForm.status
                    ? <TestForm testForm={testForm} SetTestForm={SetTestForm} />
                    : <div className='show_forms'>
                        {showFroms?.map((item, inde) =>
                            <div className='form_field' key={inde}>
                                {item.map((val) => <div key={val.id}><p>{val.Label}</p></div>)}
                                <button className='edit_button' onClick={() => SetTestForm((pre) => ({ ...pre, status: true, data: item }))}>Test</button>
                            </div>
                        )}
                    </div>
            }
        </>
    )
}

export default ShowForms