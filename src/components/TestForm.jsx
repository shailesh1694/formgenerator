import React from 'react'
import { useForm } from 'react-hook-form';
import Input from './FormUi/Input';
import Select from './FormUi/Select';
import TeaxtArea from './FormUi/TeaxtArea';
import InputRadio from './FormUi/InputRadio';
import CheckBox from './FormUi/CheckBox';

const TestForm = ({ testForm, SetTestForm }) => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();


    const onSubmit = (data) => {
        alert("form submitted !")
        reset()
    }


    return (
        <>
            <div className='closebutton'>
                <button className='edit_button' onClick={() => SetTestForm((pre) => ({ ...pre, status: false, data: [] }))}>CloseForm</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    testForm?.data?.map((item) => {
                        if (item.tag === "input") {
                            if (item.Type === "radio") {
                                return <InputRadio
                                    key={item.id}
                                    Label={item.Label}
                                    required={item.IsRequired && item.Error_message}
                                    errors={errors}
                                    register={register}
                                    type={item.Type}
                                    radionOption={item?.Options?.split(";")}
                                />
                            } else if (item.Type === "checkbox") {
                                return <CheckBox
                                    key={item.id}
                                    Label={item.Label}
                                    required={item.IsRequired && item.Error_message}
                                    errors={errors}
                                    register={register}
                                    type={item.Type}
                                />
                            } else {
                                return <Input
                                    key={item.id}
                                    Label={item.Label}
                                    required={item.IsRequired && item.Error_message}
                                    errors={errors}
                                    register={register}
                                    type={item.Type}
                                />
                            }
                        } else if (item.tag === "select") {
                            return <Select
                                key={item.id}
                                Label={item.Label}
                                required={item.IsRequired && item.Error_message}
                                errors={errors}
                                register={register}
                                type={item.Type}
                                selectOptions={item?.Options?.split(";")}
                            />
                        } else if (item.tag === "textarea") {
                            return <TeaxtArea
                                key={item.id}
                                Label={item.Label}
                                required={item.IsRequired && item.Error_message}
                                errors={errors}
                                register={register}
                                type={item.Type}
                            />
                        }
                    }
                    )
                }

                <input className='add_button' type='submit' />
            </form>
        </>
    )
}

export default TestForm