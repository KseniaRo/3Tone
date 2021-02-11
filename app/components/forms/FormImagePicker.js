import React from 'react'
import { useFormikContext } from "formik";

import ImageImputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name]
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }
  const handleRemove = (uri) => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
  }
  return (
    <>
      <ImageImputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}


