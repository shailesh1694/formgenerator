import React, { useEffect, useState } from 'react'
import { typeArray } from '../constant'
import { useForm } from "react-hook-form"
import Input from './FormUi/Input';
import Select from "./FormUi/Select"
import CheckBox from './FormUi/CheckBox';

const AddAndEditField = ({ handleFormField, isEdited }) => {
    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm(
        {
            defaultValues: {
                "id": isEdited?.data?.id,
                "tag": isEdited?.data?.tag,
                "Label": isEdited?.data?.Label,
                "Type": isEdited?.data?.Type,
                "IsRequired": isEdited?.data?.IsRequired,
                "Options": isEdited?.data?.Options,
                "Error_message": isEdited?.data?.Error_message
            }
        }
    );
    const onSubmit = (data) => {
        handleFormField(data)
        reset({
            id: undefined,
            IsRequired: false,
            Type: "",
            Label: "",
            Options: "",
            Error_message: ""
        })

    }
    const isRequired = watch("IsRequired")
    const tagtype = watch("Type")


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                Label={"Label"}
                required={"This is required !"}
                errors={errors}
                register={register}
                type={"text"}
            />
            <Select
                Label={"Type"}
                required={"This is required !"}
                errors={errors}
                register={register}
                selectOptions={typeArray.map((val) => val.value)}
            />
            {(tagtype === "radio" || tagtype === "select") &&
                <Input
                    Label={"Options"}
                    placeholder = "Enter ; seperated value"
                    required={"This is required !"}
                    errors={errors}
                    register={register}
                    type={"text"}
                />
            }

            <CheckBox
                Label={"IsRequired"}
                errors={errors}
                register={register}
                type={"checkbox"} 
                 />

            {isRequired &&
                <Input
                    Label={"Error_message"}
                    required={"This is required !"}
                    errors={errors}
                    register={register}
                    type={"text"}
                />
            }
            <input className='add_button' type='submit' value={isEdited.status ? "update" : "Add"} />
        </form>
    )
}

export default AddAndEditField